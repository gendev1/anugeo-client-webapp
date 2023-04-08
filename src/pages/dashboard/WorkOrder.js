import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DashboardNav from "./DashboardNav";
import ReportSvg from "../../components/svgs/ReportSvg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
const WorkOrder = ({ handleWorkOrder }) => {
	const [workData, setWorkData] = useState({
		description: "",
		startDate: "",
		owner: "",
		address: "",
		pinCode: "",
		services: "",
		status: "pending",
	});

	const handleWorkData = (event) => {
		setWorkData({ ...workData, [event.target.name]: event.target.value });
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
				<Container className="py-2">
					<Container className="py-5">
						<h1>Ready to Contact Us?</h1>
						<p>
							Hey {localStorage.getItem("name")}, Fill the details and we will
							get your soil testing reports to you!
						</p>
					</Container>

					<Container>
						<Row className="d-flex align-items-center">
							<Col md={4}>
								<ReportSvg />
							</Col>
							<Col>
								<Form>
									<Row>
										<Col>
											<Form.Group className="mb-3">
												<Form.Label>Site address</Form.Label>
												<Form.Control
													type="text"
													placeholder="Enter site address"
													value={workData.address}
													name="address"
													onChange={(e) => handleWorkData(e)}
												/>
											</Form.Group>
										</Col>
										<Col>
											<Form.Group className="mb-3">
												<Form.Label>Enter pincode:</Form.Label>
												<Form.Control
													type="number"
													placeholder="Enter pincode"
													name="pinCode"
													value={workData.pinCode}
													onChange={(e) => handleWorkData(e)}
												/>
											</Form.Group>
										</Col>
									</Row>
									<Row className="g-2 d-flex align-items-center mt-2">
										<Col md>
											<FloatingLabel
												controlId="floatingInputGrid"
												label="Description"
											>
												<Form.Control
													type="text"
													placeholder="description"
													style={{ height: "100px" }}
													value={workData.description}
													name="description"
													onChange={(e) => handleWorkData(e)}
												/>
											</FloatingLabel>
											<Form.Text className="text-muted">
												Please enter the nature of the work.
											</Form.Text>
										</Col>
										<Col md>
											<FloatingLabel
												controlId="floatingSelectGrid"
												label="Select the type of Service"
											>
												<Form.Select
													aria-label="Floating label select example"
													name="services" // Set the 'name' attribute to 'services'
													onChange={(e) => handleWorkData(e)}
												>
													<option>Service Required</option>
													<option value="soil samples">Soil Samples</option>
													<option value="rock drilling">Rock Drilling</option>
													<option value="penetration testing">
														Penetration Testing
													</option>
												</Form.Select>
												<Form.Text className="text-muted">
													SPT, DCPT, UDS, DS
												</Form.Text>
											</FloatingLabel>
										</Col>
									</Row>

									{/* <Form.Group className="mb-3">
										<Form.Label>Description</Form.Label>
										<Form.Control type="text" placeholder="description" />
									</Form.Group> */}
									<Row className="mt-2 d-flex justify-content-center text-center">
										<label for="date">
											Schedule the start day of the work:{" "}
										</label>
										<input
											type="date"
											id="startDate"
											name="startDate"
											value={workData.startDate}
											onChange={(e) => handleWorkData(e)}
											style={{ padding: "10px", width: "180px" }}
										></input>
									</Row>
									<br />
									<p>
										Note: Your contact details will be shared for further
										communication.
									</p>
									<br />
									<Button
										variant="primary"
										onClick={() => handleWorkOrder(workData)}
									>
										Submit
									</Button>
								</Form>
							</Col>
						</Row>
					</Container>
				</Container>
			</div>
		</div>
	);
};

export default WorkOrder;
