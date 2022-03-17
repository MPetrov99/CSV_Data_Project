// async function getData() {
//     const response = await fetch('data.csv');
//     const data = await response.text();
//     // console.log(data);

//     const rows = data.split('\n').slice(1);
//     rows.forEach(element => {
//         const row = element.split(',');
//         const employeeID = row[0];
//         const projectID = row[1];
//         const startDate = row[2];
//         const endData = row[3];

//         console.log(employeeID, projectID, startDate, endData);
//     });
// }

// getData();

const myForm = document.getElementById('myForm');
const csvFile = document.getElementById('csvFile');

function csvToArray(str, delimiter = ",") {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const arr = rows.map(function(row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function(object, header, index) {
            object[header] = values[index];
            return object;
        }, {});
        return el;
    });
    console.log(arr);
    return arr;
}

myForm.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Data Submitted!");

    const input = csvFile.files[0];
    // console.log(input);

    const reader = new FileReader();

    reader.onload = function(e) {
        const text = e.target.result;
        const data = csvToArray(text);

        document.write(JSON.stringify(data));
        // console.log(e.target.result);
        // document.write(text);
    };
    reader.readAsText(input);
});

// const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
// const setDate = YDM => {
//     let [Y, M, D] = YDM.split('-').map(Number);
//     return new Date(Y, --M, D)
// };

// // console.log(oneDay, setDate);

// const projectEmployees = arr.reduce((r, [EmployeeID, ProjectID, StartDate, EndDate]) => {
//     let stD = setDate(StartDate);
//     let enD = EndDate - setDate(EndDate) : new Date();

// }, {})