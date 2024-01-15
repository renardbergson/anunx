import theme from '../../../theme'

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
  }
}

export default styles