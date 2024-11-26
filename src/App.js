

import './App.css';
import Login from './component/Login';
import {Routes,Route} from 'react-router-dom';
import  DoctorDashboard  from './component/DoctorDashboard';
import  PatientDashboard  from './component/PatientDashboard';
import  PharmacistDashboard  from './component/PharmacistDashboard';
import  EditPatient  from './component/EditPatient';
import  {Error}  from './component/Error';
import Bill from './component/Bill';



function App() {
  return (
    <div>
     <Routes>
      
        <Route path='/' element={<Login/>}/>
        <Route path='/doctor' element={<DoctorDashboard/>}/>
        <Route path='/edit' element={<EditPatient/>}/>
        <Route path='/patient' element={<PatientDashboard/>}/>
        <Route path='/pharmacist' element={<PharmacistDashboard/>}/>
        <Route path='/bill' element={<Bill/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
  
    </div>

  );
}

export default App;
