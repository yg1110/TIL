import React from "react";
import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { NoteState } from "./noteReducer";
import { addNote } from "./actions";

function App() {
  const notes = useSelector<NoteState, NoteState["notes"]>(
    state => state.notes
  );

  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map(note => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
