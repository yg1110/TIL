const SET_WEBSOCKET = 'socket/SET_WEBSOCKET';

export const setWebSocket = websocket => ({type: SET_WEBSOCKET, websocket });

const initialState = {
  webSocket: null,
};

export default function socketReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WEBSOCKET:
      return {
        ...state,
        webSocket: action.websocket
      };
    default:
      return state;
  }
}