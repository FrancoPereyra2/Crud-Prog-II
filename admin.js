function ValidateForm(){
    
    let sabanas = document.getElementById('inputSabanas').value;
    let habitaciones = document.getElementById('inputHabt').value;
    let almohadas = document.getElementById('inputAlm').value;
    let batas = document.getElementById('inputBatas').value;
    
    
    if(sabanas == "")
    {
        alert('Debe agregar un nombre');
        return false;
    }
    
    if (habitaciones == "") {
        alert('El campo correo es requerido');
        return false;
    }

    if (almohadas == "") {
        alert('El campo telefono es requerido');
        return false;
    }

    if (batas == "") {
        alert('Debe Agregar una Fecha de Ingreso');
        return false;
    }

    return true;
}
function ReadData(){

    let listadmin;

    if (localStorage.getItem('listadmin') == null) {
        listadmin = [];
    }else{
        listadmin = JSON.parse(localStorage.getItem('listadmin'));
    }

    var html = "";

    listadmin.forEach(function (element, indexAdmin){
        html += "<tr>";
        html += "<td>"+ element.sabanas + "</td>";
        html += "<td>"+ element.habitaciones + "</td>";
        html += "<td>"+ element.almohadas + "</td>";
        html += "<td>"+ element.batas + "</td>";
        html += '<td><button onclick="deleteData('+ indexAdmin +')" class="btn btn-danger">Eliminar Dato</button> <button onclick="editData('+ indexAdmin +')" class="btn btn-warning">Editar Dato</button>';
        html += "</tr>";

    }) ;

    document.querySelector('#tabledata tbody').innerHTML= html;
}
document.onload = ReadData();
function AddData(){
    if (ValidateForm() == true) {
        let sabanas = document.getElementById('inputSabanas').value;
        let habitaciones = document.getElementById('inputHabt').value;
        let almohadas = document.getElementById('inputAlm').value;
        let batas = document.getElementById('inputBatas').value;

        var listadmin;

        if (localStorage.getItem('listadmin') == null) {
            listadmin =[];
        }else{
            listadmin = JSON.parse(localStorage.getItem('listadmin'));
        }

        listadmin.push({
            sabanas: sabanas,
            habitaciones: habitaciones,
            almohadas: almohadas,
            batas: batas
        });

        localStorage.setItem('listadmin', JSON.stringify(listadmin));

        ReadData();

        document.getElementById('inputSabanas').value;
        document.getElementById('inputHabt').value;
        document.getElementById('inputAlm').value;
        document.getElementById('inputBatas').value;
    }
}
function deleteData(indexAdmin){
    let listadmin;

    if (localStorage.getItem('listadmin') == null) {
        listadmin = [];
    }else{
        listadmin = JSON.parse(localStorage.getItem('listadmin'));
    }

    listadmin.splice(indexAdmin, 1);
    localStorage.setItem('listadmin', JSON.stringify(listadmin));

    ReadData();
}
function editData(indexAdmin){

    let listadmin;

    if (localStorage.getItem('listadmin') == null) {
        listadmin = [];
    }else{
        listadmin = JSON.parse(localStorage.getItem('listadmin'));
    }

    document.getElementById('inputSabanas').value = listadmin[indexAdmin].sabanas;
    document.getElementById('inputHabt').value = listadmin[indexAdmin].habitaciones;
    document.getElementById('inputAlm').value = listadmin[indexAdmin].almohadas;
    document.getElementById('inputBatas').value = listadmin[indexAdmin].batas;


    document.querySelector('#BtnUpDate').onclick = function () {
        if (ValidateForm() == true) {
            listadmin[indexAdmin].sabanas = document.getElementById('inputSabanas').value;
            listadmin[indexAdmin].habitaciones = document.getElementById('inputHabt').value;
            listadmin[indexAdmin].almohadas = document.getElementById('inputAlm').value;
            listadmin[indexAdmin].batas = document.getElementById('inputBatas').value;

            localStorage.setItem('listadmin', JSON.stringify(listadmin));
            ReadData();

            document.getElementById('inputSabanas').value = "";
            document.getElementById('inputHabt').value = "";
            document.getElementById('ImputNumero').value = "";
            document.getElementById('inputAlm').value = "";

            document.getElementById('btnAdd').style.display = 'block';
            document.getElementById('btnUpdate').style.display = 'none';
        }
    };
}