const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const uuid = require("uuid").v4;
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

const empdata = fs.readFileSync("./data/employess.json", "utf-8");

app.get("/", (req, res) => {
  res.send("hi iam server ");
});

app.get("/getAllEmployees", async (req, res) => {
  try {
    fs.readFile("./data/employess.json", "utf-8", (err, data) => {
      res.status(200).json({ message: "fetched successfully", data });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server ");
  }
});

app.get("/getEmployee/:empId", (req, res) => {
  try {
    fs.readFile("./data/employess.json", "utf-8", (err, data) => {
      const { empId } = req.params;
      const getEmp = JSON.parse(data).find((emp) => emp.employee_Id == empId);
      console.log(getEmp);
      return res.json({
        message: "fetched successfully",
        data: getEmp,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server ");
  }
});

app.post("/createEmployee", (req, res) => {
  try {
    const results = JSON.parse(empdata);
    const { name, role, salary } = req.body;
    const data = {
      employee_Id: uuid(),
      name: name,
      role: role,
      salary: salary,
    };
    results.push(data);

    fs.writeFile("./data/employess.json", JSON.stringify(results), (err) => {
      if (err) {
        console.log(err);
      } else {
        res.status(201).json({message:"data added successfully"});
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message:"internal server "});
  }
});

app.patch("/updateEmployee/:empId", (req, res) => {
  try {
    const { empId } = req.params;
    const { name, role, salary } = req.body;
    const updatedEmp = JSON.parse(empdata).map((emp) => {
      if (emp.employee_Id == empId) {
        return {
          ...emp,
          name: name || emp.name,
          role: role || emp.role,
          salary: salary || emp.salary,
        };
      }
      return emp;
    });
    fs.writeFile("./data/employess.json", JSON.stringify(updatedEmp), (err) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.json({ message: "updated successfully", data: updatedEmp });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server ");
  }
});

app.delete("/deleteEmployee/:empId", (req, res) => {
  const data = JSON.parse(empdata);
  const { empId } = req.params;
  const check = data.some((emp) => empId == emp.employee_Id);
  console.log(check);
  if (check) {
    const updateData = data.filter((emp) => emp.employee_Id != empId);
    console.log(updateData);
    fs.writeFile("./data/employess.json", JSON.stringify(updateData), (err) => {
      if (err) {
        res.status(400).send("something went wrong");
      } else {
        return res.status(204).json({
          message: "deleted successfully",
        });
      }
    });
  } else {
    res.status(404).send("employee not found");
  }
});

app.listen(3000, () => {
  console.log("server started");
});
