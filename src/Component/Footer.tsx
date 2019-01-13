import * as React from 'react'
import { Container } from 'reactstrap'
import './Footer.css'

export default class Footer extends React.Component {
  render() {
    return (
      <Container>
      <footer className="App-footer">
        <div>
          <br/>
          <small>----0xFFFF Nguyen Trung Duc 0xFFFF----</small>
          <br/>
        </div>
        <br />
        <div className="App-products">
          <a href="#" target="_blank">
            Resume-Pdf
          </a>
        </div>
      </footer>
      </Container>
    )
  }
}
