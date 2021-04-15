import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../magicdust/colors";
import { v4 as uuidv4 } from "uuid";

const crux = (arr = [], cmd, node) => {
  if (!arr) return { arr: [] };

  if (!node) return { arr };
  if (cmd !== "add" && !node.id) return { arr };

  let result = [],
    extra;
  switch (cmd) {
    case "add":
      const id = uuidv4();
      result = [...arr, { ...node, id }];
      extra = id;
      break;
    case "read":
      result = arr.find((item) => item.id === node.id);
      break;
    case "update":
      result = arr.map((item) =>
        item.id === node.id ? { ...item, ...node } : item
      );
      break;
    case "remove":
      result = arr.filter((item) => item.id !== node.id) || [];
      break;
  }
  return { arr: result, extra };
};

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${colors.strokeOne};
  padding: 0px 12px;
  height: 32px;
  overflow: hidden;
  .items-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    .item {
      height: 100%;
      padding: 0 4px;
    }
  }
`;
``;

const Status = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.addEventListener("status-bar", handleCustomEvent);
    return () => document.removeEventListener("status-bar", handleCustomEvent);
  }, [data]);

  const handleCustomEvent = (event) => {
    const { cmd, input, cb = () => {} } = event.detail;
    const update = crux(data, cmd, input);

    if (cmd !== "read") setData(update.arr);
    cb(update);
  };

  return (
    <StyledContainer>
      <h3 className="mr">Status Bar</h3>
      <div className="items-container">
        {data.map(({ value, title, styles, id }, idx) => {
          return (
            <div className="fcc" style={{ height: "100%" }} key={id}>
              {idx > 0 && idx < data.length && (
                <span key={idx} className="pl-4 pr-4">
                  •
                </span>
              )}
              <div className="item fcc" style={styles}>
                {title && <div className="title">{title}</div>}
                <div className="value">{value}</div>
              </div>
            </div>
          );
        })}
      </div>
    </StyledContainer>
  );
};

const triggerEvent = (cmd, input = {}, cb) => {
  const detail = { input, cmd, cb };

  const event = new CustomEvent("status-bar", { detail });
  document.dispatchEvent(event);
};

Status.triggerEvent = triggerEvent;

export default Status;
