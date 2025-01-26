import React from 'react'
import {Footer} from '../index'
const Home = () => {
  return (
    <div className='techwave_fn_content'>
      <div className='techwave_fn_page'>
        <div className='techwave_fn_home'>
          <div className='section_home'>
          <div className='section_left'>
            <div className='techwave_fn_title_holder'>
              <h1 className='title'>Automate Your Crypto Trading</h1>
           
            <p className='desc'>
              Crypto Trading Financial Bot for buying and Selling Crypto
            </p>
            </div>
          
          <div className='techwave_fn_interactive_list'>
            <ul>
              <li>
                <div className='item'>
                  <a>
                    <span className='icon'>
                      <img src='img/lighticon/light-19.png' className='fn__svg'></img>
                    </span>
                    <h2 className='title'>
                      Buy Any Token
                    </h2>
                    <p className='desc'>
                    Buy any token with our automated trading bot
                    </p>
                    <span className='arrow'>
                      <img src='img/lighticon/light-22.png' className='fn__svg'></img>
                    </span>
                  </a>
                </div>
              </li>
              <li>
                <div className='item'>
                  <a>
                    <span className='icon'>
                      <img src='img/lighticon/light-16.png' className='fn__svg'></img>
                    </span>
                    <h2 className='title'>
                      Sell Any Token
                    </h2>
                    <p className='desc'>
                    Buy any token with our automated trading bot
                    </p>
                    <span className='arrow'>
                      <img src='img/lighticon/light-22.png' className='fn__svg'></img>
                    </span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          </div>

         
          <div className='section_right'>
            <div className='company_info'>
              <img src='img/light-logo.png'></img>
              <p className='fn__animated_text'>
              Crypto Trading Financial Bot

              </p>
              <hr />
              <div className='fn__members'>
                <div className='active item'>
                  <span className='circle'></span>
                  <span className='text'>11111 Online</span>
                </div>
                <div className='item'>
                <span className='circle'></span>
                <span className='text'>23456 Members</span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
   <Footer/>
    </div>
  )
}

export default Home