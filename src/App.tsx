
import './App.css';
//import { DisplayLocations } from './components/DisplayLocations/DisplayLocations';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {UserFormRoute} from './routes/UserFormRoute';
import {UserDetailsRoute} from './routes/UserDetailsRoute';
import Header from './components/Header/Header';
import { AboutMe } from './components/AboutMe/AboutMe';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/about-me" element = {<AboutMe></AboutMe>}></Route>
        <Route path="/react-hook-form" element={<UserFormRoute />} />
        <Route path="/graphql-with-apollo-client" element={<UserDetailsRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
