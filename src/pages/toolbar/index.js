import React from 'react'
import './index.less'

import {
  TopIcon,
  ExperienceIcon,
  EducationIcon,
  SkillIcon,
  ProjectIcon,
  InformationIcon,
} from '@components/icons'

class ToolBar extends React.PureComponent {
  handleScrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  handleScrollElement = ele => {
    document.getElementById(ele).scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (
      <div className="tool-bar">
        <button
          type="button"
          title="Top"
          className="button-active"
          onClick={this.handleScrollTop}
        >
          <TopIcon width="22" />
        </button>
        <button
          type="button"
          title="Information"
          onClick={() => this.handleScrollElement('introduce')}
        >
          <InformationIcon width="22" />
        </button>
        <button
          type="button"
          title="Experience"
          onClick={() => this.handleScrollElement('experience')}
        >
          <ExperienceIcon width="22" />
        </button>
        <button
          type="button"
          title="Skills"
          onClick={() => this.handleScrollElement('skill')}
        >
          <SkillIcon width="22" />
        </button>
        <button
          type="button"
          title="Projects"
          onClick={() => this.handleScrollElement('project')}
        >
          <ProjectIcon width="22" />
        </button>
        <button
          type="button"
          title="Education"
          onClick={() => this.handleScrollElement('education')}
        >
          <EducationIcon width="22" />
        </button>
      </div>
    )
  }
}

export default ToolBar
