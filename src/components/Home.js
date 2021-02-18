import React, { useState, Fragment } from "react";
import {
  Button,
  Card,
  Tag,
  Input,
  PageHeader,
  Icon,
  Radio,
  Select,
  Spinner,
  Timeline,
  ConfirmBox,
  Checkbox,
  TextArea,
} from "../UIComponents";
import "./Home.scss";
import colors from "../magicdust/colors";

const uiList = [
  "BUTTON",
  "RADIO",
  "SELECT",
  "INPUT",
  "TEXTAREA",
  "PAGEHEADER",
  "CARD",
  "TAG",
  "SPINNER",
  "TIMELINE",
  "CONFIRMBOX",
  "CHECKBOX",
  "ICON",
];

const icons = [
  {
    title: "Basic",
    icons: [
      "caret-left",
      "left-arrow",
      "close",
      "plus",
      "minus",
      "edit",
      "delete",
      "check",
      "home",
      "settings",
      "menu",
      "menu-2",
      "login",
      "logout",
      "copy",
    ],
  },
  {
    title: "Social",
    icons: ["facebook", "twitter", "instagram", "google"],
  },
  {
    title: "Others",
    icons: [
      "check-2",
      "cancel",
      "cancel-2",
      "upload",
      "binary-code",
      "binary-code-2",
      "tag",
      "football",
      "football-2",
      "bulb",
      "bulb-2",
      "heart",
      "heart-2",
      "circle",
      "circle-2",
      "circle-3",
      "triangle",
      "triangle-2",
      "wallet",
      "drop",
    ],
  },
];

const Home = () => {
  return (
    <section id="react-ui">
      <div className="ui-container">
        {uiList.map((type) => (
          <div key={type} className="item">
            <UIComponent type={type} />
            <span className="name">{type}</span>
          </div>
        ))}
      </div>

      {icons.map(({ title, icons }) => (
        <Fragment>
          <h3 className="icon-title">{title}</h3>
          <div className="icon-list">
            {icons.map((icon) => (
              <span className="icon-container" title={icon} key={icon}>
                <Icon key={icon} type={icon} size={28} />
                <span className="name">{icon}</span>
              </span>
            ))}
          </div>
        </Fragment>
      ))}
    </section>
  );
};

const UIComponent = ({ type }) => {
  const [data, setData] = useState({
    input: "",
    textarea: "",
    radio: "a",
    select: "a",
    checkbox: true,
  });

  const setInputField = (update) => setData((prev) => ({ ...prev, ...update }));

  switch (type) {
    case "ICON":
      return <Icon type="caret" direction="right" fill={colors.orchid} />;
    case "BUTTON":
      return <Button>Test</Button>;
    case "CARD":
      return (
        <Card curved hover>
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
      return (
        <Input
          value={data.input}
          onChange={(e, value) => setInputField({ input: value })}
        />
      );
    case "TEXTAREA":
      return (
        <TextArea
          value={data.textarea}
          onChange={(e, value) => setInputField({ textarea: value })}
        />
      );
    case "PAGEHEADER":
      return (
        <PageHeader title={<h3>Title</h3>} actions={<span>Actions</span>} />
      );
    case "RADIO":
      return (
        <Radio
          options={[
            { label: "Option A", value: "a" },
            { label: "Option B", value: "b" },
          ]}
          value={data.radio}
          onChange={(e, value) => setInputField({ radio: value })}
        />
      );
    case "SELECT":
      return (
        <Select
          options={[
            { label: "Option A", value: "a" },
            { label: "Option B", value: "b" },
            { label: "Looooooooooooooooooooong option", value: "c" },
            { label: "Option d", value: "d" },
            { label: "Option e", value: "e" },
            { label: "Option f", value: "f" },
          ]}
          value={data.select}
          onChange={(e, value) => setInputField({ select: value })}
        />
      );
    case "SPINNER":
      return <Spinner />;
    case "TIMELINE":
      return (
        <Timeline
          items={[
            {
              name: "Item 1",
              id: 1,
            },
            { name: "Item 2", id: 2 },
          ]}
          renderItem={(item) => (
            <Fragment>
              <div className="timeline-left-container">
                <div className="timeline-card">{item.name}</div>
              </div>
              {/* <div className="right">
                <div className="card">{item.name}</div>
              </div> */}
            </Fragment>
          )}
        />
      );
    case "CONFIRMBOX":
      return (
        <ConfirmBox>
          <Button>Delete</Button>
        </ConfirmBox>
      );
    case "CHECKBOX":
      return (
        <Checkbox
          // size="sm"
          label={"Check"}
          value={data.checkbox}
          onChange={(e, value) => setInputField({ checkbox: value })}
        />
      );
    default:
      return null;
  }
};

export default Home;
