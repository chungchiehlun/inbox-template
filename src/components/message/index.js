import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './index.css'

const Message = () => (
  <div styleName="message">
    <div styleName="info">
      <div styleName="from"><img src="http://blog.sportafolio.com/wp-content/uploads/2015/08/zlatan.jpg" alt="img"/>
        <div styleName="sender">
          <h5>Zlatan Ibrahimovic</h5><span>To: <a href="#">destabiliseus@gmail.com</a></span>
        </div>
      </div>
      <div>
        <i styleName="reply"></i>
        <i styleName="star-o"></i>
        <i styleName="trash-o"></i>
      </div>
    </div>
    <h2>The challenge of learning Swedish</h2>
    <p>Most Swedes speak English – which certainly helps a first-time visitor in Stockholm. But it makes learning Swedish somewhat harder, according to former expat Charlotte West.</p><img src="http://blogs.haverford.edu/lund/files/2014/02/sweden-798-b74c07f139ac68786a085e2650fd9ad9.jpg" alt="img"/>
    <h3>Newly arrived</h3>
    <p>I arrived in Sweden in August 2002 armed with Prisma’s Abridged English-Swedish and Swedish-English Dictionary and an eight-week intensive Swedish course from the University of California at Berkeley behind me. Four years later, the dog-eared dictionary had grammar notes scribbled in the margins and I had become a fluent Swedish speaker, more or less.</p>
    <h2>Swedish Word of the Day</h2>
    <p>A big part of the reason my spoken Swedish got good is that I quickly met Swedish friends who were willing to help me practise. One of our techniques was keeping track of our ‘Swedish Word of the Day’ on a list tacked to the kitchen cupboard.</p>
  </div>
)

export default CSSModules(Message, styles)
