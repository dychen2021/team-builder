import React, {useState} from 'react';
import Form from './Components/Form';

import './App.css';

function App() {

  const {members, setMembers} = useState([])
  const {values, setValues} = useState({name: "", email: "", role: ""})
  /**
    * Create form to hold team members.
    */

  const onSubmit = () =>{
    setMembers([values, ...members])
    setValues({name:'', email:'', role:''})
  }

  const onChange = (name, value) =>{
    setValues({...values, [name]: value})
  }

  return (
    <div className="App">
      <h1>Team Builder App!</h1>
      <Form values={values} change={onChange} submit={onSubmit}/>
      {members.map((member, index) =>{
        return(
          <div key={index}>
            {member.email}, {member.name}, {member.role}
          </div>
        )
      })}
    </div>
  );
}

export default App;
