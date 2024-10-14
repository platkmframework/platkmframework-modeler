import { Link, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';           
 
import { ModelerMenu } from '../modules/menu/ModelerMenu';
import { EntitiesDiagramModeler } from '../modules/modeler/entities/EntitiesDiagramModeler';
import { NavigationDiagramModeler } from '../modules/modeler/navigation/NavigationDiagramModeler';
import { BpmnDiagramModeler } from '../modules/modeler/bpmn/BpmnDiagramModeler';
import { SequenceDiagramModeler } from '../modules/modeler/sequence/SequenceDiagramModeler';

export const AppRouter = () => {

  return (
    <>  
        <div>
          <ModelerMenu /> 
        </div>
        <Routes> 
          <Route path="/modeler/sequence" element={<SequenceDiagramModeler/>}/> 
          <Route path="/modeler/bpmn" element={<BpmnDiagramModeler/>}/> 
          <Route path="/modeler/navigator" element={<NavigationDiagramModeler/>}/> 
          <Route path="/modeler/entities" element={<EntitiesDiagramModeler/>}/> 
        </Routes>
    </>  
  )
}
