import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    fontFamily: 'Lato'
  },
  root: {
    flexGrow: 1,
  },
  information: {
    padding: '2rem',
    fontFamily: 'Lato',
    backgroundColor: theme.palette.background.default,
  },
  subInfo: {
    padding: '1rem 2rem 2rem 2rem',
  },
  empty: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Lato',
    padding: '2rem'
  },
  outer: {
    minHeight: '79vh'
  }
}));