const listaRangos = ["Admin","Editor","Viewer"];
let contadorUsuarios = 0;
async function CargarDatosApi(){
    console.log("cargue los datos");
    const response =await fetch("http://localhost:3000/users")
    const data = await response.json();
    const contenedorUsuarios  = document.getElementById("users");
    contenedorUsuarios.innerHTML = "";
    for (const dato of data){

        contadorUsuarios++;
        contenedorUsuarios.innerHTML += `
        <li class="user" id="${dato.id}">
            <p class ="nombre">${dato.name}</p>
            <p class="role">${dato.role}</p>
            <p class="email">${dato.email}</p>
            <button class="promove">Promove</button>
            <button class="demote">Demote</button>
            <button class="borrar">Borrar</button>
        </li>`;
    }
    await CargarPostboton();
    await BottonesCambiarRangos();
    await BottonesEliminar();
}

async function CargarPostboton(){
    document.getElementById("add").addEventListener("click",async ()=>{
        const campoImputNombre = document.getElementById("name").value;
        const campoEmail = document.getElementById("email").value;
        if (campoImputNombre === "" || campoEmail === ""){
            alert("Por favor, agregue toda la info");
        }
        else {
            const campoRole = document.getElementById("role").value;
            console.log('voy a hacer el post');
            const objetoUsuario = {
                "id": contadorUsuarios + 1,
                "name": campoImputNombre,
                "role": campoRole,
                "email": campoEmail
            }
            await fetch("http://localhost:3000/users",{
                method: 'POST',
                body: JSON.stringify(objetoUsuario),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const contenedorUsuarios  = document.getElementById("users");
            contenedorUsuarios.innerHTML += `
        <li class="user" id="${objetoUsuario.id}">
            <p class ="nombre">${objetoUsuario.name}</p>
            <p class="role">${objetoUsuario.role}</p>
            <p class="email">${objetoUsuario.email}</p>
            <button class="promove">Promove</button>
            <button class="demote">Demote</button>
            <button class="borrar">Borrar</button>
        </li>`;
        }
    })
}

async function BottonesCambiarRangos(){
    const contenedorUsuarios  = document.getElementById("users");
    const listaElementos = contenedorUsuarios.children;
    for (const dato of listaElementos){
        const button = dato.querySelector(".promove");
        button.addEventListener("click", async ()=>{
            const id = dato.id;
            const Rango =dato.querySelector(".role").textContent
            let indice = listaRangos.indexOf(Rango);
            console.log(indice);
            if (indice > 0)
            {
                dato.querySelector(".role").textContent = listaRangos.at(indice -1);
                const roleNuevo =listaRangos.at(indice - 1);
                const idBuscar = Number(dato.id)
                await fetch(`http://localhost:3000/users/${idBuscar}`, {
                    method: 'PATCH',
                    body: JSON.stringify({ role: roleNuevo}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
            else{
                alert("No podes accender mas de admin")
            }
        })
        const buttonDe = dato.querySelector(".demote");
        buttonDe.addEventListener("click", async ()=>{
            const Rango =dato.querySelector(".role").textContent
            let indice = listaRangos.indexOf(Rango);
            console.log(indice);
            if (indice < 2)
            {
                dato.querySelector(".role").textContent = listaRangos.at(indice +1);
                const roleNuevo =listaRangos.at(indice + 1);
                const idBuscar = Number(dato.id)
                await fetch(`http://localhost:3000/users/${idBuscar}`, {
                    method: 'PATCH',
                    body: JSON.stringify({ role: roleNuevo}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
            else{
                alert("No pode bajar mas que eso")
            }
        })
        //Iva a hacer algo similar con el patch para lo de el de bajar de rango
    }
}


async function BottonesEliminar(){
    const contenedorUsuarios  = document.getElementById("users");
    const listaElementos = contenedorUsuarios.children;
    for (const dato of listaElementos){
        const buttonDe = dato.querySelector(".borrar");
        buttonDe.addEventListener("click", async ()=>{
            console.log(dato);
            dato.innerHTML = "";
            const idBuscar = Number(dato.id)
            await fetch(`http://localhost:3000/users/${idBuscar}`, {
                method: 'Delete',
            })
        })
        //Iva a hacer algo similar con el patch para lo de el de bajar de rango
    }
}

//Haría una funccion similar para elimanr en base a un delete con fecth en base a un botton único para cada usuarip