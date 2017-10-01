/**
 * Created by ManaliJain on 9/20/17.
 */
import React, {Component} from 'react';


class TestOperation extends Component{

    storeOperation = (event) => {
        var display = event.target.id;
        this.props.displaySign(display);
    };

    render() {
        return(
            <button id={this.props.sign} type="button" className="btn btn-info"
                    onClick={(event) => this.storeOperation(event)}>{this.props.sign}</button>

        );
    }
}
export default TestOperation;