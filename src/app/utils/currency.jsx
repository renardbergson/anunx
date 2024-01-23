const currencyFormat = value => {
  return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}

export {
  currencyFormat
}