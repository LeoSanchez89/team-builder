import React from "react";

const Members = props => {
	return (
		<div>
			{props.members.map(member => (
				<div key={member.id}>
                    <h2>{member.name}</h2>
                    <p>Contact: {member.email}</p>
                    <p>Role: {member.role}</p>
				</div>
			))}
		</div>
	);
};

export default Members;
