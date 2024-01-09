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
  }
}

export default styles