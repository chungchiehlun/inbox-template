import React from "react";
import "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InboxItem = ({ sender, title, content, date, labelClass }) => {
  return (
    <li styleName="inbox-item">
      <div styleName="inbox-sender">
        <div styleName="sender-name">{sender}</div>
        <div>
          <FontAwesomeIcon
            icon={["fas", "paperclip"]}
            styleName="sender-label"
          />
          <span styleName="sender-date">{date}</span>
        </div>
      </div>
      <div styleName="inbox-title">
        <div className={labelClass} />
        <div>{title}</div>
      </div>
      <p styleName="inbox-content">{content}</p>
    </li>
  );
};

const Inbox = () => (
  <ul styleName="inbox">
    <InboxItem
      sender="Jeremy Boateng"
      title="What are you doing tomorrow?"
      content={`
    Lörem ipsum dolör. Sit amet cönsectetur adipisicing elit sed dö eiusmod.
    Tempör incididunt ut laböre, et dölöre magnå. Aliquå såpien sollicitudin
    mi. Dapibus blåndit quäm. Erös risus ornåre leo årcu.
  `}
      date="Right now"
      labelClass="item-blue"
    />
    <InboxItem
      sender="Jeremy Boateng"
      title="What are you doing tomorrow?"
      content={`
        Lörem ipsum dolör. Sit amet cönsectetur adipisicing elit sed dö eiusmod.
        Tempör incididunt ut laböre, et dölöre magnå. Aliquå såpien sollicitudin
        mi. Dapibus blåndit quäm. Erös risus ornåre leo årcu.
  `}
      date="Yesterday, 12:42pm"
      labelClass="item-yellow"
    />
    <InboxItem
      sender="Marko Handanovic"
      title="Fashion News"
      content={`
        Cardigan before they sold out chartreuse fashion axe, 90's leggings
        mixtape stumptown waistcoat quinoa. Whatever bicycle rights pop-up
        keytar. Keytar fingerstache readymade four loko, fanny pack kickstarter.
      `}
      date="2 days ago, 08:32am"
      labelClass="item-green"
    />
    <InboxItem
      sender="Zlatan Ibrahimovic"
      title="The challenge of learning Swedish"
      content={`
        Most Swedes speak English – which certainly helps a first-time visitor
        in Stockholm. But it makes learning Swedish somewhat harder, according
        to former expat Charlotte West.
      `}
      date="A month ago, 01:02pm"
      labelClass="item-red"
    />
  </ul>
);

export default Inbox;
