const fs = require('fs');

function logoutUser(token) {
  console.log('tokenfront', token);
  var tokenLogoutAPI = {
    refresh_token:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJleHAiOjE2NDAwMjA1ODZ9.yGQsymwwDpvm9DAQpRq8ung2qQEHKEJHJvAEjBTIsgiTzf2UAtyOWNXXfehAUvEObOCjRrwUwjoqZvr325iLPOPnMOf0ye4UufkAYMAcehzaODRYsDqPwY3uXcJa8APRGawmbhZy4Aw0jZhlflc_gX63G35WHIL-MknxfPsFyBlc5xg6pe92f9vM-2NL59dvAzqKEfhzn7agoXilJMrnPva4iXCfloP9Q_Uz_NPv1egJAZFnIPk0BZePHk3UiahoiL_WxwS0jVSVcPIPfDYT1hNDtOdDRVmCnwH6YdBrOA7Q3uLyWu-t-jQ9BFzk-iwBG1z9LosPaBOWLUfAsHhMp5homzI8kIFXjAtjOMahg22jtO7fMK94O5dz5vn2OWKyh0Li8kwW7QpAG5JfRQCxXvcxyneygVRiVwVPOPw82k1Do8DXAAc1rYQqR-_wsN0PlJ_i17efXxa6M5xnKY0rWk7E_S1r9FEbqbzrHPGH4ejkCN_RmPTIRFZ5nc41Lmh8h4aelTd1JaNv1kCMMDBrIhuFXGCO4n4CHvlAMre1ZweL3DhWrE8qqwbh2Z4_n0_kSiR6n9xtVfqSg91oovkCKF8HTGngdmFya1qIdFJWKngQIo1ncPa1KI3_v2vj-pWgDfvethGDj2FnDxrLpPpo0ePkCtobz76EKVU9eZD3LZs',
    // refresh_token: 'a',
  };
  console.log('api token', tokenLogoutAPI.refresh_token);
  if (tokenLogoutAPI.refresh_token == token) {
    return 'Success';
  } else {
    return 'Error';
  }
}

function getEmployees() {
  const jobDto = fs.readFileSync('./app/data/main-data.json'); //use to test in index.js
  var jobListDto = JSON.parse(jobDto);
  console.log(jobListDto);
  return jobListDto;
}

function validatePhoneNumber(phoneNumber) {
  const users = fs.readFileSync('./app/data/main-data.json'); //use to test in index.js
  var userList = JSON.parse(users);
  let userFilter = userList.filter((i) => i.user.phone_number == phoneNumber);
  if (userFilter[0] != null) {
    return '';
  }
  return {
    error: 'no user exists with given phone number',
  };
}

function validatePassCode(phoneNumber, passCode) {
  console.log('phonen', phoneNumber);
  console.log('pass', passCode);
  var dummyToken = {
    refresh_token:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE2NDM2MzE0NTF9.Pg8UwhoqG_SGx7t084UW_r-i0GOjouun2D04dCjc669iFhnOMfdkC4HqaKpY3kKMeBXsP8XFOTBnut0qxNIePkpvNG5v82s5om-PiAnKHxaZsBGqk5o3sBu68zJQu2_X8Lu4NMcfIQYUdpChFD7i5_1QRcNT0-FhE_vd-NJv6FabwJPTP53mMCMX7uoX7rSe71XwM-Yht2rMpBYz1gc_cLuj49mjEjUmXnazU6Jum-pdGTIhi8rRyZ4ZxwfOWV6gGZuJZRCDjNMeFVLUlRHhnZ4Nw-PlNFOyAqAatJfGOT6z_xwN0PV6_jRvsb9Zy42v4CDl7rPG5ZYMosI0j-YLjNh13TN_SVcxenRGPzESziBhgDQM5ojDK2oyZ3ztilGAVTEYvNp5n0XltWCVvoWMjGo55tQnTTX2A4QwT8YQn35jlwZVk22FhDXlEmG2ODLEa9XQuHwVGWPurj9oTQHWqfXwNY3aAbQ4EL1eYEGPsv3LNNGu3eknOc5SDFR6Ceh7P4NWFnjbRJRtiLpLX1n77c7okkKRciEF-fBZx4dRB4w1HH-IAempcvXbXPoGzpOGc9UOrY3mdnv97AQI3E7lNMftC9OuJRrjYdc1iCWy6PktHos7Or_hdVEN5pWppiFqw-GGcbH3Ir5RIvO5kWebS4_OXx4t9DijULjVHSpTyqU',
    uuid: 'c340839d-78c7-473e-8a68-7b216ef2e794',
  };
  const users = fs.readFileSync('./app/data/main-data.json'); //use to test in index.js
  var userList = JSON.parse(users);
  let userFilter = userList.filter(
    (i) => i.user.pass_code == passCode && i.user.phone_number == phoneNumber
  );
  console.log(userFilter);
  if (userFilter[0] != null) {
    console.log('rf', dummyToken.refresh_token, userFilter[0].user.uuid);
    return {
      refresh_token: dummyToken.refresh_token,
      uuid: userFilter[0].user.uuid,
    };
  }

  return {
    error: 'Internal Server Error',
  };
}

function validatePassCode1(passCode, phoneNumber) {
  const users = fs.readFileSync('./app/data/main-data.json'); //use to test in index.js
  var userList = JSON.parse(users);
  let userFilter = userList.filter(
    (i) => i.PassCode == passCode && i.PhoneNumber == phoneNumber
  );
  if (userFilter[0] != null) {
    return userFilter[0];
  }

  return {
    error: 'Internal Server Error',
  };
}

function getSpecificEmployee(id) {
  console.log(id);
  const jobDto = fs.readFileSync('./app/data/main-data.json'); //use to test in index.js
  var jobListDto = JSON.parse(jobDto);
  let job = jobListDto.filter((i) => i.user.uuid == id);

  console.log(jobListDto);

  return job[0];
}

function updateuser(isesave, Id) {
  const jobDto = fs.readFileSync('./app/data/main-data.json'); //use to test in index.js
  var jobListDto = JSON.parse(jobDto);
  let newJobList = jobListDto.filter(function (obj) {
    console.log('param', Id);
    // console.log(Id);
    console.log(obj.id);
    return obj.user.uuid != Id;
  });
  console.log('new', newJobList);

  let jobParse = [isesave];
  let mergeData = [...newJobList, ...jobParse];
  let finalData = JSON.stringify(mergeData);
  fs.writeFile('./app/data/main-data.json', finalData, (err) => {
    // Error checking
    if (err) throw err;
    console.log('Updated');
  });

  return 'Success';
}

function updateLoggedInUser(isesave, Id) {
  const jobDto = fs.readFileSync('./app/data/main-data.json'); //use to test in index.js
  var jobListDto = JSON.parse(jobDto);
  let newJobList = jobListDto.filter(function (obj) {
    console.log('param', Id);
    // console.log(Id);
    console.log(obj.id);
    return obj.user.uuid != Id;
  });

  let jobParse = [isesave];
  let mergeData = [...newJobList, ...jobParse];
  let finalData = JSON.stringify(mergeData);
  fs.writeFile('./app/data/main-data.json', finalData, (err) => {
    // Error checking
    if (err) throw err;
    console.log('Updated');
  });

  return 'Success';
}

// CREATE
function postEmployee(employee) {
  console.log('employee', employee.length);
  const employeeDto = fs.readFileSync('./app/data/main-data.json'); //use to test in index.js
  var empListDto = JSON.parse(employeeDto);
  console.log(empListDto.length);
  if (Object.keys(employee).length != 0) {
    let newJob = [employee];
    let mergeData = [...empListDto, ...newJob];

    let finalData = JSON.stringify(mergeData);

    fs.writeFile('./app/data/main-data.json', finalData, (err) => {
      // Error checking
      if (err) throw err;
      console.log('New data added');
    });

    return 'Success';
  }
}

// Update FUNCTION

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
exports.updateuser = updateuser;
exports.postEmployee = postEmployee;
exports.validatePassCode1 = validatePassCode1;
exports.updateLoggedInUser = updateLoggedInUser;
exports.logoutUser = logoutUser;

// exports.getJob = getJob;
// exports.postJob = postJob;
// exports.putJob = putJob;
// exports.purgeJob = purgeJob;
