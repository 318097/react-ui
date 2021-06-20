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
  Loading,
  Timeline,
  ConfirmBox,
  Checkbox,
  TextArea,
  StatusBar,
  EmptyState,
  CheckboxGroup,
} from "../UIComponents";
import "./Home.scss";
import colors from "../magicdust/colors";

const { triggerEvent } = StatusBar;

const uiList = [
  "BUTTON",
  "RADIO",
  "SELECT",
  "INPUT",
  "TEXTAREA",
  "PAGEHEADER",
  "CARD",
  "TAG",
  "STATUS",
  "LOADING",
  "TIMELINE",
  "CONFIRMBOX",
  "CHECKBOX",
  "ICON",
  "EMPTYSTATE",
  "CHECKBOX_GROUP",
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
    icons: ["facebook", "twitter", "instagram", "google", "linkedin"],
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

  const [id, setId] = useState();

  const setInputField = (update) => setData((prev) => ({ ...prev, ...update }));

  switch (type) {
    case "ICON":
      return <Icon type="caret" direction="right" fill={colors.orchid} hover />;
    case "BUTTON":
      return <Button>Test</Button>;
    case "CARD":
      return (
        <Card
        // curved hover
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta
          incidunt vero? Vitae, atque culpa, aperiam optio quam dignissimos
          temporibus omnis reiciendis neque sed nihil expedita aliquam eum!
          Aliquam, iste tempore esse voluptate facere ratione voluptatem nihil
          accusantium illo laborum incidunt fuga ullam veritatis temporibus hic
          nostrum reprehenderit? Reprehenderit, unde?
        </Card>
      );
    case "TAG":
      return <Tag>Tag</Tag>;
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
          disabled
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
          // disabled
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
          // disabled
          options={[
            { label: "Option A", value: "a" },
            { label: "Option B", value: "b" },
            { label: "Looooooooooooooooooooong option", value: "c" },
            { label: "Option d", value: "d" },
            { label: "Option e", value: "e" },
          ]}
          value={data.select}
          onChange={(e, value) => setInputField({ select: value })}
        />
      );
    case "LOADING":
      return (
        <>
          <Loading />
          <Loading type="dot-loader" />
        </>
      );
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
          // disabled
          label={"Check"}
          value={data.checkbox}
          onChange={(e, value) => setInputField({ checkbox: value })}
        />
      );
    case "STATUS":
      return (
        <div className="flex column w-100">
          <div className="flex space-kids mb">
            <Button
              onClick={() =>
                triggerEvent(
                  "add",
                  {
                    id: "addd",
                    value: "Successfully created",
                    // expires: 3000,
                  },
                  ({ extra }) => setId(extra)
                )
              }
            >
              Add
            </Button>
            <Button
              onClick={() =>
                triggerEvent("update", {
                  id: "addd",
                  value: "Successfully updated..",
                })
              }
            >
              Update
            </Button>
            <Button
              onClick={() =>
                triggerEvent(
                  "read",
                  {
                    id,
                  },
                  console.log
                )
              }
            >
              Read
            </Button>
            <Button
              onClick={() =>
                triggerEvent(
                  "remove",
                  {
                    id,
                  },
                  console.log
                )
              }
            >
              Delete
            </Button>
          </div>
          <StatusBar />
        </div>
      );
    case "EMPTYSTATE":
      return <EmptyState input={[]}>Test</EmptyState>;
    case "CHECKBOX_GROUP":
      return (
        <CheckboxGroup
          onChange={(value) => setData({ checkboxGroup: value })}
          options={[
            { label: "Option A", value: "a" },
            { label: "Option B", value: "b" },
            { label: "Option C", value: "c" },
            { label: "Option D", value: "d" },
            { label: "Option E", value: "e" },
          ]}
          mode="single"
          value={data.checkboxGroup}
        />
      );
    default:
      return null;
  }
};

export default Home;
