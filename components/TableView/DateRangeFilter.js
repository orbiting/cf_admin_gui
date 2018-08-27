import React, { Component } from 'react'
import {
  Field,
  Dropdown,
  Interaction,
} from '@project-r/styleguide'
import moment from 'moment'

import styles from './styles'

const standardDate = rawDate =>
  moment(rawDate).format('YYYY-MM-DD')

const localDate = rawDate =>
  moment(rawDate).format('YYYY-MM-DD')

export default class DateRangeFilter extends Component {
  constructor(props) {
    super(props)

    this.state = this.props.dateRange || {
      field: this.props.fields[0],
      from: standardDate('2017-04-20'),
      to: standardDate({}),
    }

    this.handleSelectedField = ({ value }) => {
      this.setState(
        () => ({
          field: value,
        }),
        this.emitChange
      )
    }
    this.handleStartDate = event => {
      const value = event.target.value
      this.setState(
        () => ({
          from: value,
        }),
        this.emitChange
      )
    }

    this.handleEndDate = event => {
      const value = event.target.value
      this.setState(
        () => ({
          to: value,
        }),
        this.emitChange
      )
    }

    this.emitChange = () => {
      if (this.props.onChange) {
        const { field, from, to } = this.state
        this.props.onChange({
          field,
          from: localDate(from),
          to: localDate(to),
        })
      }
    }
  }

  render() {
    const { fields } = this.props
    const { field, from, to } = this.state

    return (
      <div>
        <Interaction.P>
          Filter by date
        </Interaction.P>
        <div {...styles.container}>
          <div {...styles.hBox}>
            <div {...styles.cell}>
              {fields.length > 1 ? (
                <Dropdown.Native
                  label={'Column'}
                  value={field}
                  items={fields.map(value => ({
                    value,
                    text: value,
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
            <div {...styles.cell}>
              <Field
                name="startDate"
                label="From"
                value={from}
                type="date"
                onChange={this.handleStartDate}
              />
            </div>
            <div {...styles.cell}>
              <Field
                name="endDate"
                label="Until"
                value={to}
                type="date"
                onChange={this.handleEndDate}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}