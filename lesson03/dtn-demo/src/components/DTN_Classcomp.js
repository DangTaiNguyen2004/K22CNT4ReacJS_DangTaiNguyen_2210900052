import React, { Component } from 'react';

export default class DTN_Classcomp extends Component {
    constructor(props){
        super(props);
        this.state={
            fistName:"Đặng Tài ",
            lastName:"Nguyên",
            userName:"k22cnt4",
            
        }
    }
    member = (props)=>{
        return(
            <div className='alert alert-success'>
                <h3>xin chao: {props.fullName} -ban da {this.props.age} tuoi.</h3>
            </div>
        );
    }
    listmember = ()=>{
        return(
            <>
            <this.member fullName="Đặng Tài A" age="29"/>
            <this.member fullName="Đặng Tài B" age="39"/>
            <this.member fullName="Đặng Tài C" age="39"/>
            <this.member fullName="Đặng Tài D" age="49"/>
            </>
        )
    }
  render() {
    return (
        <div className='alert alert-dander'>
            <h2>class component Demo</h2>
            <hr/>
            <h3>du lieu trong state</h3>
            <h3>xin chao: {this.state.fistName} {this.state.lastName} </h3>
            <hr/>
            <h3>du lieu tu props</h3>
            <p>company :{this.props.comany}</p>
            <p>course :{this.props.course}</p>
            <hr/>
            <this.member fullName="Đặng Tài Nguyên" age="19"/>
            <this.listmember/>
        </div>
    );
  }
}
