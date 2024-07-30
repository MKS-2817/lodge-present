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
app.use(express.urlencoded({extended: true}));


const updateExcelFile = async (data) => {
  const workbook = new ExcelJS.Workbook();
  let worksheet;

  Object.keys(data).forEach(key => {
    const column = worksheet.getColumn(key);
    let rowIndex = 1;
    while (column.values[rowIndex] !== undefined) {
      rowIndex++;
    }
    column.values[rowIndex] = data[key];
  });

  await workbook.xlsx.writeFile(FILE_PATH);
};

app.get('', (req, res) => {
  res.send('TR')
})

app.post('/update-excel', (req, res) => {
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
      'نام خانوادگی', 'کد ملی', 'شماره تلفن',
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

  res.send('Excel file updated successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


