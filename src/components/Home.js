import React, { useState } from "react";
import { Button, Card, Tag, Input, PageHeader } from "../UIComponents";
import "./Home.scss";

const UIComponent = ({ type }) => {
  const [input, setInput] = useState();

  switch (type) {
    case "BUTTON":
      return <Button>Test</Button>;
    case "CARD":
      return <Card>Test file</Card>;
    case "TAG":
      return <Tag>Test file</Tag>;
    case "INPUT":
      return <Input value={input} onChange={(e, value) => setInput(value)} />;
    case "PAGEHEADER":
      return (
        <PageHeader title={<h3>Title</h3>} actions={<span>Actions</span>} />
      );
    default:
      return null;
  }
};

const uiList = ["BUTTON", "CARD", "TAG", "INPUT", "PAGEHEADER"];

const Home = () => {
  return (
    <div className="ui-container">
      {uiList.map((type) => (
        <div key={type} className="item">
          <UIComponent type={type} />
          <span className="name">{type}</span>
        </div>
      ))}
    </div>
  );
};

export default Home;
