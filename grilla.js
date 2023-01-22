
peticionXMLHTTP(); // Genera la tabla inicial con los datos del JSON

// Configura la modificacion de la tabla al pulsar la tecla
document.getElementById('filtro').addEventListener("keyup", (e) => {
    let busqueda = e.target.value.toLowerCase();
    let trs = document.querySelectorAll("tr"); // cambiar "tr" por ".persona" para no filtrar los titulos
    for (tr of trs)
    {
        if (tr.innerHTML.toLowerCase().includes(busqueda)) tr.style.display = "initial";
        else tr.style.display = "none";
    }
});

function peticionXMLHTTP() // Realiza la peticion de los datos JSON
{
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200)
            renderizarTabla(JSON.parse(xhttp.responseText));
    };
    xhttp.open("GET", "datos.json", true);
    xhttp.send();
}

function renderizarTabla(datos) // Renderiza la tabla completa una sola vez
{
    let tabla = "";
    for (let dato of datos)
    {
        tabla += `
        <tr class="tr persona">
            <td class="td">${dato.id}</td>
            <td class="td">${dato.name}</td>
            <td class="td">${dato.username}</td>
            <td class="td">${dato.email}</td>
            <td class="td">${dato.address.street}</td>
            <td class="td">${dato.address.suite}</td>
            <td class="td">${dato.address.city}</td>
            <td class="td">${dato.phone}</td>
            <td class="td">${dato.website}</td>
            <td class="td">${dato.company.name}</td>
            <td class="td">${dato.company.bs}</td>
        </tr>`;
    }
    document.getElementById("res").innerHTML = tabla;
    console.log(document.getElementById("res").innerHTML);
}