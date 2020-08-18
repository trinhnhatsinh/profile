import React from 'react'
import './index.less'

const dataSkills = [
  {
    content: 'HTML, CSS, Javascript',
  },
  {
    content: 'Less, Scss, Style-Component',
  },
  {
    content: 'React Js, Antd, Mobx, Webpack, Bable',
  },
  {
    content: 'Know basic Node JS, Graphql, Pouch DB',
  },
  {
    content: 'MySQL, Mongo DB, Couch DB',
  },
  {
    content: 'User Interface Design, Figma',
  },
  {
    content: 'Learning by myseft, Solve problem',
  },
  {
    content: 'Teamwork',
  },
]

const dataProjects = [
  {
    name: 'Elearning Website',
    using: 'Using: Less, MobX, React JS, Antd, Nest JS, Graphql, Mongo DB',
  },
  {
    name: 'Conference Website',
    using: 'Using: Less, MobX, React JS, Nest JS, Graphql, Mongo DB, Google Calendar',
  },
  {
    name: 'Package Chat',
    using: 'Using: React JS, Couch DB, Pouch DB',
  },
  {
    name: 'Profile Website',
    using: 'Using: HTML, Less, Javascript, React JS',
  },
]

class Skill extends React.PureComponent {
  render() {
    return (
      <div className="wrapper-skill-and-project">
        <div className="skill-and-project">
          <div id="skill" className="skill">
            <div className="section">
              <div className="section__head">
                <p>Skills</p>
              </div>
              <div className="section__body">
                {dataSkills.map((item, index) => (
                  <div key={index} className="skill-item">
                    {item.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div id='project' className="project">
            <div className="section">
              <div className="section__head">
                <p>Projects</p>
              </div>
              <div className="section__body">
                {dataProjects.map((item, index) => (
                  <div key={index} className="project-item">
                    <p className="project-name">{item.name}</p>
                    <p className="project-using">{item.using}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skill
