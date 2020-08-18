import React from 'react'

import mysqlIcon from '@misc/png/mysql.png'
import graphqlIcon from '@misc/svg/overview/graphql.svg'
import sassIcon from '@misc/png/sass.png'

class Slider3 extends React.PureComponent {
  render() {
    return (
      <div className='slider'>
        <span className='title-competently'>Knowledge</span>
        <span className='title-detail-competently'>Accumulate in the process of working</span>
        <div className='list-language'>
          <div className='language-item'>
            <img src={mysqlIcon} alt='icon-mysql' />
          </div>
          <div className='language-item'>
            <img src={graphqlIcon} alt='icon-graphql' />
          </div>
          <div className='language-item'>
            <img src={sassIcon} alt='icon-sass' />
          </div>
        </div>
      </div>
    )
  }
}

export default Slider3