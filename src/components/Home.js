import React, { useState } from "react";
import { Button, Card, Tag, Input, PageHeader, Icon } from "../UIComponents";
import "./Home.scss";
import colors from "../magicdust/colors";

const UIComponent = ({ type }) => {
  const [input, setInput] = useState();

  switch (type) {
    case "ICON":
      return <Icon type="check" fill={colors.orchid} />;
    case "BUTTON":
      return <Button>Test</Button>;
    case "CARD":
      return <Card curved>Test file</Card>;
    case "TAG":
      return <Tag>Test file</Tag>;
    case "INPUT":
      return (
        <Input curved value={input} onChange={(e, value) => setInput(value)} />
      );
    case "PAGEHEADER":
      return (
        <PageHeader title={<h3>Title</h3>} actions={<span>Actions</span>} />
      );
    default:
      return null;
  }
};

const uiList = ["BUTTON", "CARD", "TAG", "INPUT", "PAGEHEADER", "ICON"];
const icons = [
  "caret-left",
  "check",
  "delete",
  "plus",
  "google",
  "logout",
  "login",
  "minus",
  "edit",
  "drop",
  "wallet",
  "-",
  "binary-code",
  "binary-code-2",
  "cancel",
  "cancel-red",
  "check-2",
  "coding",
  "bulb",
  "football",
  "football-2",
  "football-3",
  "heart",
  "innovation",
  "interface",
  "like",
  "menu",
  "menu-2",
  "rounded",
  "shape-1",
  "shape-2",
  "shape-3",
];

const Home = () => {
  return (
    <section>
      <div className="iconList">
        {icons.map((icon) => (
          <span title={icon}>
            <Icon key={icon} type={icon} />
          </span>
        ))}
      </div>
      <div className="ui-container">
        {uiList.map((type) => (
          <div key={type} className="item">
            <UIComponent type={type} />
            <span className="name">{type}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
