export interface NoteState {
  notes: string[];
}

const initstate = {
  notes: []
};

type Action = { type: "ADD_NOTE"; payload: string };

export const noteReducer = (state: NoteState = initstate, action: Action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};
