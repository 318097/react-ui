/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, Fragment } from "react";
import colors, { Icon, Card, Button, Input, Select } from "../../index";
import { useObject } from "@codedrops/lib";
import "./NestedNodes.scss";
import classnames from "classnames";

const NestedNodesContainer = ({ nodes = [], onChange }) => {
  const [showAddRow, setShowAddRow] = useState(false);
  const [editId, setEditId] = useState(null);
  const [addData, setAddData, resetAddData] = useObject({});

  const setNodeToEdit = (node) => {
    setAddData(node);
    setEditId(node._id);
    setShowAddRow(true);
  };

  const handleChange = () => {
    if (!addData.label) return;

    if (editId) {
      const others = {
        action: "UPDATE",
        arr: nodes.map((node) =>
          node._id === editId ? { ...node, ...addData } : node
        ),
      };
      onChange(addData, others);
      setEditId(null);
    } else {
      const others = {
        action: "CREATE",
        arr: [...nodes, addData],
      };
      onChange(addData, others);
    }
    reset();
  };

  const reset = () => {
    resetAddData({});
    setShowAddRow(false);
    setEditId(null);
  };

  const deleteNode = (_id) => {
    const others = {
      action: "DELETE",
      arr: nodes.filter((node) => node._id !== _id),
    };
    onChange({ _id }, others);
  };

  const hideParentSelect = editId && addData.default; // hide select parent dropdown when a field is `default` & in edit mode

  return (
    <div className="nested-container">
      <NestedNodes
        nodes={nodes}
        setNodeToEdit={setNodeToEdit}
        deleteNode={deleteNode}
      />
      <div className="controller mt">
        {showAddRow ? (
          <>
            <div className="flex center gap-4">
              <Input
                value={addData.label}
                name="label"
                placeholder="Label"
                onChange={(e, value) => setAddData(value)}
                autoFocus={true}
              />
              {hideParentSelect ? null : (
                <Select
                  dropPosition={"top"}
                  placeholder="Parent"
                  value={addData.parentTagId}
                  name="parentTagId"
                  onChange={(e, value) => setAddData(value)}
                  options={nodes
                    .map((node) => ({
                      label: node.label,
                      value: node._id,
                    }))
                    .filter((node) => node.value !== editId)}
                />
              )}
            </div>
            <div className="flex center gap-4 mt-4">
              <Button onClick={handleChange}>
                {editId ? "Update" : "Add"}
              </Button>
              <Button onClick={reset}>Cancel</Button>
            </div>
          </>
        ) : (
          <Button onClick={() => setShowAddRow(true)}>Add</Button>
        )}
      </div>
    </div>
  );
};

const NestedNodes = (props) => {
  const { nodes, depth = 0, parentTagId, setNodeToEdit, deleteNode } = props;

  const filteredNodes = nodes.filter((node) =>
    depth > 0
      ? node.parentTagId && node.parentTagId === parentTagId
      : !node.parentTagId
  );
  const isRootLevel = !depth || depth === 0;
  const showDivider = Boolean(filteredNodes.length && !isRootLevel);
  const nextDepth = Number(depth) + 1;

  return (
    <Fragment>
      {showDivider && <div className="divider"></div>}
      <div className="wrapper">
        {filteredNodes.map((node, index) => {
          const { _id, label, canDelete = true } = node;
          const hasChildNodes = nodes.filter(
            (node) => node.parentTagId === _id
          ).length;
          const nodeClasses = classnames(
            "node",
            // `level-${depth || 0}`,
            {
              expanded: hasChildNodes,
            }
          );
          return (
            <Card key={_id} className={nodeClasses}>
              <div className="title-wrapper">
                <div className="title">{`${index + 1}. ${label}`}</div>
                <div>
                  <Icon
                    type="edit"
                    size={10}
                    onClick={() => setNodeToEdit(node)}
                  />
                  <Icon
                    type="delete"
                    size={10}
                    fill={canDelete ? colors.iron : colors.strokeOne}
                    onClick={() => (canDelete ? deleteNode(node._id) : null)}
                  />
                </div>
              </div>
              <NestedNodes {...props} depth={nextDepth} parentTagId={_id} />
            </Card>
          );
        })}
      </div>
    </Fragment>
  );
};

export default NestedNodesContainer;
