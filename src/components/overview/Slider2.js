import React from 'react'

import htmlIcon from '@misc/png/html.png'
import cssIcon from '@misc/png/css.png'
import jsIcon from '@misc/png/javascript.png'
import reactIcon from '@misc/png/react.png'

class Slider2 extends React.PureComponent {
  render() {
    return (
      <div className='slider'>
        <span className='title-competently'>Skills</span>
        <span className='title-detail-competently'>Study and practice for about 2 years +</span>
        <div className='list-language'>
          <div className='language-item'>
            <img src={htmlIcon} alt='icon-html' />
          </div>
          <div className='language-item'>
            <img src={cssIcon} alt='icon-css' />
          </div>
          <div className='language-item'>
            <img src={jsIcon} alt='icon-js' />
          </div>
          <div className='language-item'>
            <img src={reactIcon} alt='icon-js' />
          </div>
        </div>
      </div>
    )
  }
}

export default Slider2