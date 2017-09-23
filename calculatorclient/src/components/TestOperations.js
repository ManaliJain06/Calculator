/**
 * Created by ManaliJain on 9/20/17.
 */
import React, {Component} from 'react';


class TestOperation extends Component{

    // constructor(props) {
    //     super(props)
    //     // this.state = {
    //     //     operation: '',
    //     //     display: ''
    //     // };
    //}

    storeOperation = (event) => {
        // if(this.isOperationCalled){
        //     this.setState({
        //         values: {
        //             ...this.state.values,
        //             param2: this.state.display
        //         }
        //     });
        //     this.calculateResult();
        // } else {
        //     this.setState({
        //         operation: event.target.id,
        //         display: event.target.id,
        //         isOperationCalled: true,
        //         values: {
        //             ...this.state.values,
        //             param1: this.state.display
        //         },
        //         clearDisplay: ''
        //     });
        // }

        // do a callback in setState to make sure that setState is rendered to DOM and then perform any operation to get
        // the state using this.state
        // this.setState({
        //     operation: event.target.id
        // }, function(){
        //     var display = this.state.operation;
        //     this.props.displaySign(display);
        // }.bind(this));

        var display = event.target.id;
        this.props.displaySign(display);

    };

    // componentDidUpdate() {
    //     var display = this.state.operation;
    //     this.props.displaySign(display);
    // }

    render() {
        return(
            <button id={this.props.sign} type="button" className="btn btn-info"
                    onClick={(event) => this.storeOperation(event)}>{this.props.sign}</button>

        );
    }
}
export default TestOperation;