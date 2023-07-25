import { faGithub, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {Link} from 'react-router-dom'

import im from '../img/pexel.jpg';
const About = () => {
  return (
    <div className='py-5 mt-5 container'>
      <div className="row">
        <div className="col-4">
          <div className="image_container shadow">
            <img src={im} alt="" />
          </div>
        </div>
        <div className="col-8 py-2 px-4">
          <h4>Biz haqimizda</h4>
          <p className="text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates quam architecto nulla iste soluta temporibus porro. Odit, similique tempore quas explicabo exercitationem, molestiae dolores saepe, perferendis culpa modi quisquam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil consectetur voluptates sunt earum sapiente quas? Minus enim recusandae alias atque assumenda sit aliquid molestiae placeat, nesciunt ducimus modi at nobis.
          </p>
          <div class="btn-group shadow" role="group" aria-label="Basic example">
            <Link class="btn btn-primary" to={'https://t.me/yagafarov'} >
              <FontAwesomeIcon icon={faTelegramPlane}  /> <span>Telegram</span>
            </Link>
            <Link class="btn btn-dark" to={'https://github.com/yagafarov'}>
              <FontAwesomeIcon icon={faGithub}  /> <span>Github</span>
            </Link>
            <Link class="btn btn-danger" to={'https://instagram.com/yagafarov_d_'}>
              <FontAwesomeIcon icon={faInstagram}  /> <span>Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About