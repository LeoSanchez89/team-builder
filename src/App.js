import React, {useState} from 'react';
import Form from "./components/Form";
import Members from "./components/Members"
import './App.css';
import styled from "styled-components";

const PageTitle = styled.h1`
  margin: 2%;
  font-size: 3.5rem;

`; 

function App() {
  
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Leo Sanchez",
      email: "Dothamaph@gmail.com",
      role: "Web Developer"

    }
  ]);

  const addMember = member => {
		const newMember = {
			id: Date.now(),
			name: member.name,
      email: member.email,
      role: member.role
		};
		setMembers([...members, newMember]);
	};

  return (
		<div className="App">
			<PageTitle className= "text-primary">Team Members <hr className="style1"/></PageTitle>
			<Members members={members} />
			<Form addMember={addMember} />
		</div>
	);
}

export default App;
