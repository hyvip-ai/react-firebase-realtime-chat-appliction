import {useAuthState} from "react-firebase-hooks/auth"
import Chatroom from "./Components/Chatroom"
import Login from "./Components/Login"
import SignOut from "./Components/SignOut"
import {auth} from "./firebase_config/firebase"
function App() {
  const [authenticated] = useAuthState(auth)
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
