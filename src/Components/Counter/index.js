import React, {Component} from 'react';
import {connect} from 'react-redux';
import actionCreators from '../../redux/Counter/actions';

class Counter extends Component {
    render() {
        return (
            <div>
                <h2> Counter </h2>
            <div>
                <button onClick={this.props.decrement}> -</button>
                <span> {this.props.count} </span>
                <button onClick={this.props.increment}> +</button>
            </div>
        </div>
        )

    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps', state);
    return {
        count: state.count
    }
    };

const mapDispatchToProps = dispatch => ({
    increment: () => {
        console.log('increment');
        dispatch(actionCreators.incrementCount());
    },
    decrement: () => {
        console.log('decrement');
        dispatch(actionCreators.decrementCount())
    }
    });

export default connect(mapStateToProps, mapDispatchToProps)(Counter);