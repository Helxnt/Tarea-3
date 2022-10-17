const URL = 'http://www.raydelto.org/agenda.php';

let form = document.getElementById('form').addEventListener('submit', sendContact);
getContacts(URL);

function Data(data, url) {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    }).then((r) => {
        alert("El contacto ha sido agregado correctamente");
        location.reload();
    }).catch((e) => {
        console.log(`Error: ${e}`);
    });
}

function getContacts(url){

    fetch(url)
    .then((contact)=>{
        return contact.json();
    })
    .then((data)=>{
        let table = document.getElementById('table');
        data.forEach(e => {
            let tr = document.createElement('tr');
            let nombre = document.createElement('td');
            let apellido = document.createElement('td');
            let telefono = document.createElement('td');
            nombre.textContent = e.nombre;
            apellido.textContent = e.apellido;
            telefono.textContent = e.telefono;
            tr.appendChild(nombre);
            tr.appendChild(apellido);
            tr.appendChild(telefono);
            table.appendChild(tr);
        })

    }).catch((e)=>{
        alert("Ha ocurrido un error al cargar contactos")
    });
}

function sendContact(e){
    e.preventDefault();
    
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let telefono = document.getElementById('telefono').value;

    if(nombre != '' && apellido != '' && telefono != ''){
        let data = {
            nombre: nombre,
            apellido: apellido,
            telefono: telefono
        };
        Data(data, URL);
    } else {
        alert('Los campos están vacíos');
    }
}

