
import './App.css';
//import { DisplayLocations } from './components/DisplayLocations/DisplayLocations';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {UserFormRoute} from './routes/UserFormRoute';
import {UserDetailsRoute} from './routes/UserDetailsRoute';
import Header from './components/Header/Header';
import { AboutMe } from './components/AboutMe/AboutMe';
import ChatGPT from './components/ChatGPT/ChatGPT';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/about-me" element = {<AboutMe></AboutMe>}></Route>
        <Route path="/react-hook-form" element={<UserFormRoute />} />
        <Route path="/graphql-with-apollo-client" element={<UserDetailsRoute />} />
        <Route path = "chat-gpt" element={<ChatGPT/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
