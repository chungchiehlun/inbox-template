import React from "react";
import "./index.module.css";

const Inbox = () => (
  <ul styleName="inbox">
    <li styleName="inbox-item">
      <div styleName="inbox-sender">
        <div styleName="sender-name">
          <a>Jeremy Boateng</a>
        </div>
        <div styleName="sender-date">
          <i className="fa fa-paperclip" styleName="sender-label" />
          <span>Right now</span>
        </div>
      </div>
      <div styleName="inbox-title">
        <div styleName="label-blue" />
        <h4>What are you doing tomorrow?</h4>
      </div>
      <p>
        Lörem ipsum dolör. Sit amet cönsectetur adipisicing elit sed dö eiusmod.
        Tempör incididunt ut laböre, et dölöre magnå. Aliquå såpien sollicitudin
        mi. Dapibus blåndit quäm. Erös risus ornåre leo årcu.
      </p>
    </li>
    <li styleName="inbox-item">
      <div styleName="inbox-sender">
        <div styleName="sender-name">
          <a>Jeremy Boateng</a>
        </div>
        <div styleName="sender-date">
          <i className="fa fa-paperclip" styleName="sender-label" />
          <span>Yesterday, 12:42pm</span>
        </div>
      </div>
      <div styleName="inbox-title">
        <div styleName="label-yellow" />
        <h4>What are you doing tomorrow?</h4>
      </div>
      <p>
        Lörem ipsum dolör. Sit amet cönsectetur adipisicing elit sed dö eiusmod.
        Tempör incididunt ut laböre, et dölöre magnå. Aliquå såpien sollicitudin
        mi. Dapibus blåndit quäm. Erös risus ornåre leo årcu.
      </p>
    </li>
    <li styleName="inbox-item">
      <div styleName="inbox-sender">
        <div styleName="sender-name">
          <a>Marko Handanovic</a>
        </div>
        <div styleName="sender-date">
          <i className="fa fa-paperclip" styleName="sender-label" />
          <span>2 days ago, 08:32am</span>
        </div>
      </div>
      <div styleName="inbox-title">
        <div styleName="label-green" />
        <h4>Fashion News</h4>
      </div>
      <p>
        Cardigan before they sold out chartreuse fashion axe, 90's leggings
        mixtape stumptown waistcoat quinoa. Whatever bicycle rights pop-up
        keytar. Keytar fingerstache readymade four loko, fanny pack kickstarter.
      </p>
    </li>
    <li styleName="inbox-item">
      <div styleName="inbox-sender">
        <div styleName="sender-name">
          <a>Zlatan Ibrahimovic</a>
        </div>
        <div styleName="sender-date">
          <i className="fa fa-paperclip" styleName="sender-label" />
          <span>A month ago, 01:02pm</span>
        </div>
      </div>
      <div styleName="inbox-title">
        <div styleName="label-red" />
        <h4>The challenge of learning Swedish</h4>
      </div>
      <p>
        Most Swedes speak English – which certainly helps a first-time visitor
        in Stockholm. But it makes learning Swedish somewhat harder, according
        to former expat Charlotte West.
      </p>
    </li>
  </ul>
);

export default Inbox;
