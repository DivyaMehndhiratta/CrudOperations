var selectedRow = null;

function onFormSubmit() {
  var formData = readFormData();
  if (Object.values(formData).filter(item => item).length === 3) {
    if (selectedRow == null)
      insertNewRecord(formData);
    else
      updateRecord(formData);
    resetForm();
  }
  return;
}

function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["empCode"] = document.getElementById("empCode").value;
  formData["salary"] = document.getElementById("salary").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("employeelist").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.empCode;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.salary;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button>
    <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("empCode").value = "";
  document.getElementById("salary").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
  document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.empCode;
  selectedRow.cells[2].innerHTML = formData.salary;
}
function onDelete(td) {
  row = td.parentElement.parentElement;
  document.getElementById("employeelist").deleteRow(row.rowIndex);
  resetForm();
}