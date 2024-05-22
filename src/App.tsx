
import './App.css';
//import { DisplayLocations } from './components/DisplayLocations/DisplayLocations';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {UserFormRoute} from './routes/UserFormRoute';
import {UserDetailsRoute} from './routes/UserDetailsRoute';
import Header from './components/Header/Header';
import { AboutMe } from './components/AboutMe/AboutMe';
import ChatGPT from './components/ChatGPT/ChatGPT';
import { TimelinesOfCV} from './components/TimeilnesOfCV/TimelinesOfCV'
import MyGithubRepo from './components/MyGithubRepor/MyGithubRepo';
import { TechnicalSkills } from './components/TechnicalSkills/TechnicalSkills';
import { MyBlogs } from './components/MyBlogs/MyBlogs';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
      <Route path="/" element = {<AboutMe></AboutMe>}></Route>
        <Route path="/about-me" element = {<AboutMe></AboutMe>}></Route>
        <Route path="/timelines-of-my-cv" element = {<TimelinesOfCV></TimelinesOfCV>}></Route>
        <Route path="/react-hook-form" element={<UserFormRoute />} />
        <Route path="/graphql-with-apollo-client" element={<UserDetailsRoute />} />
        <Route path = "chat-gpt" element={<ChatGPT/>}/>
        <Route path='my-github-repo' element = {<MyGithubRepo />}></Route>
        <Route path='technical-skills' element = {<TechnicalSkills />}></Route>
        <Route path='my-blogs' element={<MyBlogs/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
