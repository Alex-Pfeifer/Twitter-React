import './App.css'
import Body from "./components/Body.jsx";
import Navigation from "./components/Navigation.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";

function App() {
    const [user, setUser] = useState({
        name: 'User Nmae',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState({
        followers: 10,
        following: 20
    });


    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user, stats,
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    )
}

export default App
