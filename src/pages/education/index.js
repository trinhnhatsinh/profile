import React from 'react'
import './index.less'

const data = [
  {
    time: 'From 2016 to present',
    name: 'Studying at University of Science (HCMUS)',
    description: 'Faculty of Information Technology',
  },
  {
    time: 'June 2019',
    name: 'Second prize in the hackathon competition at UIT-HCM',
    description:
      'The contest is organized by UIT-HCM for students who are interested in website programming',
  },
]

class Education extends React.PureComponent {
  render() {
    return (
      <div id='education' className="education">
        <div className="section">
          <div className="section__head">
            <p>Education & Awards</p>
          </div>
          <div className="section__body">
            {data.map((item, index) => (
              <div key={index} className="education-item">
                <div className="education-time">{item.time}</div>
                <div className="education-circle"></div>
                <div className="education-content">
                  <p className="education-name">{item.name}</p>
                  <p className="education-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Education
