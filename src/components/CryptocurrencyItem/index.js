import './index.css'

const CryptocurrencyItem = props => {
  const {detail} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = detail

  return (
    <li className="list">
      <div className="coin-cont">
        <img className="logo" alt={currencyName} src={currencyLogo} />
        <p className="value">{currencyName}</p>
      </div>

      <div className="value-cont">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
