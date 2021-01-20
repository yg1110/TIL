import './App.css';
import {useEffect} from "react";

function App() {
  const socketTest = () => {
    const ws = new WebSocket('ws://localhost:3002');
    
    ws.onopen = (event) => {
      console.log(event);
      let sendData = {
        event: 'request',
        data: 'some data...'
      };
      ws.send(JSON.stringify(sendData));
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

    test("test", () => console.log("callback"));
  }

  const test = (data, callback) => {
    console.log(data);
    callback()
  };

  useEffect(()=> {
    socketTest();
  })

  return (
    <div className="App"/>
  );
}

export default App;
