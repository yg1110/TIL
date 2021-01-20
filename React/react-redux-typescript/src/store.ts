import { createStore } from "redux";
import { noteReducer } from "./NoteReducer";

export const store = createStore(noteReducer);
