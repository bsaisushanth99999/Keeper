import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Htitle, setHtitle] = useState("");
  const [HsubTitle, setHsubTitle] = useState("");
  const [notes, setNotes] = useState([]);

  function onAdd(e) {
    setNotes([...notes, {title : Htitle, content : HsubTitle}]);
    setHtitle(""); setHsubTitle("");
    e.preventDefault();
  }

  function handleChange(e) {
    setHtitle(e.target.value);
  }

  function handleChangeSub(e) {
    setHsubTitle(e.target.value);
  }

  function deleteNote(key) {
    const dummy = notes.filter((x) => {
      if(key !== x.title){
        return x;
      }})
      setNotes(dummy);
  }

  return (
    <div>
      <Header />
      <CreateArea 
        Htitle={Htitle}
        HsubTitle={HsubTitle}
        Add={onAdd}
        handleChange={handleChange}
        handleChangeSub={handleChangeSub}
      />
      {notes.map((x,y) => {
        return <Note key={y} title={x.title} content={x.content} Delete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App; 
