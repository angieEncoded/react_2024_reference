// How to build using class based components
import { Component } from "react"; 
import { connect } from "react-redux";

class Counter extends Component {
    
    increment(){
        this.props.increment();
    }
    decrement(){
        this.props.decrement();
    }

    toggleCounterHandler(){}



    render() {
        <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{ this.props.counter }</div>
        <div>
          <button onClick={this.decrement.bind(this)}>Decrement</button>
          <button onClick={this.increment.bind(this)}>Increment</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type:"ADDONE"}),
        decrement: () => dispatch({type:"SUBTRACTONE"})
    }
}


// connect is a "higher order" component - it will execute first and return a function, then we pass Counter to that function and execute it
export default connect(mapStateToProps, mapDispatchToProps)(Counter)