import logo from './logo.svg';
import './App.css';
import DTN_FuncDemo from './components/DTN_FuncDemo';
import DTN_Classcomp from './components/DTN_Classcomp';

function App() {
  const users = {
    userName:"k22cnt4",
    password:"12345678910",
    fistName:"Đặng Tài ",
    lastName:"Nguyên"

  }
  function formatName(user){
    return <h2> Xin Chao,{users.fistName}{users.lastName} </h2>;

  }
  return (
    <div className="App">
      {/* bieu thuc js */}
      <div>
        <p> FullName: {users.fistName} {users.lastName}  </p>
        {formatName(users)}
      </div>
      <div>
        <DTN_FuncDemo/>
        <DTN_FuncDemo userName="DTN" fullName="Đặng Tài Nguyên" age="19"/>
      </div>
      <div>
        <DTN_Classcomp/>
        <DTN_Classcomp company="Fit-NTU - K22CNT4" course="Reactjs" />
        <DTN_Classcomp company="Fit-NTU - K22CNT3" course="Reactjs 1" />
        <DTN_Classcomp company="Fit-NTU - K22CNT4" course="Reactjs 2" />
        <DTN_Classcomp company="Fit-NTU - K22CNT6" course="Reactjs 3" />
      </div>
    </div>
  );
}

export default App;
