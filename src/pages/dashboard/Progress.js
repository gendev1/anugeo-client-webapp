import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import Sidebar from "../../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import {
	Stepper,
	Step,
	useStepper,
	StepNumber,
	StepTitle,
	StepStatus,
	StepDescription,
} from "react-progress-stepper";
import DashboardNav from "./DashboardNav";
import { FaLayerGroup } from "react-icons/fa";

const progressStep = {
	pending: 0,
	"in progress": 1,
	"at laboratory": 2,
	"awaiting for payment": 3,
	completed: 4,
	rejected: -1,
};

const Progress = ({ handleGetAllWorksByUser, currWorks, setCurrWorks }) => {
	const { step, incrementStep, decrementStep } = useStepper(0, 4);
	// const [latestWork, setLatestWork] = useState([]);
	// const [remainingWorks, setRemainingWorks] = useState([]);
	useEffect(() => {
		handleGetAllWorksByUser();
	}, []);

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
				<Container className="py-5">
					{currWorks.length && (
						<Accordion defaultActiveKey={currWorks[0]._id}>
							{currWorks.map((ele) => {
								return (
									<Accordion.Item eventKey={ele._id} key={ele._id}>
										<Accordion.Header>
											Work at {ele.address}
											<br />
											<br />
											Placed order on:{" "}
											{new Date(ele.createdAt).toLocaleDateString("en-GB")}
										</Accordion.Header>
										<Accordion.Body style={{ minHeight: "65vh" }}>
											<div className="info">
												<Stepper step={progressStep[ele.status]}>
													<Step>
														<StepNumber />
														<StepTitle>
															Awaiting work order confirmation
														</StepTitle>
														<StepStatus />
														<StepDescription>
															Your work needs to approved by the admin inorder
															to initiate the work
														</StepDescription>
													</Step>

													<Step>
														<StepNumber />
														<StepTitle>Field Work</StepTitle>
														<StepStatus />
														<StepDescription>
															Sample collection at work site.
														</StepDescription>
													</Step>
													<Step>
														<StepNumber />
														<StepTitle>Laboratory</StepTitle>
														<StepStatus />
														<StepDescription>
															Soil testing reports at the lab
														</StepDescription>
													</Step>
													<Step>
														<StepNumber />
														<StepTitle>Report Delivery</StepTitle>
														<StepStatus />
														<StepDescription>
															Report is delivered
														</StepDescription>
													</Step>
												</Stepper>
											</div>
											<br />
											<br />
											<br />
											<br />
											<br />
											<br />
											<br />
											<br />
											<br />
											<div className="mt-5">
												<Row>
													<Col>
														<div className="status">
															<p>
																Your work current status : <br />
																<br />
																<b
																	className="mt-3"
																	style={{
																		backgroundColor: "#e7e9fd",
																		padding: "5px 10px",
																		color: "#3f42ed",
																		borderRadius: "20px",
																		fontSize: "16px",
																	}}
																>
																	{ele.status}
																</b>
															</p>
														</div>
														<div className="dates pt-4">
															<p>Your desired work commence date is: </p>
															<b>
																{new Date(ele.startDate).toLocaleDateString(
																	"en-GB",
																)}
															</b>
														</div>
														<div className="service pt-4">
															<p>Services opted for:</p>

															<b>{ele.services}</b>
														</div>
													</Col>
													<Col>
														<div className="decription">
															<p>Work Description:</p>

															<p>{ele.description}</p>
														</div>
														<div className="pincode pt-4">
															<p>Pin code of the area:</p>
															<b>{ele.pinCode}</b>
														</div>
														{ele.bill && (
															<div className="bill pt-2">
																<p>Bill number:</p>
																<b>{ele.bill}</b>
															</div>
														)}
														{ele.workOrder && (
															<div className="workOrder pt-2">
																<p>Work order number:</p>
																<b>{ele.workOrder}</b>
															</div>
														)}
													</Col>
													<Col>
														<div className="address ">
															<p>Address of the site:</p>
															<p>{ele.address}</p>
														</div>
														{ele.endDate && (
															<div className="address pt-2">
																<p>Work completion date:</p>
																<b>
																	{new Date(ele.endDate).toLocaleDateString(
																		"en-GB",
																	)}
																</b>
															</div>
														)}
														{ele.workPayment && (
															<div className="amount pt-2">
																<p>Amount to pay</p>
																<b>{ele.workPayment}</b>
															</div>
														)}
													</Col>
												</Row>
											</div>
										</Accordion.Body>
									</Accordion.Item>
								);
							})}
						</Accordion>
					)}
				</Container>
			</div>
		</div>
	);
};

export default Progress;
