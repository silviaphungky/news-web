import React, { Component } from "react"
import MainLogo from '../components/logos/MainLogo'
import Card from '../components/cards/Card'
import { getTopHeadlines } from '../service/api/v1/news'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultCountry: 'id',
      articles: []
    }
  }

  componentDidMount() {
    getTopHeadlines(this.state.defaultCountry)
    .then((res) => {
      this.setState({
        articles: res.data.articles
      })
    })
    .catch(() => {
      alert('Error Fetching Data !')
    })
  }

  render () {
    return (
      <div>
        <div className="wrapper-logo">
          <MainLogo />
        </div>
        <div className="wrapper-card">
          {this.state.articles.map((article) => (
            <Card article={article} />
          ))}
        </div>
      </div>
    )
  }
}

export default MainPage