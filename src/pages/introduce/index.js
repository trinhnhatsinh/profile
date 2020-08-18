import React from 'react'
import './index.less'

import avatar from '@misc/png/avatar.png'

import calendarIcon from '@misc/svg/introduce/calendar.svg'
import genderIcon from '@misc/svg/introduce/gender.svg'
import addressIcon from '@misc/svg/introduce/address.svg'
import mailIcon from '@misc/svg/introduce/mail.svg'
import phoneIcon from '@misc/svg/introduce/phone.svg'

import { FacebookIcon, GmailIcon } from '@components/icons'

const data = [
  {
    icon: calendarIcon,
    title: 'Workplace:',
    content: 'TP. Hồ Chí Minh',
  },
  {
    icon: calendarIcon,
    title: 'Worktime:',
    content: 'Parttime',
  },
  {
    icon: calendarIcon,
    title: 'Age:',
    content: '22',
  },
  {
    icon: genderIcon,
    title: 'Gender:',
    content: 'Male',
  },
  {
    icon: phoneIcon,
    title: 'Phone:',
    content: '0867482516',
  },
  {
    icon: mailIcon,
    title: 'Mail:',
    content: 'trinhnhatsinh123@gmail.com',
  },
  {
    icon: addressIcon,
    title: 'Address:',
    content: 'Hoài Sơn, Hoài Nhơn, Bình Định',
  },
]

class Introduce extends React.PureComponent {

  openFacebook = () => {
    window.open('https://www.facebook.com/profile.php?id=100009391918010', 'blank')
  }

  openGmail = () => {
    window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', 'blank')
  }

  render() {
    return (
      <div id="introduce" className="introduce">
        <div className="introduce__left">
          <div className="introduce-avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="introduce-information">
            <p className="introduce-information-name">Trịnh Nhất Sinh</p>
            <p className="introduce-information-major">Web Developer</p>
            <p className="introduce-information-experience">
              1 year experience
            </p>
            <div className="introduce-information-contact">
              <button type="button" onClick={this.openFacebook}>
                <FacebookIcon width='18' />
              </button>
              <button type="button" onClick={this.openGmail}>
                <GmailIcon width='18' />
              </button>
            </div>
          </div>
        </div>
        <div className="introduce__right">
          {data.map((item, index) => {
            return (
              <div key={index} className="information-item">
                <div className="information-item-title">
                  <span>{item.title}</span>
                </div>
                <div className="information-item-content">{item.content}</div>
              </div>
            )
          })}
        </div>
      </div>

      // <div className="introduce">
      //   <div className="wrapper-avatar">
      //     <img src={avatar} alt="avatar" />
      //   </div>
      //   <div className="information">
      //     <p className="name">Trịnh Nhất Sinh ( Web Developer )</p>
      //     {data.map((item, index) => {
      //       return (
      //         <div key={index} className="information-item">
      //           <div className="information-item-title">
      //             <img src={item.icon} alt="icon-calendar" />
      //             <span>{item.title}</span>
      //           </div>
      //           <div className="information-item-content">
      //             {item.content}
      //           </div>
      //         </div>
      //       )
      //     })}
      //   </div>
      // </div>
    )
  }
}

export default Introduce
