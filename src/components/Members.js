import React from "react";
import { CardHeader, Card, CardBody, CardText } from "reactstrap";
import styled from "styled-components";

const Members = props => {

    const MemberCard = styled.div`
        width:30%;
        margin-bottom:3%;
    `;

    const CardGrid = styled.section`
        display:flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    `;

	return (
		<CardGrid>
			{props.members.map(member => (
				<MemberCard key={member.id}>
					<Card body inverse color="primary">
						<CardHeader>
							<h2>{member.name}</h2>
						</CardHeader>
						<CardBody>
							<CardText>
								<p>Contact: {member.email}</p>
								<p>Role: {member.role}</p>
							</CardText>
						</CardBody>
					</Card>
				</MemberCard>
			))}
		</CardGrid>
	);
};

export default Members;
