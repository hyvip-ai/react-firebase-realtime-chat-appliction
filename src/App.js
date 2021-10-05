import {useAuthState} from "react-firebase-hooks/auth"
import Chatroom from "./Components/Chatroom"
import Login from "./Components/Login"
import SignOut from "./Components/SignOut"
import {auth} from "./firebase_config/firebase"
import {useEffect} from "react"

function App() {
  const [authenticated] = useAuthState(auth)
  useEffect(() => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }, [])
  return (
    <div className="App">
      <header>
        {authenticated?<SignOut/>:null}
      </header>
        <section>
        {authenticated?<Chatroom/>:<Login/>}
        </section>
    </div>
  );
}

export default App;
