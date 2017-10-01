/**
 * Created by ManaliJain on 9/19/17.
 */

import React, {Component} from 'react';
import TestButton from './TestButton';

class TestCalculator extends Component{
    render() {
        return (
            <div className="container">
                <form action="" method="post" className="calculator">
                    <div className="panel panel-info">
                        <div className="panel-heading text-center"><b>Calculator</b></div>
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