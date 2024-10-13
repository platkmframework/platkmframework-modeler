import { Link, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';           
 
import { ModelerMenu } from '../modules/menu/ModelerMenu';
import { NavigationMainPage } from '../modules/navigation/NavigationMainPage';

export const AppRouter = () => {

  return (
    <>  
        <div>
          <ModelerMenu /> 
        </div>
        <Routes> 
          <Route path="/modeler/sequence" element={<NavigationMainPage/>}/> 
          <Route path="/modeler/bpmn" element={<NavigationMainPage/>}/> 
          <Route path="/modeler/enitty-relation" element={<NavigationMainPage/>}/> 
        </Routes>
    </>  
  )
}
