import React from 'react'

import avatar from '@misc/svg/overview/avatar.svg'

class Slider4 extends React.PureComponent {
  render() {
    return (
      <div className='slider'>
        <img className='avatar' src={avatar} alt='avatar' />
        <span className='name'>Trịnh Nhất Sinh</span>
        <span className='position'>(Web Developer)</span>
      </div>
    )
  }
}

export default Slider4