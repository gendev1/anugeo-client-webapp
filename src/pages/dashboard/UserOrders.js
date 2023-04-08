import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import DashboardNav from "./DashboardNav";
const UserOrders = ({ handleGetAllWorksByUser, currWorks }) => {
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
				<Container className="py-3">
					<h4>Your Previous work orders</h4>
					{currWorks ? (
						<Table striped>
							<thead>
								<tr>
									<th>S.no</th>
									<th>Description</th>
									<th>Status</th>
									<th>Start Date</th>
								</tr>
							</thead>
							<tbody>
								{currWorks.map((ele) => {
									return (
										<tr key={ele._id}>
											<td>1</td>
											<td>{ele.description}</td>
											<td>{ele.status}</td>
											<td>{ele.startDate}</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					) : (
						<h2>No works yet</h2>
					)}
				</Container>
			</div>
		</div>
	);
};

export default UserOrders;
