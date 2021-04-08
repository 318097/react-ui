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
    </section>
  );
};

export default Playground;
