import "./App.css";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [userstate, setUserState] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              userstate && userstate.fname  ? (
                <Profile
                setUserState={setUserState}
                username={userstate.fname}
              />
              
              ) : (
                <Login setUserState={setUserState} />
                
              )
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setUserState={setUserState} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
