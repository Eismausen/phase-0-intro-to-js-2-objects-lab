// Write your solution in this file!
const employee = {
    name: `Bob Bobberson`,
    streetAddress: `Our house, in the middle of our street`,

};

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    let newEmployee = {...employeeObj};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value;
    return employeeObj;
}

function deleteFromEmployeeByKey (employeeObj, key) {
    let newEmployee = {...employeeObj};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
    delete employeeObj[key];
    return employeeObj;
}