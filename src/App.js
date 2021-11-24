import Navbar from "./components/NavBar/Navbar";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/Contacts/Contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact/AddContact";
import EditContact from "./components/EditContact/EditContact";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div>
      {/* <h2>In The name of Allah</h2> */}
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/addContact" element={<AddContact />} />
          <Route path="/editContact/:id" element={<EditContact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
