import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DashboardNav from "./DashboardNav";
const Profile = ({ handleEditUser }) => {
	const [editUser, setEditUser] = useState();

	useEffect(() => {
		const storedUser = localStorage.getItem("user");
		const parsedUser = JSON.parse(storedUser);
		setEditUser(parsedUser);
	}, []);

	const handleEditFormData = (e) => {
		setEditUser({
			...editUser,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div className="d-flex">
			<div>
				<Sidebar />
			</div>
			<div
				style={{
					flex: "1 1 auto",
					display: "flex",
					flexFlow: "column",
					height: "100vh",
					overflowY: "hidden",
				}}
			>
				<DashboardNav />
				{editUser && (
					<Container className="py-5 ">
						<h3>Edit Your details</h3>

						<Container className="mt-3 d-flex align-items-center">
							<Form>
								<Row>
									<Col>
										<Form.Group className="mb-3">
											<Form.Label>First Name</Form.Label>
											<Form.Control
												type="text"
												name="firstName"
												placeholder="First Name"
												value={editUser.firstName}
												onChange={(e) => handleEditFormData(e)}
											/>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="mb-3">
											<Form.Label>Last Name</Form.Label>
											<Form.Control
												type="text"
												name="lastName"
												placeholder="Last Name"
												value={editUser.lastName}
												onChange={(e) => handleEditFormData(e)}
											/>
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Group className="mb-3">
											<Form.Group className="mb-3">
												<Form.Label>Email address</Form.Label>
												<Form.Control
													disabled
													value={editUser.email}
													name="email"
												/>
												<Form.Text className="text-muted">
													Email address cannot be changed.
												</Form.Text>
											</Form.Group>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="mb-3">
											<Form.Group className="mb-3">
												<Form.Label>Phone Number</Form.Label>
												<Form.Control
													disabled
													value={editUser.phone}
													name="phone"
												/>
												<Form.Text className="text-muted">
													Phone number cannot be changed.
												</Form.Text>
											</Form.Group>
										</Form.Group>
									</Col>
								</Row>
								<Form.Group className="mb-3">
									<Form.Label>Address 1</Form.Label>
									<Form.Control
										type="text"
										name="address1"
										placeholder="address1"
										value={editUser.address1}
										onChange={(e) => handleEditFormData(e)}
									/>
								</Form.Group>

								<Form.Group className="mb-3">
									<Form.Label>Address 2</Form.Label>
									<Form.Control
										type="text"
										name="address2"
										placeholder="address2"
										value={editUser.address2}
										onChange={(e) => handleEditFormData(e)}
									/>
								</Form.Group>
								<Row>
									<Col>
										<Form.Group className="mb-3">
											<Form.Label>City</Form.Label>
											<Form.Control
												type="text"
												placeholder="City/Town"
												name="city"
												value={editUser.location.city}
												onChange={(event) =>
													setEditUser({
														...editUser,
														location: {
															...editUser.location,
															city: event.target.value,
														},
													})
												}
											/>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="mb-3">
											<Form.Label>District</Form.Label>
											<Form.Control
												type="text"
												placeholder="District"
												name="district"
												value={editUser.location.district}
												onChange={(event) =>
													setEditUser({
														...editUser,
														location: {
															...editUser.location,
															district: event.target.value,
														},
													})
												}
											/>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="mb-3">
											<Form.Label>State</Form.Label>
											<Form.Control
												type="text"
												placeholder="State"
												name="state"
												value={editUser.location.state}
												onChange={(event) =>
													setEditUser({
														...editUser,
														location: {
															...editUser.location,
															state: event.target.value,
														},
													})
												}
											/>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="mb-3">
											<Form.Label>Pincode</Form.Label>
											<Form.Control
												type="number"
												placeholder="Pincode"
												name="location.pinCode"
												value={editUser.location.pinCode}
												onChange={(event) =>
													setEditUser({
														...editUser,
														location: {
															...editUser.location,
															pinCode: event.target.value,
														},
													})
												}
											/>
										</Form.Group>
									</Col>
								</Row>
								<Button
									variant="primary"
									onClick={() => handleEditUser(editUser)}
								>
									Submit
								</Button>
							</Form>
						</Container>
					</Container>
				)}
			</div>
		</div>
	);
};

export default Profile;
