import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Helmet} from "react-helmet";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './components/login.component';
import Form from './components/form.component';
import UserProvider, { Example as UserCtxExample } from './context/UserProvider';
import PagInicio from './components/Inicio/inicio';
import DirectorioPaciente from './components/directorio.component';
import HistorialFormulario from './components/historial-formulario.component';
import ProtectedRoute from './constants/protectedRoutes';
import AdminProtectedRoute from './constants/adminProtectedRoutes';

import UserPanel2 from './components/userpanel2.component';

import FormContextProvider from './context/FormContext';
import CrearPaciente from './components/crearPaciente.component';

function App() {
  return (      
          <Router>
            <UserProvider>
              <FormContextProvider>
                <div className="App">
                    <Helmet>
                        <title>Base de Datos AGP</title>
                        <meta name="description" content="Página elaborada por alumnos del Instituo Tecnológico de 
                        Monterrey Campus Sonora Norte, en colaboración con Agrupación George Papanicolaou Hermosillo"/>
                    </Helmet>
                    <div>      
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route path="/log-in" component={Login} />
                            <AdminProtectedRoute path="/panel-usuarios" component={UserPanel2} />
                            <ProtectedRoute path="/datos-paciente" component={Form} />
                            <ProtectedRoute path="/directorio-paciente" component={DirectorioPaciente} />
                            <ProtectedRoute path="/historial-formulario" component={HistorialFormulario} />
                            <ProtectedRoute path="/pag-inicio" component={PagInicio} />
                            <ProtectedRoute path="/crear-Paciente" component={CrearPaciente} />
                        </Switch>
                    </div>
                </div>
              </FormContextProvider>
            </UserProvider>
          </Router>
  );
}

export default App;
