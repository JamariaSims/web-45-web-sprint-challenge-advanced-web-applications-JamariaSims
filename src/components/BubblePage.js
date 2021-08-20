import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from "../services/fetchColorService";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    setEditing(true);
    fetchColorService(`PUT`, `/colors/${editColor.id}`, editColor);
    setEditing(false);
  };

  const deleteColor = (colorToDelete) => {
    console.log(colorToDelete);
    fetchColorService(`DELETE`, `/colors/${colorToDelete.id}`, colorToDelete);
    setColors(
      colors.filter((color) => {
        return color !== colorToDelete;
      })
    );
  };
  useEffect(() => {
    fetchColorService(`GET`, `/colors`).then((response) => {
      setColors(response.data);
    });
  }, [editing]);
  return (
    <div className="container">
      <ColorList
        colors={colors}
        editing={editing}
        toggleEdit={toggleEdit}
        saveEdit={saveEdit}
        deleteColor={deleteColor}
      />
      <Bubbles colors={colors} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
