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
} from "../UIComponents";
import "./Playground.scss";
import colors from "../magicdust/colors";

const { triggerEvent } = StatusBar;

const Playground = () => {
  const [data, setData] = useState({
    input: "",
    textarea: "",
    radio: "a",
    select: "a",
    checkbox: true,
  });

  const [id, setId] = useState();

  const setInputField = (update) => setData((prev) => ({ ...prev, ...update }));

  return (
    <section id="playground" className="db">
      <Input
        value={data.input}
        // disabled
        onChange={(e, value) => setInputField({ input: value })}
      />
      <Radio
        options={[
          { label: "Option A", value: "a" },
          { label: "Option B", value: "b" },
        ]}
        value={data.radio}
        onChange={(e, value) => setInputField({ radio: value })}
      />
      <Checkbox
        // size="sm"
        // disabled
        label={"Check"}
        value={data.checkbox}
        onChange={(e, value) => setInputField({ checkbox: value })}
      />
      <Icon
        style={{ margin: "0 0 0 12px" }}
        type="arrow"
        background
        direction="up"
      />
      <Select
        // disabled
        color="watermelon"
        options={[
          { label: "Option A", value: "a" },
          { label: "Option B", value: "b" },
          { label: "Loooooooooooooooooooooooooooooong option", value: "c" },
          { label: "Option d", value: "d" },
          { label: "Option e", value: "e" },
        ]}
        value={data.select}
        onChange={(e, value) => setInputField({ select: value })}
      />
      <div className="defaults">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cumque,
        maxime odio blanditiis sapiente animi hic mollitia tempora ex saepe
        molestias perferendis et sit eum soluta doloremque? Vel a fugiat
        obcaecati sequi mollitia! Sed libero accusantium architecto debitis,
        quidem cum rerum magnam velit ut harum quas sit recusandae culpa,
        excepturi sequi quod, ab maiores vero illum. Labore voluptatibus porro
        ducimus? Ducimus commodi cumque architecto labore temporibus culpa modi
        doloribus aut, mollitia natus ex dolorum repellendus laborum. Ipsa quos
        nulla alias voluptatum, nostrum modi tempora sapiente omnis quia, iure
        praesentium ratione consectetur reiciendis aliquam accusamus quibusdam?
        Temporibus placeat eaque ratione numquam.
      </div>
      <StatusBar />
    </section>
  );
};

export default Playground;
