const employeeFunc = require('./app/function/employee.js');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

// Create Users
app.post('/v1/users/logout', (req, res) => {
  console.log('req body', req.body);
  let result = employeeFunc.logoutUser(req.body.refresh_token);
  console.log(result);
  res.json(result);
});

// Create Users
app.post('/api/syr/create', (req, res) => {
  console.log(req.body);
  let result = employeeFunc.postEmployee(req.body);
  console.log(result);
  res.json(result);
});
// Update Loggin
app.put('/api/syr/updateLoggedInUser/:id', (req, res) => {
  console.log(req.body);
  let result = employeeFunc.updateLoggedInUser(req.body, req.params.id);
  console.log(result);
  res.json(result);
});
// Update Users
app.put('/api/syr/updateuser/:id', (req, res) => {
  let result = employeeFunc.updateuser(req.body, req.params.id);
  res.json(result);
});
app.get('/v1/users/:id', (req, res) => {
  let result = employeeFunc.getSpecificEmployee(req.params.id);
  res.json(result);
});

app.get('/v1/users/', (req, res) => {
  console.log('im here, v1/users/');
  let result = employeeFunc.getEmployees();
  res.json(result);
});

app.get('/api/syr', (req, res) => {
  let result = employeeFunc.getEmployees();
  res.json('true');
});

// app.get('/v1/users/phone_login/:phonenum', (req, res) => {
//   let result = employeeFunc.validatePhoneNumber(req.params.phonenum);
//   res.json(result);
// });

app.post('/v1/users/phone_login', (req, res) => {
  console.log(req.body.phoneNumber);
  let result = employeeFunc.validatePhoneNumber(req.body.phoneNumber);
  res.json(result);
});
// app.get('/v1/users/passcode/', (req, res) => {
//   let result = employeeFunc.validatePassCode(
//     req.body.phonenum,
//     req.body.passcode
//   );
//   res.json(result);
// });

app.post('/v1/users/passcode/', (req, res) => {
  console.log(req);
  let result = employeeFunc.validatePassCode(
    req.body.phoneNumber,
    req.body.passCode
  );
  res.json(result);
});

app.post('/api/syr/validate', (req, res) => {
  console.log(req.body);

  let result = employeeFunc.validatePassCode1(
    req.body.passCode,
    req.body.phoneNum
  );

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
