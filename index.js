//packages
const express = require("express");

//internal code
const { getJobs } = require("./services");
const server = express();

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server listening port on ${PORT}`);
});

// const jobs = [
//   { title: "Director of Ops", salary: "100000", company: "Amazon" },
//   { title: "SDE", salary: "130000", company: "Audible" },
// ];

//Get /jobs
server.get("/jobs", (req, res) => {
  const { tech } = req.query;

  getJobs(tech).then((jobs) => res.send(jobs));

  // res.send(jobs);
});

//GET
// server.get("/", (req, res) => {
//   console.log("home route");
// });

// //GET
// server.get("/", (req, res) => {
//   console.log("home router");
// });

// getJobs("Python").then((pythonJobs) => console.log(pythonJobs[0]));
// getJobs("Java").then((javaJobs) => console.log(javaJobs[0]));

// const pythonJobs = await getJobs("Python")
// const javaJobs = await getJobs("Java")

// console.log(pythonJobs[0])

// console.log(pythonJobs[0])
