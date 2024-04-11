import React, { Component } from 'react'

class Class_DANGTAINGUYEN extends Component {
    constructor(props){
        super(props);
        this.state={
            fullname:"DANGTAINGUYEN",
            class:"CNTT4"
        }
    }
    users = {
        name:"Dang Tai Nguyen",
        age:19
    }
    handlechange = (event)=>{
        this.setState({
            fullname:"NGUYEN DEP TRAI",
        })

        
    }
  render() {
    return (
      <div>
        <h2> Class component Demo </h2>
        {users.name} - {this.users.age}
        <hr/>
            <h3>info: {this.props.info}</h3>
            <h3>Tine: {this.props.info}</h3>
            <hr/>
            <h3>state:
                Fullname:{this.state.fullname} -
                Class:{this.state.class}
            </h3>
            <button onClick={this.handlechange}>change Name</button>
      </div>
    )
  }
}

export default Class_DANGTAINGUYEN;