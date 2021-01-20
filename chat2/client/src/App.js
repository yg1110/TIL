import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setWebSocket} from './modules/socketReducer';

function App() {
  let ws = null;
  const dispatch = useDispatch();
  const socket = useSelector(state => ({webSocket: state.socketReducer.webSocket}));


  const onWebSocket = (callback) => {
    ws = new WebSocket('ws://localhost:3002');

    ws.onopen = () => {
      callback(true);
    }

    ws.onerror = () => {
      callback(false);
    }

    ws.onmessage = (event) => {
      let recData = JSON.parse(event.data);
      switch (recData.event) {
        case 'response':
          console.log(recData.data);
          break;
        default:
          break;
      }
    }
  }

  const onSendMessage = (state) => {
    if(state){
      dispatch(setWebSocket(ws))
      let sendData = {
        event: 'request',
        data: 'Test'
      };
      socket.webSocket.send(JSON.stringify(sendData));
    }else{
      console.log("error");
    }
  }

  const onClickSendMessage = () => {
    onWebSocket(onSendMessage);
  }

  return (
    <div className="App">
      <button onClick={onClickSendMessage}>
        sendMessage
      </button>
    </div>
  );
}

export default App;
