import 'bootstrap/dist/css/bootstrap.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(<App/>, document.getElementById('root') as HTMLElement)
registerServiceWorker()

import './Resource/aos.css'
const AOS = require('aos')
AOS.init()
