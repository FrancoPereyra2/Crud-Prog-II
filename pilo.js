//validar los datos
function    ValidateForm(){
    
    let name = document.getElementById('inputName').value;
    let email = document.getElementById('inputEmail').value;
    let telefono = document.getElementById('ImputNumero').value;
    let Ingreso = document.getElementById('ImputIngreso').value;
    let Salida = document.getElementById('ImputSalida').value;
    
    if(name == "")
    {
        alert('Debe agregar un nombre');
        return false;
    }
    
    if (email == "") {
        alert('El campo correo es requerido');
        return false;
    }else if (!email.includes('@')){
        alert('El correo no es valido');
        return false;
    }

    if (telefono == "") {
        alert('El campo telefono es requerido');
        return false;
    }

    if (Ingreso == "") {
        alert('Debe Agregar una Fecha de Ingreso');
        return false;
    }

    if (Salida == "") {
        alert('Debe Agregar una Fecha de Salida');
        return false;
    }

    return true;
}

//guardar los datos
function ReadData(){

    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    var html = "";

    listPeople.forEach(function (element, index){
        html += "<tr>";
        html += "<td>"+ element.name + "</td>";
        html += "<td>"+ element.email + "</td>";
        html += "<td>"+ element.telefono + "</td>";
        html += "<td>"+ element.Ingreso + "</td>";
        html += "<td>"+ element.Salida + "</td>";
        html += '<td><button onclick="deleteData('+ index +')" class="btn btn-danger">Eliminar Dato</button> <button onclick="editData('+ index +')" class="btn btn-warning">Editar Dato</button>';
        html += "</tr>";

    }) ;

    document.querySelector('#tableData tbody').innerHTML= html;
}

document.onload = ReadData();

function AddData(){
    if (ValidateForm() == true) {
        let name = document.getElementById('inputName').value;
        let email = document.getElementById('inputEmail').value;
        let telefono = document.getElementById('ImputNumero').value;
        let Ingreso = document.getElementById('ImputIngreso').value;
        let Salida = document.getElementById('ImputSalida').value;

        var listPeople;

        if (localStorage.getItem('listPeople') == null) {
            listPeople = [];
        } else {
            listPeople = JSON.parse(localStorage.getItem('listPeople'));
        }

        listPeople.push({
            name: name,
            email: email,
            telefono: telefono,
            Ingreso: Ingreso,
            Salida: Salida
        });

        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        ReadData();

        // Limpiar los campos correctamente
        document.getElementById('inputName').value = "";
        document.getElementById('inputEmail').value = "";
        document.getElementById('ImputNumero').value = "";
        document.getElementById('ImputIngreso').value = "";
        document.getElementById('ImputSalida').value = "";
    }
}

function deleteData(indexClientes){
    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    listPeople.splice(indexClientes, 1);
    localStorage.setItem('listPeople', JSON.stringify(listPeople));

    ReadData();
}

function editData(indexClientes){

    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    }else{
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    document.getElementById('inputName').value = listPeople[indexClientes].name;
    document.getElementById('inputEmail').value = listPeople[indexClientes].email;
    document.getElementById('ImputNumero').value = listPeople[indexClientes].telefono;
    document.getElementById('ImputIngreso').value = listPeople[indexClientes].Ingreso;
    document.getElementById('ImputSalida').value = listPeople[indexClientes].Salida;


    document.querySelector('#BtnUpDate').onclick = function () {
        if (ValidateForm() == true) {
            listPeople[indexClientes].name = document.getElementById('inputName').value;
            listPeople[indexClientes].email = document.getElementById('inputEmail').value;
            listPeople[indexClientes].telefono = document.getElementById('ImputNumero').value; // Corregido de 'Numero' a 'telefono'
            listPeople[indexClientes].Ingreso = document.getElementById('ImputIngreso').value;
            listPeople[indexClientes].Salida = document.getElementById('ImputSalida').value;
    
            localStorage.setItem('listPeople', JSON.stringify(listPeople));
            ReadData();
    
            document.getElementById('inputName').value = ""; // Corregido 'ocument' a 'document'
            document.getElementById('inputEmail').value = "";
            document.getElementById('ImputNumero').value = ""; // Corregido 'ddocument' a 'document'
            document.getElementById('ImputIngreso').value = "";
            document.getElementById('ImputSalida').value = "";
    
            document.getElementById('btnAdd').style.display = 'block';
            document.getElementById('btnUpdate').style.display = 'none';
        }
    };
}
