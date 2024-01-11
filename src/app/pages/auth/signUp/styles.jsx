import theme from '@/app/theme'

const styles = {
  inputLabel: {
    marginLeft: -1.8,
    color: theme.palette.primary.main,
  },
  inputHelperText: {
    marginLeft: 0
  },
  inputTypeNumber: {
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": 
    {display: "none"}, "& input[type=number]": {MozAppearance: "textfield"}
  },
  submitButton: {
    marginTop: theme.spacing(6)
  },
  circularProgress: {
    display: 'block', 
    margin: `${theme.spacing(6)} auto 0 auto`
  }
}

export default styles