import React from 'react'

export default function DTN_FuncDemo(props) {
  return (
    <div>
        <h2>function component Demo</h2>
        <h3>su dung thuoc tinh props</h3>
        <p>userName: {props.username}</p>
        <p>FullName: {props.Fullname}</p>
        <p>age: {props.age}</p>
    </div>
  )
}
