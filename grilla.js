
let mostrarDatos = tablaDatos() 
var inputFiltro = document.querySelector('#filtro')
var datos;
var res;
var tr = document.querySelector('#tr')

function tablaDatos(){
    
    const xhttp = new XMLHttpRequest();
    

    xhttp.open('GET', 'datos.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            datos = JSON.parse(this.responseText)

            res = document.querySelector('#res')
            res.innerHTML = '';
            
            for(let dato of datos)
            
            res.innerHTML += `
            <tr>
                <td>${dato.id}</td>
                <td>${dato.name}</td>
                <td>${dato.username}</td>
                <td>${dato.email}</td>
                <td>${dato.address.street}</td>
                <td>${dato.address.suite}</td>
                <td>${dato.address.city}</td>
                <td>${dato.phone}</td>
                <td>${dato.website}</td>
                <td>${dato.company.name}</td>
                <td>${dato.company.bs}</td>
            </tr>          
            `           
            }

            var searchInput = document.getElementById('filtro')
            searchInput.addEventListener('keyup', (e) => {
                const q = e.target.value.toLowerCase();
                tr.querySelector("#td").textContent.toLowerCase().startsWith(q)
                ? null
                : (tr.style.display = "none")
                })
                }
        }
        



