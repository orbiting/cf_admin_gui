import { css } from 'glamor'
import { colors } from '@project-r/styleguide'

export default {
  formContainer: css({
    maxWidth: '600px',
    margin: '0 auto 4px auto',
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
  vBox: css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    maxHeight: '80px',
  }),
  statusLabel: css({
    display: 'block',
    color: colors.disabled,
    marginTop: '3px',
    marginBottom: '4px',
  }),
  cell: css({
    width: '33%',
  }),
  cellOne: css({
    width: '33%',
  }),
  cellTwo: css({
    width: '66%',
  }),
  trow: css({
    padding: '10px 0px',
    width: '100%',
    flexwWrap: 'nowrap',
    '&:nth-child(odd)': {
      backgroundColor: colors.secondaryBg,
    },
  }),
  thead: css({
    maxHeight: '40px',
    backgroundColor: '#fff',
    borderBottom: `1px solid ${colors.divider}`,
  }),
  interactive: css({
    cursor: 'pointer',
  }),
  searchField: css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    '& > *:not(:first-child)': {
      marginLeft: '10px',
    },
  }),
  toggleDisplay: css({
    position: 'relative',
  }),
  toggleInput: css({
    position: 'absolute',
    left: '-20px',
  }),
}