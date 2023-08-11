import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddOrUpdateEmployee from './components/AddOrUpdateEmployee';
import Employees from './components/Employees';
import ListEmployee from './components/ListEmployee';
import Navbar from './components/Navbar';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div className="App" style={{ background: 'rgba(244, 103, 110, 1)' }}>
      <ToastContainer
        position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop closeOnClic rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored"
      />

      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route path='/' element={<Employees />} />
          <Route path='/:id' element={<ViewEmployee />} />
          <Route path='/allemployees' element={<ListEmployee />} />
          <Route path='/add' element={<AddOrUpdateEmployee />} />
          <Route path='/update/:id' element={<AddOrUpdateEmployee />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
