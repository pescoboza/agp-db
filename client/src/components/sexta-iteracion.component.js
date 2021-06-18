import React, { Component, useState } from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {FormContext} from '../context/FormContext';

class SextaIteracion extends Component {
    constructor(){
        super();
        this.state ={
            open1: false,
	        open2: false,
        };
    }
    render() {
        const mycontext = this.context;

        return (
            <>
                <div
                    onClick={() => this.setState({open1: !(this.state.open1)})}
                    aria-controls="form1"
                    aria-expanded={this.state.open1}
                    className="col-md-12 btn-text active btn btn-custom2 text-left">
                    ALIMENTACIÓN
                </div>
                <Collapse in={this.state.open1}>
                    <div id="form1" className="formulario">
                        <br />

                        <div className="form-row col-md-12">
                            <div className=" form-text col-md-3">¿Cómo lo considera?</div>
                            <div className="col-md-1">Buena</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("perceived_quality","Buena");
                                }}/>
                            </div>
                            <div className="col-md-1">Regular</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("perceived_quality","Regular");
                                }}/>
                            </div>
                            <div className="col-md-1">Mala</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("perceived_quality","Mala");
                                }}/>
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-3">Número de Comidas al Día:</div>
                            <div className="form-group col-md-2">
                                <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    mycontext.updateDiet("meals_per_day",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-2">Preparación de los Alimentos:</div>
                            <div className="col-md-1" />
                            <div className="form-group col-md-6">
                                <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                    mycontext.updateDiet("food_preparation",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-3">Cantidad de Agua al Día:</div>
                            <div className="form-group col-md-3">
                                <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    mycontext.updateDiet("water_per_day",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                        <br />
                    </div>
                </Collapse>
                <div
                    onClick={() => this.setState({open2: !(this.state.open2)})}
                    aria-controls="form2"
                    aria-expanded={this.state.open2}
                    className="col-md-12 btn-text active btn btn-custom2 text-left">
                    TIPO DE ALIMENTACIÓN
                </div>
                <Collapse in={this.state.open2}>
                    <div id="form2" className="formulario">
                        <br />

                        <div className="form-row col-md-12">
                            <div className="col-md-1" />
                            <div className="col-md-3" />
                            <div className="form-text">A la Semana</div>
                            <div className="col-md-3"/>
                            <div className="form-text">Por Mes</div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Carnes Rojas</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("red_meat_week",1);
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("red_meat_week",2);
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("red_meat_week",3);
                                }}/>
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("red_meat_month",1);
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("red_meat_month",2);
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("red_meat_month",3);
                                }}/>
                            </div>
                        </div>

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Pollo</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("chicken_week",1);
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("chicken_week",2);
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("chicken_week",3);
                                }}/>
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("chicken_month",1);
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("chicken_month",2);
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("chicken_month",3);
                                }}/>
                            </div>
                        </div>

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Pescado</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("fish_week",1);
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("fish_week",2);
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" onChange={(e) => {
                                    mycontext.updateDiet("fish_week",3);
                                }}/>
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Granos (Frijol, Maíz, Arroz)</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Lácteos</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Pan</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Pan/Pastas</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Verduras y/o Frutas</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                    </div>
              </Collapse>
            </>
        )
    }
}

SextaIteracion.contextType = FormContext;

export default SextaIteracion;