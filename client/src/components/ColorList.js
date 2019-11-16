import React, { useState } from "react";
import { connect } from 'react-redux'

import { updateColorCall, deleteColorCall, postNewColor } from '../actions'

const initialColor = {
  color: "",
  code: { hex: "" },
  id: 0
};

const ColorList = ({ colors, toggleUpdate, newColors, updateColorCall, deleteColorCall, postNewColor }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [addColor, setAddColor] = useState({color: '', code: {hex: ''}})

  console.log(newColors)

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    updateColorCall(colorToEdit.id, colorToEdit)
    toggleUpdate()
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
  };

  const deleteColor = color => {
    deleteColorCall(color)
    // make a delete request to delete this color
  };

  const addAColor = e => {
    e.preventDefault()
    postNewColor(addColor)
  }
  if(!colors) {
    return (
      <div>
        Loading Data
      </div>
    )
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                e.stopPropagation();
                deleteColor(color)
              }
              }>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      <form onSubmit={addAColor}>
        <label>Color Name</label>
        <input
          type='text'
          name='color'
          onChange={e=> setAddColor({...addColor, color: e.target.value})}
          value={addColor.name}
        />
        <label>Color Hex Code</label>
        <input
          type='text'
          name='hex'
          onChange={e=> setAddColor({ ...addColor, code: {hex:e.target.value}})}
          value={addColor.code.hex}
        />
        <button type='submit'>Add A Color</button>
      </form>
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { newColors: state.colorReducer.colorData }
}

export default connect(mapStateToProps, { updateColorCall, deleteColorCall, postNewColor })(ColorList);
