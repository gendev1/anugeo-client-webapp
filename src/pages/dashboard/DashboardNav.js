import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const DashboardNav = () => {
	return (
		<div>
			<Container fluid className="bg-light py-3 d-flex flex-row-reverse">
				<Row>
					<Col>Signed in as: {localStorage.getItem("name")}</Col>
				</Row>
			</Container>
		</div>
	);
};

export default DashboardNav;
