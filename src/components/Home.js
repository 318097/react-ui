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
  BlockerScreen,
  Dropdown,
  ProfileDropdown,
  ProfileAvatar,
} from "../UIComponents";
import "./Home.scss";
import colors from "../magicdust/colors";

const { triggerEvent, notify } = StatusBar;

const uiList = [
  "PROFILE_AVATAR",
  "PROFILE_DROPDOWN",
  "BUTTON",
  "RADIO",
  "DROPDOWN",
  "SELECT",
  "INPUT",
  "TEXTAREA",
  "PAGEHEADER",
  "CARD",
  "TAG",
  "STATUS",
  "LOADING",
  "CHECKBOX",
  "CHECKBOX_GROUP",
  "TIMELINE",
  "CONFIRMBOX",
  "EMPTYSTATE",
  "BLOCKERSCREEN",
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
      "bookmark",
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
                <Icon key={icon} type={icon} size={28} iconType={"outline"} />
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
    case "PROFILE_AVATAR":
      return (
        <ProfileAvatar
          name="Mehul Lakhanpal"
          size={46}
          // url="https://lh3.googleusercontent.com/a-/AOh14Gj3jT11sey95Pv4J12bgoIjqzc9IW0mNiZUjh7o0Q=s96-c"
        />
      );
    case "PROFILE_DROPDOWN":
      return (
        <ProfileDropdown
          name="Mehul Lakhanpal"
          email={"mehullakhanpal@gmail.com"}
          url="https://lh3.googleusercontent.com/a-/AOh14Gj3jT11sey95Pv4J12bgoIjqzc9IW0mNiZUjh7o0Q=s96-c"
          onItemClick={console.log}
        />
      );
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
          // disabled
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, a
          voluptate. Recusandae quod sint aliquid unde, hic fugit eaque.
          Repudiandae, ullam. Consequatur nam voluptatum atque eos, doloremque,
          aspernatur hic blanditiis recusandae quisquam laborum eveniet, natus
          iste temporibus id accusamus exercitationem quis numquam voluptatibus
          nesciunt? Aut harum dolorum, quidem accusamus a pariatur fuga sed amet
          quam, et minus earum ex corporis culpa repudiandae eius sapiente.
          Pariatur possimus, a excepturi aliquam ab molestiae maiores fugiat,
          quisquam doloremque cumque inventore. Iure beatae laudantium iusto
          minima, ullam odio animi ipsam dolores illum veniam numquam dolorem
          ducimus corrupti itaque ipsa cumque mollitia repellendus vitae. Fuga!
          {/* <Loading /> */}
          <Loading type="dot-loader" background="blur" />
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
          <div className="flex mb wrap" style={{ gap: "8px" }}>
            <Button onClick={() => notify("Test")}>Notify</Button>
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
    case "BLOCKERSCREEN":
      return (
        <div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non,
            placeat enim laborum quae similique ad cupiditate voluptatem
            maiores, vitae dignissimos quas accusamus, iusto assumenda ducimus
            natus deleniti sequi quia!
          </div>
          <BlockerScreen />
        </div>
      );
    case "DROPDOWN":
      return (
        <Dropdown
          value={"c"}
          // renderDropdownComponent={<div className="p-12">Hello World</div>}
          onChange={console.log}
          options={[
            { label: "Option A", value: "a" },
            { label: "Option B", value: "b" },
            { label: "Option C", value: "c" },
            { label: "Option D", value: "d" },
            { label: "Option E", value: "e" },
          ]}
        />
      );
    default:
      return null;
  }
};

export default Home;
