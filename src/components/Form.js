import React, { useState } from "react";

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
		<form onSubmit={submitForm}>
			{/* <label htmlFor="name">Name</label> */}
			<input
				id="name"
				type="text"
				name="name"
				placeholder="Member Name"
				onChange={handleChanges}
				value={member.name}
			/>
			{/* <label htmlFor="email">Email</label> */}
			<input
				id="email"
                name="email"
                type="text"
				placeholder="Member Email"
				onChange={handleChanges}
				value={member.email}
            />
            {/* <label htmlFor="role">Role</label> */}
            <input
                id="role"
                type="text"
                name="role"
                placeholder="Member Role"
                onChange={handleChanges}
                value={member.role}
            />
			<button type="submit">Add Note</button>
		</form>
	);
};
export default Form;
