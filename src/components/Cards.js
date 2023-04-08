import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ReportSvg from "./svgs/ReportSvg";
import {
	FaChartLine,
	FaDesktop,
	FaFileInvoice,
	FaLaptop,
	FaPhoneVolume,
} from "react-icons/fa";

const CardsGrid = () => {
	return (
		<Container className="py-5">
			<Row className="d-flex justify-content-center align-items-center">
				<Col md={6}>
					<h2 className="py-3">
						Simplify soil testing management and{" "}
						<span style={{ color: "#6e9edf", fontWeight: 600 }}>
							Optimize Your Workflow
						</span>
						.
					</h2>
					<Row className="d-flex align-items-center">
						<Col md={1}>
							<FaChartLine size={30} />
						</Col>
						<Col>
							<p className="p-title">Real-Time Monitoring</p>
							<p>
								Track progress, identify issues, and optimize workflow for
								greater efficiency.
							</p>
						</Col>
					</Row>
					<Row className="d-flex align-items-center">
						<Col md={1}>
							<FaDesktop size={30} />
						</Col>
						<Col>
							<p className="p-title">Data-Driven Insights</p>
							<p>
								Gain insights into soil quality, equipment usage, and contractor
								performance for informed decision-making.
							</p>
						</Col>
					</Row>
					<Row className="d-flex align-items-center">
						<Col md={1}>
							<FaFileInvoice size={30} />
						</Col>
						<Col>
							<p className="p-title">Comprehensive Reporting</p>
							<p>
								Get detailed information on project timelines, testing results,
								and key metrics for a complete overview.
							</p>
						</Col>
					</Row>
					<Row className="d-flex align-items-center">
						<Col md={1}>
							<FaLaptop size={30} />
						</Col>
						<Col>
							<p className="p-title">Streamlined Workflow Management</p>
							<p>
								Simplify the soil testing management process, manage projects,
								track progress, and communicate with ease.
							</p>
						</Col>
					</Row>
					<Row className="d-flex align-items-center">
						<Col md={1}>
							<FaPhoneVolume size={30} />
						</Col>
						<Col>
							<p className="p-title">Expert Support</p>
							<p>
								Get expert support and guidance from our team of soil testing
								management professionals.
							</p>
						</Col>
					</Row>
				</Col>
				<Col md={5}>
					<ReportSvg />
				</Col>
			</Row>
		</Container>
	);
};

export default CardsGrid;
