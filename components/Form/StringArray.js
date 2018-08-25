import React, { Component } from 'react'
import {
  colors,
  Label,
  Checkbox,
  Dropdown,
  Interaction,
} from '@project-r/styleguide'
import { css } from 'glamor'

const styles = {
  mask: css({
    '::placeholder': {
      color: 'transparent',
    },
    ':focus': {
      '::placeholder': {
        color: '#ccc',
      },
    },
  }),
  container: css({
    padding: '8px 8px 0 8px',
    backgroundColor: colors.secondaryBg,
  }),
  hBox: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    alignContent: 'stretch',
  }),
  cellOne: css({
    width: '33%',
  }),
  cellTwo: css({
    width: '66%',
  }),
  statusLabel: css({
    display: 'block',
    color: colors.disabled,
    marginTop: '3px',
    marginBottom: '4px',
  }),
  vBox: css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    maxHeight: '80px',
  }),
}

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.value || {
      field: props.fields[0][0],
      values: [],
    }

    this.handleSelectedField = ({ value }) => {
      this.setState(
        () => ({
          field: value,
          values: [],
        }),
        this.emitChange
      )
    }
    this.handleChoice = event => {
      const {
        name: value,
        checked,
      } = event.target
      const oldValues = this.state.values
      const cleanValues = oldValues.filter(
        v => v !== value
      )
      const values = checked
        ? [value, ...cleanValues]
        : cleanValues
      this.setState(
        () => ({
          values,
        }),
        this.emitChange
      )
    }
    this.emitChange = () => {
      if (this.props.onChange) {
        const { field, values } = this.state
        this.props.onChange(
          values.length > 0
            ? {
                field,
                values,
              }
            : undefined
        )
      }
    }
  }

  render() {
    const { fields } = this.props
    const { field, values } = this.state
    const selectedField = fields.find(
      v => v && v[0] === field
    )

    return (
      <div>
        <Interaction.P>
          Filter by status
        </Interaction.P>
        <div {...styles.container}>
          <div {...styles.hBox}>
            <div {...styles.cellOne}>
              {fields.length > 1 ? (
                <Dropdown.Native
                  label={'Column'}
                  value={field}
                  items={fields.map(value => ({
                    value: value[0],
                    text: value[0],
                  }))}
                  onChange={
                    this.handleSelectedField
                  }
                />
              ) : (
                <Field
                  label={'Column'}
                  value={fields[0]}
                  disabled
                />
              )}
            </div>
            <div {...styles.cellTwo}>
              <Label {...styles.statusLabel}>
                Status
              </Label>
              <div {...styles.vBox}>
                {selectedField
                  ? selectedField[1].map(
                      choice => (
                        <Checkbox
                          key={choice}
                          name={choice}
                          checked={
                            values.indexOf(
                              choice
                            ) >= 0
                          }
                          onChange={
                            this.handleChoice
                          }
                        >
                          {choice}
                        </Checkbox>
                      )
                    )
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default {
  Form,
}
