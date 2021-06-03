require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const server = express();

server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, "client/build")));

server.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

console.log(process.env.USER); // env USER=gabriel
console.log(process.env.SHELL); // env SHELL=/bin/zhs

if (process.env.NODE_ENV === "production") {
	console.log("this means this code is deployed");
}

const PORT = process.env.PORT || 5000;

console.log("port is -> ", PORT);

server.get("/api", (req, res) => {
	res.json({ message: `${process.env.COHORT} ROCKS` });
});
server.use((req, res) => {
	res.status(404).json({ messge: "Great its working" });
});
server.listen(PORT, () => {
	console.log(`listening on ${PORT}`);
});
