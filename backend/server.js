const express = require('express');
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 1000;

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/passengers', (req, res) => {
  const jsonFilePath = path.join(__dirname, 'db.json');

  // Read existing JSON data if file exists
  if (fs.existsSync(jsonFilePath)) {
    const jsonDataContent = fs.readFileSync(jsonFilePath);
    const jsonData = JSON.parse(jsonDataContent);
    console.log('Existing JSON data:', jsonData);
    res.status(200).json(jsonData);
  } else {
    res.status(404).json([]);
  }
});


app.post('/create-passengers', (req, res) => {
  const inputData = req.body;
  console.log('Received data:', inputData);

  const filePath = path.join(__dirname, 'data.xlsx');
  console.log('File path:', filePath);

  let workbook;
  if (fs.existsSync(filePath)) {
    workbook = XLSX.readFile(filePath);
    console.log('Excel file read successfully');
  } else {
    workbook = XLSX.utils.book_new();
    console.log('New Excel file created');
  }

  const sheetName = 'Sheet1';
  let worksheet = workbook.Sheets[sheetName];
  if (!worksheet) {
    worksheet = XLSX.utils.aoa_to_sheet([[
      'ورود', 'خروج', 'نام',
      'نام خانوادگی', 'کد ملی','تاریخ تولد', 'شماره تلفن',
      'شهر اصلات', 'شغل', 'تحصیلات',
      'علایق', 'اتاق رزرو'
    ]]);
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    console.log('New sheet created');
  }

  const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
  console.log('Existing sheet data:', sheetData);

  sheetData.push([
    inputData.entrance,
    inputData.left,
    inputData.name,
    inputData.lastName,
    inputData.nationalCode,
    inputData.birthday,
    inputData.phoneNumber,
    inputData.liveCity,
    inputData.job,
    inputData.education,
    inputData.favorite,
    inputData.reservationRoom
  ]);
  console.log('Data appended to sheet');

  // Convert JSON back to worksheet
  const newWorksheet = XLSX.utils.aoa_to_sheet(sheetData);
  workbook.Sheets[sheetName] = newWorksheet;

  XLSX.writeFile(workbook, filePath);
  console.log('Excel file updated and written to disk');

  ////////////////////////////////////////Append to JSON/////////////////////////////////////

  const jsonFilePath = path.join(__dirname, 'db.json');
  let jsonData = [];

  // Read existing JSON data if file exists
  if (fs.existsSync(jsonFilePath)) {
    const jsonDataContent = fs.readFileSync(jsonFilePath);
    jsonData = JSON.parse(jsonDataContent);
    console.log('Existing JSON data:', jsonData);
  }

  // Append new data to JSON array
  jsonData.push(inputData);

  // Write updated JSON data back to file
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
  console.log('JSON file updated and written to disk');

  ////////////////////////////////////////Append to JSON/////////////////////////////////////

  res.status(201).send('Excel file and JSON file updated successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


