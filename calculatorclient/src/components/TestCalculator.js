/**
 * Created by ManaliJain on 9/19/17.
 */

import React, {Component} from 'react';
import * as API from '../api/calculatorAPI';
import TestButton from './TestButton';

class TestCalculator extends Component{

    constructor(props){
        super(props);
        this.inputString = '';
        this.state = {
            values :{
                param1: '',
                param2: '',
            },
            operation: '',
            display: '',
            isOperationCalled: false,
            clearDisplay: ''
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
        //var display = this.state.isOperationCalled? '' : this.state.display;
        this.x =  this.state.clearDisplay + event.target.id;
        //if(!this.state.isOperationCalled) {
        this.setState(
            {

                display:  this.x,
                clearDisplay: this.state.display

                //operation: this.state.operation + event.target.id
            });
        //}
    };

    storeOperation = (event) => {
        if(this.isOperationCalled){
            this.setState({
                values: {
                    ...this.state.values,
                    param2: this.state.display
                }
            });
            this.calculateResult();
        } else {
            this.setState({
                operation: event.target.id,
                display: event.target.id,
                isOperationCalled: true,
                values: {
                    ...this.state.values,
                    param1: this.state.display
                },
                clearDisplay: ''
            });
        }
    }

    calculateResult = () => {

        // var params = this.state.operation.split(',');
        this.setState(
            {
                param2: this.state.display
                // param1: params[1],
                // param2: params[3]
            });

        if(this.state.operation === '+'){
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
                            <TestButton/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default TestCalculator;