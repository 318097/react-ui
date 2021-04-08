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
  return (
    <section id="playground">
      <Timeline
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
      />
    </section>
  );
};

export default Playground;
