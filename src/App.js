import { onMessage , getToken} from 'firebase/messaging';

import { useEffect, useState } from 'react';
import { messaging, token  } from './firebase-messaging-sw';
function App() {
  const [currentToken , setCurrentToken] = useState("")

  useEffect(() => {
    getToken(messaging , token).then((currentToken) => {
      if (currentToken) {
        setCurrentToken(currentToken);
      }
    })
  } , [])
  console.log("currentToken:", currentToken);
  useEffect(() => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../firebase-messaging-sw.js')
          .then(function (registration) {
            const notificationTitle = 'Background Message Title';
            const notificationOptions = {
              body: 'Background Message body.',
              icon: '/firebase-logo.png'
            };

            registration.showNotification(notificationTitle,
              notificationOptions);
          }).catch(function (err) {
            console.log('Service worker registration failed, error:', err);
          });
      }

    });
  }, [])
  return (
    <div className="App">
     {currentToken}
    </div>
  );
}

export default App;
