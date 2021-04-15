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
  Status,
} from "../UIComponents";
import "./Playground.scss";
import colors from "../magicdust/colors";

const { triggerEvent } = Status;

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
        color="watermelon"
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
        color="watermelon"
        label={"Check"}
        value={data.checkbox}
        onChange={(e, value) => setInputField({ checkbox: value })}
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
      <Status />
    </section>
  );
};

export default Playground;
