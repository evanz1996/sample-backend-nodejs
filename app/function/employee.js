const fs = require('fs');

function getEmployees() {
  const jobDto = fs.readFileSync('./app/data/main-data.json'); //use to test in index.js
  var jobListDto = JSON.parse(jobDto);
  console.log(jobListDto);
  return jobListDto;
}

function validatePhoneNumber(phoneNumber) {
  const users = fs.readFileSync('./app/data/main-data.json'); //use to test in index.js
  var userList = JSON.parse(users);
  let userFilter = userList.filter((i) => i.PhoneNumber == phoneNumber);
  if (userFilter[0] != null) {
    return true;
  }

  return false;
}

function validatePassCode(passCode, phoneNumber) {
  const users = fs.readFileSync('./app/data/main-data.json'); //use to test in index.js
  var userList = JSON.parse(users);
  let userFilter = userList.filter(
    (i) => i.PassCode == passCode && i.PhoneNumber == phoneNumber
  );
  if (userFilter[0] != null) {
    return userFilter[0];
  }

  return false;
}

function getSpecificEmployee(id) {
  const jobDto = fs.readFileSync('./app/data/main-data.json'); //use to test in index.js
  var jobListDto = JSON.parse(jobDto);
  let job = jobListDto.filter((i) => i.Id == id);
  console.log(job);
  return job[0];
}

// function postEmployee(employee) {
//     const employeeDto = fs.readFileSync('./app/data/main-data.json');//use to test in index.js
//     var empListDto = JSON.parse(jobDto);
//     console.log(empListDto.length);
//     if (empListDto.length == 0) {
//         employee.JobId = 1;
//     } else {
//         empListDto.sort((a, b) => (a.JobId < b.JobId) ? 1 : ((b.JobId < a.JobId) ? -1 : 0));
//         employee.JobId = +jobListDto[0].JobId + 1;
//     }

//     let newJob = [job];
//     let mergeData = [...jobListDto, ...newJob];

//     let finalData = JSON.stringify(mergeData);

//     fs.writeFile("./app/data/main-data.json", finalData, (err) => {
//         // Error checking
//         if (err) throw err;
//         console.log("New data added");
//     });

//     return "Success";
// }

// function putJob(jobVm, jobId) {
//     const jobDto = fs.readFileSync('./app/data/main-data.json');//use to test in index.js
//     var jobListDto = JSON.parse(jobDto);

//     let newJobList = jobListDto.filter(function (obj) {
//         return obj.JobId !== +jobId;
//     });

//     let jobParse = [jobVm];

//     let mergeData = [...newJobList, ...jobParse];

//     let finalData = JSON.stringify(mergeData);

//     fs.writeFile("./app/data/main-data.json", finalData, (err) => {
//         // Error checking
//         if (err) throw err;
//         console.log("Updated");
//     });

//     return "Success";
// }

// function purgeJob(jobId) {
//     const jobDto = fs.readFileSync('./app/data/main-data.json');//use to test in index.js
//     var jobListDto = JSON.parse(jobDto);

//     let newJobList = jobListDto.filter(function (obj) {
//         return obj.JobId !== +jobId;
//     });

//     let finalData = JSON.stringify(newJobList);

//     fs.writeFile("./app/data/main-data.json", finalData, (err) => {
//         // Error checking
//         if (err) throw err;
//         console.log("Updated");
//     });

//     return "Success";
// }

exports.getEmployees = getEmployees;
exports.validatePhoneNumber = validatePhoneNumber;
exports.validatePassCode = validatePassCode;
exports.getSpecificEmployee = getSpecificEmployee;

// exports.getJob = getJob;
// exports.postJob = postJob;
// exports.putJob = putJob;
// exports.purgeJob = purgeJob;
