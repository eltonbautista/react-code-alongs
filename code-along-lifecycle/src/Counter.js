import React, {Component} from 'react'

class Counter extends Component {
  constructor(props) {
    console.log('Constructor')
    super(props);

    this.state = {
      counter: 0
    }

    this.increment = () => this.setState({counter: this.state.counter + 1})
    this.decrement = () => this.setState({counter: this.state.counter - 1})
    
  }
  
  static getDerivedStateFromProps(props, state) {
    if(props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed
      }
    }
    return null
  }

  componentDidMount() {
    console.log('Component did mount')
    console.log('---------')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should component update - do not render')
    if(nextProps.ignoreProp && 
      this.props.ignoreProp !== nextProps.ignoreProp) {
        return false
      }
    console.log('Should Component Update - Render')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null
  }

  render() {
    console.log('Render')

    return (
      <div>
        <button onClick={this.increment}>Inc</button>
        <button onClick={this.decrement}>Dec</button>

        <div className='counter'>
          Counter: {this.state.counter}
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component did update')
    console.log('---------')
  }

}

export default Counter