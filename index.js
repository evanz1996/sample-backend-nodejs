const employeeFunc = require('./app/function/employee.js');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/syr/users', (req, res) => {
  let result = employeeFunc.getEmployees();
  res.json(result);
});

app.get('/api/syr', (req, res) => {
  let result = employeeFunc.getEmployees();
  res.json('true');
});

app.get('/api/syr/validatephone/:phonenum', (req, res) => {
  let result = employeeFunc.validatePhoneNumber(req.params.phonenum);
  res.json(result);
});

app.get('/api/syr/validatepasscode/:passcode/:phonenum', (req, res) => {
  let result = employeeFunc.validatePassCode(
    req.params.passcode,
    req.params.phonenum
  );
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
