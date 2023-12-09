import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, currenciesList: []}

  componentDidMount() {
    this.getCurrencies()
  }

  getCurrencies = async () => {
    const url = 'https://apis.ccbp.in/crypto-currency-converte'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
      id: each.id,
    }))
    this.setState({
      isLoading: false,
      currenciesList: updatedData,
    })
  }

  renderList = () => {
    const {currenciesList} = this.state
    return (
      <div className="list">
        <h1>Cryptocurrency Tracker</h1>
        <img
          className="image"
          alt="cryptocurrency"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        />

        <div className="crypto-table">
          <div className="title-cont">
            <h1 className="title">Coin Type</h1>
            <div className="coins">
              <h1 className="title">USD</h1>
              <h1 className="title">EURO</h1>
            </div>
          </div>

          <ul>
            {currenciesList.map(each => (
              <CryptocurrencyItem detail={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderList()
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
