// 1. Connection details
const connToken = "YOUR_CONNECTION_TOKEN";
const dbName = "SCHOOL-DB";
const relName = "STUDENT-TABLE";
const baseUrl = "http://api.login2explore.com:5577";
const apiEndPoint = "/api/iml";

// 2. Form initialize karna
function resetForm() {
    // Form clear
    // Buttons disable/enable
    // Roll No par focus
}

// 3. Roll No check karna
function checkRollNo() {
    // GET request
    // Agar record hai -> data fill + Update enable
    // Agar record nahi hai -> Save enable
}

// 4. Form validation
function validateData() {
    // Empty fields check
}

// 5. Save record
function saveData() {
    // PUT request
}

// 6. Update record
function updateData() {
    // UPDATE request
}

// 7. Button events
$("#saveBtn").click(saveData);
$("#updateBtn").click(updateData);
$("#resetBtn").click(resetForm);
$("#rollNo").blur(checkRollNo);

// 8. Page load
$(document).ready(function () {
    resetForm();
});
