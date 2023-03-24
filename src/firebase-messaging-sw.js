import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCHqtj50ByeLd35h7dbcPpcKB4CNMWPTq8",
  authDomain: "thongbao-3d02a.firebaseapp.com",
  projectId: "thongbao-3d02a",
  storageBucket: "thongbao-3d02a.appspot.com",
  messagingSenderId: "8099311455",
  appId: "1:8099311455:web:7dddb3fe7f7203381bd0ea",
  measurementId: "G-PJRTQR5F22"
};

export const app = initializeApp(firebaseConfig);
 
export const messaging = getMessaging(app);

export const token = "BLFv-aUgsmuTnBnkf2QjBh_UOHFzFYxV8g4KJ1Kpl63U4x9CVRgpDpDfbQi-Knm9N8-OPZx-IF2VWri_9fRfwcU";

async function requestPermission() {

  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      
      getToken(messaging, {
        vapidKey:
          "BLFv-aUgsmuTnBnkf2QjBh_UOHFzFYxV8g4KJ1Kpl63U4x9CVRgpDpDfbQi-Knm9N8-OPZx-IF2VWri_9fRfwcU",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken:", currentToken);
          alert("currentToken" , currentToken);
        } else {
          console.log("Can not get token");
        }
      });

    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();