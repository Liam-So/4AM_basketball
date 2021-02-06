import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: '95%',
    height: '100%',
    paddingTop: '20px',
    border: 'none',
    boxShadow: 'none',
    paddingBottom: '20px'
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px'
  },
  cardLines: {
    display: 'flex',
    justifyContent: 'center'
  }
}));