import React, { useState } from "react";
import {
  Button,
  Card,
  Tag,
  Input,
  PageHeader,
  Icon,
  Radio,
  Select,
} from "../UIComponents";
import "./Home.scss";
import colors from "../magicdust/colors";

const UIComponent = ({ type }) => {
  const [input, setInput] = useState("");
  const [radio, setRadio] = useState("a");
  const [select, setSelect] = useState("a");

  switch (type) {
    case "ICON":
      return <Icon type="check" fill={colors.orchid} />;
    case "BUTTON":
      return <Button>Test</Button>;
    case "CARD":
      return (
        <Card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta
          incidunt vero? Vitae, atque culpa, aperiam optio quam dignissimos
          temporibus omnis reiciendis neque sed nihil expedita aliquam eum!
          Aliquam, iste tempore esse voluptate facere ratione voluptatem nihil
          accusantium illo laborum incidunt fuga ullam veritatis temporibus hic
          nostrum reprehenderit? Reprehenderit, unde?
        </Card>
      );
    case "TAG":
      return <Tag color={colors.yellow}>Tag</Tag>;
    case "INPUT":
      return <Input value={input} onChange={(e, value) => setInput(value)} />;
    case "PAGEHEADER":
      return (
        <PageHeader title={<h3>Title</h3>} actions={<span>Actions</span>} />
      );
      age;
    case "RADIO":
      return (
        <Radio
          options={[
            { label: "Option A", value: "a" },
            { label: "Option B", value: "b" },
          ]}
          value={radio}
          onChange={(value) => setRadio(value)}
        />
      );
    case "SELECT":
      return (
        <Select
          options={[
            { label: "Option A", value: "a" },
            { label: "Option B", value: "b" },
            { label: "Long option abcedddfdadf", value: "c" },
            { label: "Option d", value: "d" },
            { label: "Option e", value: "e" },
            { label: "Option f", value: "f" },
          ]}
          value={select}
          onChange={(value) => setSelect(value)}
        />
      );
    default:
      return null;
  }
};

const uiList = [
  "BUTTON",
  "RADIO",
  "SELECT",
  "INPUT",
  "PAGEHEADER",
  "CARD",
  "TAG",
];
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
  "cancel-2",
  "check-2",
  "tag",
  "bulb",
  "football",
  "football-2",
  "football-3",
  "heart-2",
  "bulb-2",
  "triangle-2",
  "heart",
  "menu",
  "menu-2",
  "circle",
  "circle-3",
  "circle-2",
  "triangle",
  "facebook",
  "twitter",
  "instagram",
  "settings",
  "upload",
  "home",
  "copy",
];

const Home = () => {
  return (
    <section>
      <div className="ui-container">
        {uiList.map((type) => (
          <div key={type} className="item">
            <UIComponent type={type} />
            <span className="name">{type}</span>
          </div>
        ))}
      </div>

      <div className="iconList">
        {icons.map((icon) => (
          <span title={icon} key={icon}>
            <Icon key={icon} type={icon} />
          </span>
        ))}
      </div>
    </section>
  );
};

export default Home;
