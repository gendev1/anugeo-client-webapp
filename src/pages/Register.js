import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import RegSvg from "../components/svgs/RegSvg";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";

const Register = () => {
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		email: "",
		password: "",
		password2: "",
		address1: "",
		address2: "",
		location: {
			city: "",
			district: "",
			state: "",
			pinCode: "",
		},
	});

	const handleFormData = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const validateData = () => {
		if (!formData.firstName) {
			enqueueSnackbar("Please enter First Name", { variant: "error" });
			return false;
		} else if (!formData.lastName) {
			enqueueSnackbar("Please enter Last Name", { variant: "error" });
			return false;
		} else if (!formData.email) {
			enqueueSnackbar("Please enter Email ", { variant: "error" });
			return false;
		} else if (!formData.phone) {
			enqueueSnackbar("Please enter Phone Number", { variant: "error" });
			return false;
		} else if (!formData.password) {
			enqueueSnackbar("Please enter Password", { variant: "error" });
			return false;
		} else if (!formData.password2) {
			enqueueSnackbar("Please re enter Password", { variant: "error" });
			return false;
		} else if (!formData.address1) {
			enqueueSnackbar("Please enter Address", { variant: "error" });
			return false;
		} else if (!formData.location.city) {
			enqueueSnackbar("Please enter City", { variant: "error" });
			return false;
		} else if (!formData.location.district) {
			enqueueSnackbar("Please enter District", { variant: "error" });
			return false;
		} else if (!formData.location.state) {
			enqueueSnackbar("Please enter State", { variant: "error" });
			return false;
		} else if (!formData.location.pinCode) {
			enqueueSnackbar("Please enter Pincode", { variant: "error" });
			return false;
		} else if (formData.password !== formData.password2) {
			enqueueSnackbar("Both Password should match", { variant: "error" });
			return false;
		} else {
			return true;
		}
	};

	const handleRegister = async () => {
		if (validateData()) {
			const newFormData = { ...formData };
			delete newFormData.password2;

			try {
				const res = await axios.post(
					"http://localhost:2000/auth/signup",
					newFormData,
				);
				if (res.status === 201) {
					setFormData({
						firstName: "",
						lastName: "",
						phone: "",
						email: "",
						password: "",
						password2: "",
						address1: "",
						address2: "",
						location: {
							city: "",
							district: "",
							state: "",
							pinCode: "",
						},
					});
					enqueueSnackbar("Registered successfully", { variant: "success" });
					navigate("/login");
				}
			} catch (err) {
				if (String(err.response.status)[0] === "4") {
					enqueueSnackbar(err.response.data.message, { variant: "error" });
				} else {
					enqueueSnackbar(
						"Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
						{ variant: "error" },
					);
				}
			}
		}
	};

	return (
		<div className="bg-dark reg-con">
			<Container fluid className="register-form">
				<div className="reg-intro text-center py-5 bg-white">
					<h1>Join the revolution in soil testing management today!</h1>
					<p>
						Register now and discover how our digital solutions can help you
						optimize your workflow and achieve greater efficiency.
					</p>
				</div>
				<Row className="d-flex align-items-center ">
					<Col md={4} className="d-none d-sm-block p-3">
						<RegSvg />
					</Col>
					<Col md={7} xs={12} className="mt-5 ">
						<Form className="reg-form py-4  p-5 mb-5 bg-white rounded">
							<h2>Register Now</h2>
							<br />
							<Row>
								<Col>
									<Form.Group className="mb-3">
										<Form.Label>First Name</Form.Label>
										<Form.Control
											type="TEXT"
											placeholder="First Name"
											name="firstName"
											value={formData.firstName}
											onChange={(e) => handleFormData(e)}
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className="mb-3">
										<Form.Label>Last Name</Form.Label>
										<Form.Control
											type="TEXT"
											placeholder="Last Name"
											name="lastName"
											value={formData.lastName}
											onChange={(e) => handleFormData(e)}
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group className="mb-3">
										<Form.Label>Email address</Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter email"
											name="email"
											value={formData.email}
											onChange={(e) => handleFormData(e)}
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className="mb-3">
										<Form.Label>Phone Number</Form.Label>
										<Form.Control
											type="number"
											placeholder="Enter phone number"
											name="phone"
											value={formData.phone}
											onChange={(e) => handleFormData(e)}
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group className="mb-3">
										<Form.Label>Enter your Password:</Form.Label>
										<Form.Control
											type="password"
											id="inputPassword5"
											aria-describedby="passwordHelpBlock"
											name="password"
											value={formData.password}
											onChange={(e) => handleFormData(e)}
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className="mb-3">
										<Form.Label>Re-Enter your Password:</Form.Label>
										<Form.Control
											type="password"
											id="inputPassword5"
											aria-describedby="passwordHelpBlock"
											name="password2"
											value={formData.password2}
											onChange={(e) => handleFormData(e)}
										/>
									</Form.Group>
								</Col>
							</Row>

							<Row>
								<Col>
									<Form.Group className="mb-3">
										<Form.Label>Address1:</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter address"
											name="address1"
											value={formData.address1}
											onChange={(e) => handleFormData(e)}
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className="mb-3">
										<Form.Label>Address2:</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter address"
											name="address2"
											value={formData.address2}
											onChange={(e) => handleFormData(e)}
										/>
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group className="mb-3">
										<Form.Label>City</Form.Label>
										<Form.Control
											type="text"
											placeholder="City/Town"
											name="city"
											value={formData.location.city}
											onChange={(event) =>
												setFormData({
													...formData,
													location: {
														...formData.location,
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
											value={formData.location.district}
											onChange={(event) =>
												setFormData({
													...formData,
													location: {
														...formData.location,
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
											value={formData.location.state}
											onChange={(event) =>
												setFormData({
													...formData,
													location: {
														...formData.location,
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
											value={formData.location.pinCode}
											onChange={(event) =>
												setFormData({
													...formData,
													location: {
														...formData.location,
														pinCode: event.target.value,
													},
												})
											}
										/>
									</Form.Group>
								</Col>
							</Row>
							<Link to="/login" style={{ textDecoration: "none" }}>
								Already a user? Log in
							</Link>

							<br />
							<br />
							<Button variant="primary" onClick={handleRegister}>
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Register;
