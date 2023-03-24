// import { onMessage } from 'firebase/messaging';

import { useEffect } from 'react';

import './firebase-messaging-sw';

// import { messaging } from './firebase-messaging-sw';

// const token = "BLFv-aUgsmuTnBnkf2QjBh_UOHFzFYxV8g4KJ1Kpl63U4x9CVRgpDpDfbQi-Knm9N8-OPZx-IF2VWri_9fRfwcU";
function App() {

  useEffect(() => {
    // onMessage(messaging, (payload) => {
    //   console.log("payload", payload);
    //   if ('serviceWorker' in navigator) {
    //     navigator.serviceWorker.register('../firebase-messaging-sw.js')
    //       .then(function (registration) {
    //         const notificationTitle = 'Background Message Title';
    //         const notificationOptions = {
    //           body: 'Background Message body.',
    //           icon: '/firebase-logo.png'
    //         };

    //         registration.showNotification(notificationTitle,
    //           notificationOptions);
    //       }).catch(function (err) {
    //         console.log('Service worker registration failed, error:', err);
    //       });
    //   }

    // });
  }, [])
  return (
    <div className="App">
      <button>
        Gữi tin nhắn cho tất cả mọi người
      </button>
    </div>
  );
}

export default App;
