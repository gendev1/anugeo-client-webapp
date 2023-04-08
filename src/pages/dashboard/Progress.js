import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Container } from "react-bootstrap";
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
	console.log(currWorks);
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
					{currWorks && (
						<div className="info">
							<p>Dheney progress page antaaru</p>

							<Stepper step={4}>
								<Step>
									<StepNumber />
									<StepTitle>Awaiting work order confirmation</StepTitle>
									<StepStatus />
									<StepDescription>
										Your work needs to approved by the admin inorder to initiate
										the work
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
									<StepDescription>Report is delivered</StepDescription>
								</Step>
							</Stepper>
						</div>
					)}
				</Container>
			</div>
		</div>
	);
};

export default Progress;
