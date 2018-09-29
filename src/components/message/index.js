import React from "react";
import "./index.module.css";

const Message = () => (
  <div styleName="message">
    <div styleName="info">
      <div styleName="from">
        <img
          styleName="image"
          src="https://avatars3.githubusercontent.com/u/6926451?s=460&v=4"
          alt="img"
        />
        <div styleName="sender">
          <h5>Jay Chung</h5>
          <span>
            To: <a>wuceh14678@gmail.com</a>
          </span>
        </div>
      </div>
      <div>
        <i className="fa fa-reply" styleName="icon" />
        <i className="fa fa-star-o" styleName="icon" />
        <i className="fa fa-trash-o" styleName="icon" />
      </div>
    </div>
    <h2>The challenge of learning Swedish</h2>
    <p>
      Most Swedes speak English – which certainly helps a first-time visitor in
      Stockholm. But it makes learning Swedish somewhat harder, according to
      former expat Charlotte West.
    </p>
    <h3>Newly arrived</h3>
    <p>
      I arrived in Sweden in August 2002 armed with Prisma’s Abridged
      English-Swedish and Swedish-English Dictionary and an eight-week intensive
      Swedish course from the University of California at Berkeley behind me.
      Four years later, the dog-eared dictionary had grammar notes scribbled in
      the margins and I had become a fluent Swedish speaker, more or less.
    </p>
    <h2>Swedish Word of the Day</h2>
    <p>
      A big part of the reason my spoken Swedish got good is that I quickly met
      Swedish friends who were willing to help me practise. One of our
      techniques was keeping track of our ‘Swedish Word of the Day’ on a list
      tacked to the kitchen cupboard.
    </p>
  </div>
);

export default Message;
