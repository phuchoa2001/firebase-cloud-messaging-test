import Push from "push.js";
import { getMessaging } from "firebase/messaging";
import { onMessage } from 'firebase/messaging';

import { useEffect } from 'react';

import './messaging_init_in_sw';
import { messaging} from './messaging_init_in_sw';

const token = "BLFv-aUgsmuTnBnkf2QjBh_UOHFzFYxV8g4KJ1Kpl63U4x9CVRgpDpDfbQi-Knm9N8-OPZx-IF2VWri_9fRfwcU";
function App() {

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
