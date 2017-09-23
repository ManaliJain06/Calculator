/**
 * Created by ManaliJain on 9/20/17.
 */
import React, {Component} from 'react';
import * as API from '../api/calculatorAPI';
import TestOperation from './TestOperations';

class TestButton extends Component{

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

        //this.inputString +=  ',' + event.target.id;
        //var display = this.state.isOperationCalled? '' : this.state.display;
        // this.x =  this.state.clearDisplay + event.target.id;
        //if(!this.state.isOperationCalled) {

        //for displaying param2 after + and also if result is calculated then to clear the fields
        // if(this.state.operationCount === 1){
        //     alert("error Please clear all and enter operation again");
        // }
        //else{
            if(this.state.display === '+' || this.state.display === '-'
                ||this.state.display === 'x' ||this.state.display === '÷' || this.state.isResultCalculated){
                this.setState({display:  event.target.id});
            } else{
                this.setState(
                    {
                        display:  this.state.display + event.target.id

                        // clearDisplay: this.state.display

                        //operation: this.state.operation + event.target.id
                    });
            }
        //}
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
            alert(" error Please clear all and enter operation again");
        }
    };

    callAPI = () => {
        //for 7+.=
        if(!(isNaN(this.state.values.param1) && isNaN(this.state.values.param2))){
            if(this.state.operation === '+'){
                  API.addition(this.state.values)
                    .then((res) => {
                        console.log("res",res.data)
                        if (res.status === 200) {
                            this.setState({result: res.data.data},this.clearStateAfterAPICall);
                        } else if (res.status === 404) {
                            this.setState({display: 'Error'}, this.clearStateAfterAPICall);
                        }
                    });
            } else if(this.state.operation === '-'){
                API.substraction(this.state.values)
                    .then((res) => {
                        if (res.status === 200) {
                            this.setState({result: res.data.data},this.clearStateAfterAPICall);
                        } else if (res.status === 404) {
                            this.setState({display: 'Error'}, this.clearStateAfterAPICall);
                        }
                    });
            } else if(this.state.operation === 'x'){
                API.multiplication(this.state.values)
                    .then((res) => {
                        if (res.status === 200) {
                            this.setState({result: res.data.data},this.clearStateAfterAPICall);
                        } else if (res.status === 404) {
                            this.setState({display: 'Error'}, this.clearStateAfterAPICall);
                        }
                    });
            } else if(this.state.operation === '÷'){
                API.division(this.state.values)
                    .then((res) => {
                        if (res.status === 200) {
                            this.setState({result: res.data.data},this.clearStateAfterAPICall);
                        } else if (res.status === 404) {
                            this.setState({display: 'Error'}, this.clearStateAfterAPICall);
                        }
                    });
            }

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
        // for +7= and  7+8+=
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
            alert("error:Invalid input. Please clear all and enter operation again");
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
                    <button id="clear" type="button" className="btn btn-primary">CE</button>
                    <TestOperation sign = '÷' displaySign = {this.myCallback}/>
                </div>

                <div className="row">
                    <button id="7" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>7</button>
                    <button id="8" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>8</button>
                    <button id="9" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>9</button>
                    <TestOperation sign = 'x' displaySign = {this.myCallback}/>
                </div>

                <div className="row">
                    <button id="4" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>4</button>
                    <button id="5" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>5</button>
                    <button id="6" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>6</button>
                    <TestOperation sign = '-' displaySign = {this.myCallback}/>
                </div>

                <div className="row">
                    <button id="1" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>1</button>
                    <button id="2" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>2</button>
                    <button id="3" type="button" className="btn btn-info"
                            onClick={(event) => this.storeParam(event)}>3</button>
                    <TestOperation sign = '+' displaySign = {this.myCallback}/>
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

export default TestButton;