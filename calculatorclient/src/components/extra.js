/**
 * Created by ManaliJain on 9/19/17.
 */

import React, {Component} from 'react';
import * as API from '../api/calculatorAPI';

class Calculator extends Component{

    constructor(props){
        super(props);
        this.inputString = '';
        this.state = {
            values :{
                param1: '',
                param2: '',
            },
            operation: '',
            display: ''
        };
    }



    // componentDidMount() {
    //     this.state.operation =
    // }
    allClear = () => {
        this.setState(
            {
                display: 0,
                operation: ''
            }
        );
    };

    // clear = () => {
    //     var params = this.state.operation.split(',');
    //     params
    // };

    storeParam = (event) => {

        //this.inputString +=  ',' + event.target.id;
        this.setState(
            {
                display: this.state.display + event.target.id,
                operation: this.state.operation + event.target.id
            });
    };

    storeOperation = (event) => {
        this.setState(
            {
                operation: this.state.operation
            });
    }

    calculateResult = () => {
        var params = this.state.operation.split(',');
        this.setState(
            {
                param1: params[1],
                param2: params[3]
            });

        if(params[2] === '+'){
            API.addition(this.state.values)
                .then((res) => {
                    if (res.status === 200) {
                        this.setState({
                            display: res.result,
                            operation: ''
                        });
                    } else if (res.status === 404) {
                        this.setState({
                            display: 'Error',
                            operation: ''
                        });
                    }
                });
        }
    };

    render() {
        return (
            <div className="container">
                <form action="" method="post" className="calculator">
                    <div className="panel panel-info">
                        <div className="panel-heading text-center">Calculator</div>
                        <div className="panel-body">

                            <div id="calculatorPanel">
                                <div className="row">
                                    <div className="form-group">
                                        <form name="calc">
                                            <input type="text" className="form-control text-right" id="result" name="result" readOnly
                                                   value={this.state.display}/>
                                        </form>
                                    </div>
                                </div>

                                <div className="row fields">
                                    <button id="allClear" type="button" className="btn btn-success"
                                            onClick={(event) => this.allClear(event)}>AC</button>
                                    <button id="clear" type="button" className="btn btn-primary">CE</button>
                                    <button id="/" type="button" className="btn btn-info">÷</button>
                                </div>

                                <div className="row">
                                    <button id="7" type="button" className="btn btn-info"
                                            onClick={(event) => this.storeParam(event)}>7</button>
                                    <button id="8" type="button" className="btn btn-info"
                                            onClick={(event) => this.storeParam(event)}>8</button>
                                    <button id="9" type="button" className="btn btn-info"
                                            onClick={(event) => this.storeParam(event)}>9</button>
                                    <button id="x" type="button" className="btn btn-info"
                                            onClick={(event) => this.storeParam(event)}>x</button>
                                </div>

                                <div className="row">
                                    <button id="4" type="button" className="btn btn-info">4</button>
                                    <button id="5" type="button" className="btn btn-info">5</button>
                                    <button id="6" type="button" className="btn btn-info">6</button>
                                    <button id="-" type="button" className="btn btn-info">-</button>
                                </div>

                                <div className="row">
                                    <button id="1" type="button" className="btn btn-info">1</button>
                                    <button id="2" type="button" className="btn btn-info">2</button>
                                    <button id="3" type="button" className="btn btn-info">3</button>
                                    <button id="+" type="button" className="btn btn-info"
                                            onClick={(event) => this.storeParam(event)}>+</button>
                                </div>


                                <div className="row">
                                    <button id="0" type="button" className="btn btn-info">0</button>
                                    <button id="." type="button" className="btn btn-info">.</button>
                                    <button id="calculate" type="button" className="btn btn-warning"
                                            onClick={(event) => this.calculateResult(event)}>=</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Calculator;