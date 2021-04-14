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
import "./Playground.scss";
import colors from "../magicdust/colors";

const Playground = () => {
  const [data, setData] = useState({
    input: "",
    textarea: "",
    radio: "a",
    select: "a",
    checkbox: true,
  });

  const setInputField = (update) => setData((prev) => ({ ...prev, ...update }));

  return (
    <section id="playground" className="db">
      {/* <Timeline
        items={[
          {
            name:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus            exercitationem eveniet ab vero atque. Modi reprehenderit libero            officiis amet repellendus explicabo pariatur saepe, quos, enim            doloremque recusandae maiores sed unde!",
            id: 1,
          },
          { name: "Item 2", id: 2 },
        ]}
        renderItem={(item) => (
          <div className="timeline-card">
            <div>Test string</div>
            {item.name}
          </div>
        )}
      /> */}
      <Button color="watermelon" fontColor="white">
        Test
      </Button>
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
          { label: "Option f", value: "f" },
        ]}
        value={data.select}
        onChange={(e, value) => setInputField({ select: value })}
      />
    </section>
  );
};

export default Playground;
