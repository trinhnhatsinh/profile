import React from 'react'
import './index.less'

import Slider1 from '@components/overview/Slider1'
import Slider2 from '@components/overview/Slider2'
import Slider3 from '@components/overview/Slider3'

import logoIcon from '@misc/png/logo.png'
import bannerIcon from '@misc/svg/overview/banner.svg'

class Overview extends React.PureComponent {
  state = {
    count: 0,
    idTime: null
  }

  handlePlusSlide = () => {
    let time

    switch (this.state.count % 3) {
      case 0:
        time = 3000
        break
      case 1:
        time = 6600
        break
      case 2:
        time = 6400
        break

      default:
        time = null
        break
    }

    clearTimeout(this.state.idTime)
    const id = setTimeout(this.handleTimeOut, time)
    this.setState(_preState => ({
      ..._preState,
      idTime: id
    }))
  }

  handleTimeOut = () => {
    this.setState(_preState => ({
      ..._preState,
      count: _preState.count + 1
    }))
    this.handlePlusSlide()
  }

  componentDidMount() {
    const id = setTimeout(this.handleTimeOut, 3000)
    this.setState(_preState => ({
      ..._preState,
      idTime: id
    }))
  }

  render() {
    const showSlider = this.state.count % 3

    const renderSlider = [<Slider1 />, <Slider2 />, <Slider3 />]

    return (
      <div className="overview">
        <div className="logo">
          <img src={logoIcon} alt="icon-logo" />
        </div>
        <div className="banner">
          <img src={bannerIcon} alt="icon-banner" />
          <div className="div-animation div-animation-1" />
          <div className="div-animation div-animation-2" />
          <div className="div-animation div-animation-3" />
          <div className="div-animation div-animation-4" />

          {renderSlider[showSlider]}
        </div>
      </div>
    )
  }
}

export default Overview
