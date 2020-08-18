import React, { Component } from 'react'
import './App.less'

import Overview from '@pages/overview'
import Introduce from '@pages/introduce'
import Experience from '@pages/experience'
import Skill from '@pages/skill'
import Education from '@pages/education'
import Footer from '@pages/footer'
import ToolBar from '@pages/toolbar'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <ToolBar />
        <Overview />
        <div className="body">
          <div className="content">
            <Introduce />
            <Experience />
            <Skill />
            <Education />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default App
