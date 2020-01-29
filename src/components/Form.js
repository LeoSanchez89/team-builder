import React, { useState } from "react";
import { Button } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import styled from "styled-components";

const InputField = styled.div`
	width: 30%;
	align-text: center;
`;

const MainContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const CustomButton = styled(Button)`
    margin-bottom:5%;
`;

const Form = props => {
	console.log("props", props);

	const [member, setMember] = useState({
		name: "",
		email: "",
		role: ""
	});

	const handleChanges = e => {
		console.log(member);
		setMember({ ...member, [e.target.name]: e.target.value });
	};

	const submitForm = e => {
		e.preventDefault();
		props.addMember(member);
		setMember({ name: "", email: "", role: "" });
	};

	return (
		<MainContainer>
			<InputField>
				<form onSubmit={submitForm}>
					<InputGroup>
						<InputGroupAddon addonType="prepend">
							<InputGroupText>Name</InputGroupText>
						</InputGroupAddon>
						<Input
							id="name"
							type="text"
							name="name"
							placeholder="Member Name"
							onChange={handleChanges}
							value={member.name}
						/>
					</InputGroup>
					<br />
					<InputGroup>
						<InputGroupAddon addonType="prepend">
							<InputGroupText>@</InputGroupText>
						</InputGroupAddon>
						<Input
							id="email"
							name="email"
							type="text"
							placeholder="Member Email"
							onChange={handleChanges}
							value={member.email}
						/>
					</InputGroup>
					<br />
					<InputGroup>
						<InputGroupAddon addonType="prepend">
							<InputGroupText>Role</InputGroupText>
						</InputGroupAddon>
						<Input
							id="role"
							type="text"
							name="role"
							placeholder="Member Role"
							onChange={handleChanges}
							value={member.role}
						/>
					</InputGroup>
					<br />
					<CustomButton type="submit" color="primary">
						Add Member
					</CustomButton>
                    
				</form>
			</InputField>
		</MainContainer>
	);
};
export default Form;
