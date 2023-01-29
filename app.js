

//variables
const formulario = document.querySelector('#formulario');
const boton = document.querySelector("#boton")
const colores = document.querySelector("#colores")

//eventos
formulario.addEventListener("submit", validarFormulario)
colores.addEventListener('submit', escogerColor)

//funciones
function validarFormulario(e) {
    e.preventDefault();
    //validar los campos del formulario
    const nombre = document.querySelector('#nombre').value;
    const materno = document.querySelector('#materno').value;
    const paterno = document.querySelector('#paterno').value;
    const departamento = document.querySelector('#departamento').value;
    const horas = document.querySelector('#horas').value;


    //mostar alerta
    if (nombre == '' || materno == '' || paterno == '' || horas <= 0) {
        mostrarAlerta();
    } else {
        let respuesta = 0;
        let subtotal = 0;
        let incremento = 0;

        //validar el programa
        console.log('validando');
        if (departamento == 'docente') {
            respuesta = horas * 100
        } else if (departamento == 'administrativo') {
            respuesta = horas * 80
        } else if (departamento == 'directivo') {
            respuesta = horas * 150
        }

        subtotal = respuesta;


        //descuentos
        const ISR = Math.floor(respuesta * 0.03);
        console.log('irs', ISR);
        const IVA = Math.floor(respuesta * 0.16);
        console.log('iva', IVA);



        //incremento
        if (horas >= 40) {
            incremento = respuesta * 0.10;
            respuesta = respuesta + incremento;
            subtotal = subtotal + incremento;
        }

        console.log('subtotal', subtotal);


        respuesta = respuesta - ISR - IVA;

        console.log(respuesta);

        alert(`
            ${nombre + ' ' + paterno + ' ' + materno}
            SubTotal: $${subtotal}
            ISR: $${ISR}
            IVA: $${IVA}
            ===================
            TOTAL A PAGAR: $${respuesta}
            ===================
        `)

        formulario.reset();
    }

    //funcion que haga el calculo

}


function mostrarAlerta() {
    const alerta = document.createElement('div');
    alerta.textContent = 'Complete todos los campos'
    alerta.className = 'alert alert-danger text-center mt-4 p-1';
    console.log(alerta);
    boton.appendChild(alerta)
    setTimeout(() => {
        alerta.remove();
    }, 2000)
}


function escogerColor(e) {
    e.preventDefault();
    let color = document.querySelector("#color").value;
    if (color == 1) {
        formulario.className = 'border rounded-3 p-3 shadow m-4'
    } else if (color == 2) {
        formulario.className = 'border rounded-3 p-3 shadow m-4 bg-danger'
    } else if (color == 3) {
        formulario.className = 'border rounded-3 p-3 shadow m-4 bg-success'
    } else if (color == 4) {
        formulario.className = 'border rounded-3 p-3 shadow m-4 bg-dark text-white'
    }
    console.log(color);
    console.log('click');
}