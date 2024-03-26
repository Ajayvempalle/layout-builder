import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showLeftNavBar: true,
    showRightNavBar: true,
    showContent: true,
  }

  onToggleShowLeftNavBar = () => {
    this.setState(prevState => ({showLeftNavBar: !prevState.showLeftNavBar}))
  }

  onToggleShowRightNavBar = () => {
    this.setState(prevState => ({showRightNavBar: !prevState.showRightNavBar}))
  }

  onToggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  render() {
    const {showLeftNavBar, showRightNavBar, showContent} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showLeftNavBar,
          showRightNavBar,
          showContent,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowRightNavBar: this.onToggleShowRightNavBar,
          onToggleShowLeftNavBar: this.onToggleShowLeftNavBar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
