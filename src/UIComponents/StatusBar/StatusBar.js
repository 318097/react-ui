import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import colors from "../../magicdust/colors";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

const crux = (arr = [], cmd, node) => {
  if (!arr) return { arr: [] };

  if (!node) return { arr };
  if (cmd !== "add" && !node.id) return { arr };

  let result = [],
    extra;
  switch (cmd) {
    case "add":
      const id = uuidv4();
      result = [...arr, { id, visible: true, ...node }];
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
  max-width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 2px;
  background: ${colors.strokeOne};
  padding: 0;
  height: 28px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  h3 {
    white-space: nowrap;
  }
  .items-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    max-width: 100%;
    width: 100%;
    .v-divider {
      display: inline-block;
      width: 1px;
      height: 100%;
      background: ${colors.white};
      flex-shrink: 0;
    }
    .item {
      height: 100%;
      padding: 0 8px;
      flex-shrink: 0;
      color: white;
      background: ${colors.steel};
    }
  }
`;
``;

const StatusBar = ({ title, className, ...others }) => {
  const [data, setData] = useState([]);

  const classes = classNames({
    [className]: true,
  });

  useEffect(() => {
    document.addEventListener("status-bar", handleCustomEvent);
    return () => document.removeEventListener("status-bar", handleCustomEvent);
  }, [data]);

  const handleCustomEvent = (event) => {
    const { cmd, input, cb = () => {} } = event.detail;
    const { expires } = input;

    const update = crux(data, cmd, input);

    if (cmd !== "read") setData(update.arr);
    cb(update);

    if (expires && cmd === "add") {
      setTimeout(() => {
        setData((prev) => crux(prev, "remove", { id: update.extra }).arr);
      }, expires);
    }
  };

  return (
    <StyledContainer className={classes} {...others}>
      {title && <h3 className="pl pr">{title}</h3>}
      <div className="items-container">
        {data
          .filter((item) => item.visible)
          .map(({ value, title, styles, id }, idx) => {
            return (
              <Fragment key={id}>
                {idx > 0 && idx < data.length && (
                  <span className="v-divider"></span>
                )}
                <div className="item fcc" style={styles}>
                  {title && <div className="title">{title}</div>}
                  <div className="value">{value}</div>
                </div>
              </Fragment>
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

StatusBar.triggerEvent = triggerEvent;

StatusBar.defaultProps = {
  className: "status-bar",
};

export default StatusBar;
