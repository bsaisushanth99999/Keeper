import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input onChange={props.handleChange} value={props.Htitle} name="title" placeholder="Title" />
        <textarea onChange={props.handleChangeSub} value={props.HsubTitle} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={props.Add}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea; 
