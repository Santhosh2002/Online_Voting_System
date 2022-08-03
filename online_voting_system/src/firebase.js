import { initializeApp } from "firebase/app";
import { getfirestore} from '@firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBXV8gbs-VTnSEoTFPRMmqw1wesLH1xo0Y",
    authDomain: "online-voting-system-951e4.firebaseapp.com",
    projectId: "online-voting-system-951e4",
    storageBucket: "online-voting-system-951e4.appspot.com",
    messagingSenderId: "196453441763",
    appId: "1:196453441763:web:cf724a560ae2d4dc2f65d6",
    measurementId: "G-GJP48ZBPSZ"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getfirestore(app);
