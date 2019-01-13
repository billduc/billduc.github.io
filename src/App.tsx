import * as React from 'react'
import { Footer, Header, Main } from './Component'
import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <div data-aos="fade-up" data-aos-duration="500"> 
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
