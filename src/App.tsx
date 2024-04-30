
import './App.css';
//import { DisplayLocations } from './components/DisplayLocations/DisplayLocations';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {UserFormRoute} from './routes/UserFormRoute';
import {UserDetailsRoute} from './routes/UserDetailsRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserFormRoute />} />
        <Route path="/user-details" element={<UserDetailsRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
