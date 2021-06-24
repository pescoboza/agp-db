import React, { Component} from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {FormContext} from '../context/FormContext';




class SegundaIteracion extends Component {
    constructor(){
        super();
        this.state ={
            open: false     
        };
    }
    render() {
        const myContext = this.context;

        return (
            <>
                <div
                    onClick={() => this.setState({open: !(this.state.open)})}
                    aria-controls="form1"
                    aria-expanded={this.state.open}
                    className="col-md-12 btn-text active btn btn-custom2 text-left">
                    ANTECEDENTES PERSONALES PATOLÓGICOS
                </div>
                <Collapse in={this.state.open}>
                    <div id="form1" className="formulario">
                    
                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Enfermedades cronicodegenrativas (Enfermedad, Tiempo desde el diagnóstico, Tratamiento, Complicaciones, Apego al Tratamiento)
                        </div>
                        <div className="form-group col-md-8">
                            <textarea className="form-control form-pat" rows="5" onChange={(e) => {
                                myContext.updateFormState("patient_data","chronic_degenerative_diseases",e.target.value);
                                console.log(myContext.formState);
                            }}></textarea>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Enfermedades Infectocontagiosas
                        </div>
                        <div className="form-group col-md-8">
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","infectious_contagious_diseases",e.target.value);
                                console.log(myContext.formState);
                            }}></textarea>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Cirugías
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 1" id="patient_data cb 1-1" value="true" onChange={(e) => {
                                myContext.updateFormState("patient_data","surgeries",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","surgeries");
                                console.log(myContext.formState);
                            }}></input>
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 1" id="patient_data cb 1-2" value="false" onChange={(e) => {
                                myContext.updateFormState("patient_data","surgeries",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","surgeries");
                                console.log(myContext.formState);
                            }}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="form-text">Especificar:</div>
                            <textarea className="form-control form-pat" rows="4" onChange={(e) => {
                                myContext.updateFormState("patient_data","surgeries_notes",e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Carcel
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 2" id="patient_data cb 2-1" value="true" onChange={(e) => {
                                myContext.updateFormState("patient_data","jail",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","jail");
                                console.log(myContext.formState);
                            }}></input>
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 2" id="patient_data cb 2-2" value="false" onChange={(e) => {
                                myContext.updateFormState("patient_data","jail",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","jail");
                                console.log(myContext.formState);
                            }}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="4" onChange={(e) => {
                                myContext.updateFormState("patient_data","jail_notes",e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Transfusiones Sanguíneas
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 3" id="patient_data cb 3-1" value="true" onChange={(e) => {
                                myContext.updateFormState("patient_data","blood_transfusions",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","blood_transfusions");
                                console.log(myContext.formState);
                            }}></input>
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 3" id="patient_data cb 3-2" value="false" onChange={(e) => {
                                myContext.updateFormState("patient_data","blood_transfusions",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","blood_transfusions");
                                console.log(myContext.formState);
                            }}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="4" onChange={(e) => {
                                myContext.updateFormState("patient_data","blood_transfusions_notes",e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Alergias
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 4" id="patient_data cb 4-1" value="true" onChange={(e) => {
                                myContext.updateFormState("patient_data","allergies",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","allergies");
                                console.log(myContext.formState);
                            }}></input>
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 4" id="patient_data cb 4-2" value="false" onChange={(e) => {
                                myContext.updateFormState("patient_data","allergies",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","allergies");
                                console.log(myContext.formState);
                            }}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="4" onChange={(e) => {
                                myContext.updateFormState("patient_data","allergies_notes",e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Traumatismo
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 5" id="patient_data cb 5-1" value="true" onChange={(e) => {
                                myContext.updateFormState("patient_data","trauma",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","trauma");
                                console.log(myContext.formState);
                            }}></input>
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 5" id="patient_data cb 5-2" value="false" onChange={(e) => {
                                myContext.updateFormState("patient_data","trauma",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","trauma");
                                console.log(myContext.formState);
                            }}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="form-text">Especificar:</div>
                            <textarea className="form-control form-pat" rows="4" onChange={(e) => {
                                myContext.updateFormState("patient_data","trauma_notes",e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Alcoholismo
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 6" id="patient_data cb 6-1" value="true" onChange={(e) => {
                                myContext.updateFormState("patient_data","alcoholism_consumption",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","alcoholism_consumption");
                                console.log(myContext.formState);
                            }}></input>
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 6" id="patient_data cb 6-2" value="false" onChange={(e) => {
                                myContext.updateFormState("patient_data","alcoholism_consumption",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","alcoholism_consumption");
                                console.log(myContext.formState);
                            }}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="form-text">Edad de Inicio:</div>
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","alcoholism_starting_age", e.target.value);
                                console.log(myContext.formState);
                            }}/>

                            <div className="form-text">Cantidad:</div>
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","alcoholism_quantity", e.target.value);
                                console.log(myContext.formState);
                            }}/>

                            <div className="form-text">Frecuencia:</div>
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","alcoholism_frequency", e.target.value);
                                console.log(myContext.formState);
                            }}/>

                            <div className="form-text">Último consumo:</div>
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","alcoholism_last_consumption", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>

                    </div>

                    <div className="form-row">
                        
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Tabaquismo
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 7" id="patient_data cb 7-1" value="true" onChange={(e) => {
                                myContext.updateFormState("patient_data","smoking_consumption",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","smoking_consumption");
                                console.log(myContext.formState);
                            }}></input>
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 7" id="patient_data cb 7-2" value="false" onChange={(e) => {
                                myContext.updateFormState("patient_data","smoking_consumption",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","smoking_consumption");
                                console.log(myContext.formState);
                            }}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="form-text">Edad de Inicio:</div>
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","smoking_starting_age",e.target.value);
                                console.log(myContext.formState);
                            }}/>

                            <div className="form-text">Cantidad:</div>
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","smoking_quantity",e.target.value);
                                console.log(myContext.formState);
                            }}/>

                            <div className="form-text">Frecuencia:</div>
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","smoking_frequency",e.target.value);
                                console.log(myContext.formState);
                            }}/>

                            <div className="form-text">Último consumo:</div>
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","smoking_last_consumption",e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Toxicomanías
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 8" id="patient_data cb 8-1" value="true" onChange={(e) => {
                                myContext.updateFormState("patient_data","drug_consumption",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","drug_consumption");
                                console.log(myContext.formState);
                            }}></input>
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 8" id="patient_data cb 8-2" value="false" onChange={(e) => {
                                myContext.updateFormState("patient_data","drug_consumption",e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","drug_consumption");
                                console.log(myContext.formState);
                            }}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="form-text">Edad de Inicio:</div>
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","drug_starting_age",e.target.value);
                                console.log(myContext.formState);
                            }}/>

                            <div className="form-text">Cantidad:</div>
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","drug_quantity",e.target.value);
                                console.log(myContext.formState);
                            }}/>

                            <div className="form-text">Frecuencia:</div>
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","drug_frequency",e.target.value);
                                console.log(myContext.formState);
                            }}/>

                            <div className="form-text">Último consumo:</div>
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","drug_last_consumption",e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-subtitle">En caso de ser hombre:</div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <div>Inicio de vida sexual</div>
                        </div>
                        <div className="form-group col-md-3">
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","drug_last_consumption",e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <div>Número de parejas sexuales</div>
                        </div>
                        <div className="form-group col-md-4">
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","male_sexual_partners",e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <div>Enfermedades de transmisión sexual</div>
                        </div>
                        <div className="form-group col-md-5">
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","male_std",e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <div>Métodos anticonceptivos</div>
                        </div>
                        <div className="form-group col-md-5">
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","male_contraceptive_methods",e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-subtitle">En caso de ser mujer, antecedentes ginecobstétricos:</div>
                    <div className="form-row">
                        <div className="form-group col-md-1">Menarca</div>
                        <div className="form-group col-md-2">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 9-1" onChange={(e) => {
                                // Corregir manejo de valores
                                myContext.updateFormState("patient_data","female_menarche", e.target.value);
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","female_menarche");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div className="form-group col-md-1">Edad</div>
                        <div className="form-group col-md-1">
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_menarche_age",e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">Ritmo</div>
                        <div className="form-group col-md-8">
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_rhythm",e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">Edad de Inicio de Vida Sexual</div>
                        <div className="form-group col-md-1">
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_start_sexual_life",e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">Parejas de Alto Riesgo</div>
                        <div>Si</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 10" id="patient_data cb 10-1" value="true" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_high_risk_partners", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_high_risk_partners");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>No</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 10" id="patient_data cb 10-2" value="false" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_high_risk_partners", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_high_risk_partners");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Número de Parejas Sexuales</div>
                        <div className="form-group col-md-1">
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                // myContext.updateFormState("patient_data","female_start_sexual_life",e.target.value);
                                // console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Enfermedades de Transmisión Sexual</div>

                        <div className="form-group col-md-2">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 11-1" onChange={(e) => {
                                // Corregir manejo de valores
                                myContext.updateFormState("patient_data","nose", e.target.value);
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nose");
                                console.log(myContext.formState);
                            }}/>
                        </div>

                        <div className="form-group col-md-5">
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_std_notes", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Gestas</div>
                        <div>1</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 12" id="patient_data cb 12-1" value="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_gestations", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>2</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 12" id="patient_data cb 12-2" value="2" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_gestations", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_gestations");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>3</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 12" id="patient_data cb 12-3" value="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_gestations", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_gestations");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>4+</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 12" id="patient_data cb 12-4" value="4 o más" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_gestations", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_gestations");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>N/A</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 12" id="patient_data cb 12-5" value="N/A" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_gestations", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_gestations");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Partos</div>
                        <div>1</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 13" id="patient_data cb 13-1" value="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_deliveries", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_deliveries");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>2</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 13" id="patient_data cb 13-2" value="2" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_deliveries", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_deliveries");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>3</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 13" id="patient_data cb 13-3" value="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_deliveries", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_deliveries");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>4+</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 13" id="patient_data cb 13-4" value="4 o más" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_deliveries", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_deliveries");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>N/A</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 13" id="patient_data cb 13-5" value="N/A" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_deliveries", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_deliveries");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Cesáreas</div>
                        <div>1</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 14" id="patient_data cb 14-1" value="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_cesarean_births", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_cesarean_births");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>2</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 14" id="patient_data cb 14-2" value="2" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_cesarean_births", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_cesarean_births");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>3</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 14" id="patient_data cb 14-3" value="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_cesarean_births", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_cesarean_births");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>4+</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 14" id="patient_data cb 14-4" value="4" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_cesarean_births", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_cesarean_births");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>N/A</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 14" id="patient_data cb 14-5" value="N/A" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_cesarean_births", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_cesarean_births");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Abortos</div>
                        <div>1</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 15" id="patient_data cb 15-1" value="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_abortions", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_abortions");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>2</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 15" id="patient_data cb 15-2" value="2" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_abortions", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_abortions");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>3</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 15" id="patient_data cb 15-3" value="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_abortions", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_abortions");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>4+</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 15" id="patient_data cb 15-4" value="4 o más" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_abortions", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_abortions");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>N/A</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 15" id="patient_data cb 15-5" value="N/A" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_abortions", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_abortions");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Fecha del último parto</div>
                        <div className="form-group col-md-2">
                            <input type="date" className="form-control form-pat" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_date_last_delivery", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Edad del primer embarazo</div>
                        <div className="form-group col-md-1">
                            <input type="text" className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_age_first_pregnancy", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Métodos de planificación familiar</div>
                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_family_planning_methods", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Fecha de última regla</div>
                        <div className="form-group col-md-2">
                            <input type="date" className="form-control form-pat" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_date_last_menstruation", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Menopausia</div>
                        <div>Si</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 16" id="patient_data cb 16-1" value="true" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_menopause", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_abortions");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>No</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 16" id="patient_data cb 16-2" value="false" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_menopause", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_abortions");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Antecedentes de Terapia de Reemplazo Hormonal</div>
                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="4" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_hormonal_therapy", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Lactancia Materna</div>
                        <div>Si</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 17" id="patient_data cb 17-1" value="true" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_breastfeeding", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_breastfeeding");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>No</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 17" id="patient_data cb 17-2" value="false" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_breastfeeding", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_breastfeeding");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Fecha del último papanicolau</div>
                        <div className="form-group col-md-2">
                            <input type="date" className="form-control form-pat" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_last_pap_smear", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Resultados de último papanicolau</div>
                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="4" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_last_pap_smear_result", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Fecha de prueba de híbridos</div>
                        <div className="form-group col-md-2">
                            <input type="date" className="form-control form-pat" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_last_hybrid_test", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Resultado de prueba de híbridos</div>
                        <div>Positivo</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 18" id="patient_data cb 18-1"  value="Positivo" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_last_hybrid_test_result", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_last_hybrid_test_result");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <div>Negativo</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb 18" id="patient_data cb 18-2" value="Negativo" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_last_hybrid_test_result", e.target.value);
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","female_last_hybrid_test_result");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Fecha de última mamografía</div>
                        <div className="form-group col-md-2">
                            <input type="date" className="form-control form-pat" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_last_mammography", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Resultados de última mamografía</div>
                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="4" onChange={(e) => {
                                myContext.updateFormState("patient_data","female_last_mammography_result", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                </div>
                </Collapse>
            </>
        )
    }
}

SegundaIteracion.contextType = FormContext;

export default SegundaIteracion;