var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Operación de lectura usando esta función
function readFormData(){
    var formData = {};
    formData["nombreC"] = document.getElementById("nombreC").value;
    formData["codigoE"] = document.getElementById("codigoE").value;
    formData["salario"] = document.getElementById("salario").value;
    formData["departamento"] = document.getElementById("departamento").value;
    return formData;
}

// Crear operación
function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.nombreC;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.codigoE;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.salario;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.departamento;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// Para restablecer los datos de entrada en la tabla
function resetForm(){
    document.getElementById('nombreC').value = '';
    document.getElementById('codigoE').value = '';
    document.getElementById('salario').value = '';
    document.getElementById('departamento').value = '';
    selectedRow = null;
}

// Para editar la operación
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('nombreC').value = selectedRow.cells[0].innerHTML;
    document.getElementById('codigoE').value = selectedRow.cells[1].innerHTML;
    document.getElementById('salario').value = selectedRow.cells[2].innerHTML;
    document.getElementById('departamento').value = selectedRow.cells[3].innerHTML;
}

// Para actualizar registros
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.nombreC;
    selectedRow.cells[1].innerHTML = formData.codigoE;
    selectedRow.cells[2].innerHTML = formData.salario;
    selectedRow.cells[3].innerHTML = formData.departamento;
}

// Para eliminar registros
function onDelete(td){
    if(confirm('¿Está seguro de que desea eliminar este registro?')){
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }    
}