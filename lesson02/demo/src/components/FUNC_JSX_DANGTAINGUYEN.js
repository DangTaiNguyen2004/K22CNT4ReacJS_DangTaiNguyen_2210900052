import React from 'react'

export default function FUNC_JSX_DANGTAINGUYEN(props) {
    const users = {
        name:"Dang Tai Nguyen",
        age:19
    }
  return (
    <div>
        <h2>Function component Demo</h2>
        <h3>
            welcom to , {users.name} - {users.age}
        </h3>
        <hr/>
            <h3>Props:
                <br/> fullname: {props.fullname}
                <br/> age: {props.age}

            </h3>
    </div>
  )
}
