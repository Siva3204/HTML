class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    Incrementcount=()=>{
      this.setState({count:this.state.count+1})
    };
    decrementCount=()=>{
      if (this.state.count > 0) {
      this.setState({count:this.state.count-1})
      }
    };
    resetCount=()=>{
      this.setState({count:0})  
    }
    render() {
      return (
        <div>
          <h1>Counter</h1>
          <p>Count: {this.state.count}</p>
          <button onClick={this.incrementCount}>Increment</button>
          <button onClick={this.decrementCount}>Decrement</button>
          <button onClick={this.resetCount}>Reset</button>
        </div>
      );
    }
}
export default Counter;