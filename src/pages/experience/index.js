import React from 'react'
import './index.less'

const data = [
  {
    position: 'Start',
    company: 'My journey began',
    year: '',
    time: '',
  },
  {
    position: 'Fresher Front-end Developer',
    company: 'Acexis Company',
    year: '1 year',
    time: 'July 2019 - July 2020',
  },
  {
    position: 'Continue . . .',
    company: 'Continue new experiences',
    year: '',
    time: '',
  },
]

class Experience extends React.PureComponent {
  render() {
    return (
      <div id="experience" className="experience">
        <div className="section">
          <div className="section__head">
            <p>Experience</p>
          </div>
          <div className="section__body">
            {data.map((item, index) => (
              <div key={index} className="experience-item">
                <div className="experience-item-time">
                  <div className="line-1"></div>
                  <div className="circle"></div>
                  <div className="line-2"></div>
                </div>
                <div className="experience-item-content">
                  <div className="experience-item-name">
                    <p className="experience-item-position">{item.position}</p>
                    <p className="experience-item-company">{item.company}</p>
                  </div>
                  <div className="experience-item-year">
                    <p className="experience-item-count">{item.year}</p>
                    <p className="experience-item-start">{item.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Experience
