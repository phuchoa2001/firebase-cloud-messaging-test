import Push from "push.js";
import { getMessaging } from "firebase/messaging";
import { onMessage } from 'firebase/messaging';

import { useEffect } from 'react';

import './messaging_init_in_sw';
import { messaging} from './messaging_init_in_sw';

const token = "BLFv-aUgsmuTnBnkf2QjBh_UOHFzFYxV8g4KJ1Kpl63U4x9CVRgpDpDfbQi-Knm9N8-OPZx-IF2VWri_9fRfwcU";
function App() {

  function subscribeTokenToTopic(token, topic) {
    fetch('https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/'+topic, {
      method: 'POST',
      headers: new Headers({
        'Authorization': 'key='+fcm_server_key
      })
    }).then(response => {
      if (response.status < 200 || response.status >= 400) {
        throw 'Error subscribing to topic: '+response.status + ' - ' + response.text();
      }
      console.log('Subscribed to "'+topic+'"');
    }).catch(error => {
      console.error(error);
    })
  }

  const handleSend = () => {
    const topic = 'highScores';

    const message = {
      data: {
        score: '850',
        time: '2:45'
      },
      topic: topic
    };
    console.log("Send")
    console.log("messaging" , getMessaging());
    // Send a message to devices subscribed to the provided topic.
    // getMessaging().send(message)
    //   .then((response) => {
    //     // Response is a message ID string.
    //     console.log('Successfully sent message:', response);
    //   })
    //   .catch((error) => {
    //     console.log('Error sending message:', error);
    //   });
  }
  useEffect(() => {
    onMessage(messaging, (payload) => {
      // ...  
      
      Push.create("Nội dung : Kích Hoạt Thành Công!", {
        body: "bạn đã kích hoạt thành công ?",
        icon: "https://png.pngtree.com/png-vector/20190729/ourlarge/pngtree-alarm-clock-icon-flat-design-vector-illustration-png-image_1627999.jpg",
        timeout: 4000,
        onClick: function () {
          window.focus();
          this.close();
        },
      });
    });
  }, [])
  return (
    <div className="App">
      <button onClick={handleSend}>
         Gữi tin nhắn cho tất cả mọi người 
      </button>
    </div>
  );
}

export default App;
