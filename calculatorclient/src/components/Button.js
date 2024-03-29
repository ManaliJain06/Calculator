/**
 * Created by ManaliJain on 9/20/17.
 */
import React, {Component} from 'react';
import * as API from '../api/calculatorAPI';
import Operation from './Operations';

class Button extends Component{

    constructor(props){
        super(props);
        this.state = {
            values :{
                param1: '',
                param2: '',
            },
            operation: '',
            display: '',
            result: '',
            operationCount: 0,
            isResultCalculated: false
        };
    }

    clearAll = () => {
        this.setState(
            {
                display: '',
                operation: '',
                values :{
                    param1: '',
                    param2: ''
                },
                operationCount: 0,
                result: '',
            }
        );
    };

    storeParam = (event) => {
        //for displaying param2 after + and also if result is calculated then to clear the fields
            if(this.state.display === '+' || this.state.display === '-'
                ||this.state.display === 'x' ||this.state.display === '÷' || this.state.isResultCalculated){
                this.setState({display:  event.target.id});
            } else{
                this.setState(
                    {
                        display:  this.state.display + event.target.id
                    });
            }
    };

    calculateResult = () => {
        //for 7+= and 7=
        if((this.state.operationCount ===1 && (this.state.operation !== this.state.display))){
            this.setState({
                values: {
                    ...this.state.values,
                    param2: this.state.display
                }
            },this.callAPI);
        } else{
            alert("Error: Invalid input, please clear all and enter operation again");
        }
    };

    callAPI = () => {
        //Handling of invalid input for 7+.= or .+7=
        if(!(isNaN(this.state.values.param1)) && !(isNaN(this.state.values.param2))){
            if(this.state.operation === '+'){
                  API.addition(this.state.values)
                    .then((res) => {
                        this.setResponse(res);
                    });
            } else if(this.state.operation === '-'){
                API.substraction(this.state.values)
                    .then((res) => {
                        this.setResponse(res);
                    });
            } else if(this.state.operation === 'x'){
                API.multiplication(this.state.values)
                    .then((res) => {
                        this.setResponse(res);
                    });
            } else if(this.state.operation === '÷'){
                API.division(this.state.values)
                    .then((res) => {
                        this.setResponse(res);
                    });
            }
        } else{
            alert("Error: Invalid input, please clear all and enter operation again");
        }
    };

    setResponse = (res) => {
        if (res.status === 200) {
            this.setState({result: res.data.result},this.clearStateAfterAPICall);
        } else if (res.status === 400) {
            this.setState({display: 'Error'}, this.clearStateAfterAPICall);
        }
    };

    clearStateAfterAPICall = () => {
        this.setState({
            display: '',
            operation: '',
            values: {
                param1: '',
                param2: ''
            },
            operationCount: 0
        });
    };

    myCallback = (displaySign) => {
        // do a callback in setState to make sure that setState is rendered to DOM and then perform
        // any operation to get the state using this.state
        // Handling of invalid input for +7= and  7+8+=
        if(this.state.display !== '' && this.state.operationCount === 0){
            this.setState({
                values: {
                    ...this.state.values,
                    param1: this.state.display
                },
            }, function(){
                this.setState({
                    display : displaySign,
                    operation: displaySign,
                    operationCount: 1
                });
            });
        } else{
            alert("Error: Invalid input, please clear all and enter operation again");
        }
    };

    render() {
        return(
            <div id="calculatorPanel">
                <div className="row">
                    <div className="form-group">
                        <form name="calc">
                            <input type="text" className="form-control text-right" id="result" name="result" readOnly
                                   value={this.state.display !== '' ? this.state.display : this.state.result}/>
                        </form>
                    </div>
                </div>

                <div className="row fields">
                    <button id="allClear" type="button" className="btn btn-success"
                            onClick={(event) => this.clearAll()}>AC</button>
                    {/*<button id="clear" type="button" className="btn btn-primary">CE</button>*/}
                    <Operation sign = '÷' displaySign = {this.myCallback}/>
                </div>

                <div className="row">
                    <button id="7" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>7</button>
                    <button id="8" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>8</button>
                    <button id="9" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>9</button>
                    <Operation sign = 'x' displaySign = {this.myCallback}/>
                </div>

                <div className="row">
                    <button id="4" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>4</button>
                    <button id="5" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>5</button>
                    <button id="6" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>6</button>
                    <Operation sign = '-' displaySign = {this.myCallback}/>
                </div>

                <div className="row">
                    <button id="1" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>1</button>
                    <button id="2" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>2</button>
                    <button id="3" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>3</button>
                    <Operation sign = '+' displaySign = {this.myCallback}/>
                </div>


                <div className="row">
                    <button id="0" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>0</button>
                    <button id="." type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>.</button>
                    <button id="calculate" type="button" className="btn btn-warning"
                            onClick={(event) => this.calculateResult(event)}>=</button>
                </div>
            </div>

        );
    }
}

export default Button;