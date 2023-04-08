import React, { useState } from "react";
import "./App.css";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";
import WorkOrder from "./pages/dashboard/WorkOrder";
import Profile from "./pages/dashboard/Profile";
import UserOrders from "./pages/dashboard/UserOrders";
import Progress from "./pages/dashboard/Progress";

function App() {
	const { enqueueSnackbar } = useSnackbar();
	const [currWorks, setCurrWorks] = useState([]);
	const navigate = useNavigate();

	const handleLogin = async (userData) => {
		try {
			const res = await axios.post(
				"http://localhost:2000/auth/login",
				userData,
			);

			localStorage.setItem("token", res.data.token);
			localStorage.setItem("user", JSON.stringify(res.data.user));
			localStorage.setItem("id", res.data.user._id);

			localStorage.setItem(
				"name",
				res.data.user.firstName + " " + res.data.user.lastName,
			);

			enqueueSnackbar("Logged In successfully", { variant: "success" });
			navigate("/");
		} catch (err) {
			if (String(err.response.status)[0] === "4") {
				enqueueSnackbar(err.response.data.message, { variant: "error" });
			} else {
				enqueueSnackbar(
					"Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
					{ variant: "error" },
				);
			}
			console.log(err);
		}
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		localStorage.removeItem("id");
		localStorage.removeItem("name");

		navigate("/");
		enqueueSnackbar("Logged out successfully", { variant: "success" });
	};

	const handleEditUser = async (userData) => {
		try {
			const id = localStorage.getItem("id");
			const token = localStorage.getItem("token");
			const headers = {
				Authorization: `Bearer ${token}`,
			};

			const res = await axios.put(
				`http://localhost:2000/users/${id}`,
				userData,
				{
					headers,
				},
			);

			localStorage.setItem("user", JSON.stringify(res.data.user));
			localStorage.setItem(
				"name",
				res.data.user.firstName + " " + res.data.user.lastName,
			);

			enqueueSnackbar("successfully Updated", { variant: "success" });
		} catch (err) {
			if (String(err.response.status)[0] === "4") {
				enqueueSnackbar(err.response.data.message, { variant: "error" });
			} else {
				enqueueSnackbar(
					"Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
					{ variant: "error" },
				);
			}
			console.log(err);
		}
	};

	const handleWorkOrder = async (data) => {
		try {
			const token = localStorage.getItem("token");
			const id = localStorage.getItem("id");
			var workData = data;

			workData["owner"] = id;
			const headers = {
				Authorization: `Bearer ${token}`,
			};
			console.log(workData);
			const res = await axios.post(`http://localhost:2000/works/`, workData, {
				headers,
			});
			enqueueSnackbar("Placed work order successfully ", {
				variant: "success",
			});
		} catch (err) {
			if (String(err.response.status)[0] === "4") {
				enqueueSnackbar(err.response.data.message, { variant: "error" });
			} else {
				enqueueSnackbar(
					"Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
					{ variant: "error" },
				);
			}
			console.log(err);
		}
	};

	const handleGetAllWorksByUser = async () => {
		const token = localStorage.getItem("token");
		const id = localStorage.getItem("id");
		const header = {
			Authorization: `Bearer ${token}`,
		};
		axios
			.get("http://localhost:2000/works/user", {
				headers: header,
				params: {
					userId: `${id}`,
				},
			})
			.then((response) => {
				setCurrWorks(
					response.data.sort(
						(a, b) => new Date(b.createdAt) - new Date(a.createdAt),
					),
				);
				return response.data;
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleGetAllWorks = async () => {
		try {
			const token = localStorage.getItem("token");
			const id = localStorage.getItem("id");

			const headers = {
				Authorization: `Bearer ${token}`,
			};

			const res = await axios.get(`http://localhost:2000/works/`, {
				headers,
			});
			console.log(res.data);
			enqueueSnackbar("aLL WORKS GOT successfully ", {
				variant: "success",
			});
		} catch (err) {
			if (String(err.response.status)[0] === "4") {
				enqueueSnackbar(err.response.data.message, { variant: "error" });
			} else {
				enqueueSnackbar(
					"Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
					{ variant: "error" },
				);
			}
			console.log(err);
		}
	};

	return (
		<Routes>
			<Route path="/" element={<Landing handleLogout={handleLogout} />} />
			<Route path="/login" element={<Login handleLogin={handleLogin} />} />
			<Route path="/register" element={<Register />} />
			<Route
				path="/work"
				element={<WorkOrder handleWorkOrder={handleWorkOrder} />}
			/>
			<Route
				path="/profile"
				element={<Profile handleEditUser={handleEditUser} />}
			/>
			<Route
				path="/user-order"
				element={
					<UserOrders
						handleGetAllWorksByUser={handleGetAllWorksByUser}
						currWorks={currWorks}
					/>
				}
			/>
			<Route
				path="/progress"
				element={
					<Progress
						handleGetAllWorksByUser={handleGetAllWorksByUser}
						currWorks={currWorks}
						setCurrWorks={setCurrWorks}
					/>
				}
			/>
		</Routes>
	);
}

export default App;
