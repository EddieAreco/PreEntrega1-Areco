// Inicializo el stock de productos por fuera de la funcion, si fuera dentro, el stock siempre empezaria desde 10 y también el total de compra para después poder dar un valor de compra total cuando se haga mas de 1 compra

let stockFernet = 10;
let stockCoca = 10;
let stockHeineken = 10;
let totalCompra = 0;

function compra() {

    // Inicializo otros valores que se van a usar en los métodos de pago.
    
    let descuento = 0.3;
    let recargaCredito = 0.2;
    let salir = false; //Defino la variable salir como false, va a actuar como variable de control para finalizar el bucle

    // Utilizo un bucle for para permitir al usuario realizar o simular hasta 30 compras.

    for (let i = 0; i < 30; i++) {

        // Solicito al usuario que seleccione un producto.

        let producto = prompt("Qué producto elige: Fernet, Coca o Cerveza Heineken?").toLowerCase();
        let precio;

        //Defino el stock actual para después reemplazarla por el stock de cada producto.
        let stockActual;

        // Verifico qué producto seleccionó, si hay suficiente stock y defino el precio de cada uno.

        if (producto === "fernet") {

            stockActual = stockFernet;
            precio = 2500;

        } else if (producto === "coca") {

            stockActual = stockCoca;
            precio = 900;

        } else if (producto === "cerveza heineken") {

            stockActual = stockHeineken;
            precio = 800;

        } else {

            alert("Ingresó una opción no válida.");
            i--; // Resto 1 al contador para repetir la selección de producto.
            continue;
        }

        // Solicito al usuario que ingrese el método de pago.
        let metodoDePago = prompt("Va a pagar en efectivo, débito o crédito?").toLowerCase();

        // Verifico el método de pago y calculo el precio final.
        if (metodoDePago === "efectivo") {

            precio = precio - (precio * descuento);
            alert(`Pagando en efectivo, el precio final de ${producto} es $${precio} pesos`);

        } else if (metodoDePago === "debito") {

            alert(`Pagando con débito, el precio final de ${producto} es $${precio} pesos`);

        } else if (metodoDePago === "credito") {

            precio = precio + (precio * recargaCredito);
            alert(`Pagando con crédito, el precio final de ${producto} es $${precio} pesos`);

        } else {

            alert("Ingresó una opción no válida.");
            i--; // Resto 1 al contador para repetir la selección del mètodo de pago.
            continue;
        }

        // Solicito al usuario que ingrese cuantos productos quiere comprar.

        let cantidadComprada = Number(prompt(`¿Cuántas unidades de ${producto} quiere comprar?`));

        //Voy a hacer un condicional para que si no hay stock, la compra no se pueda realizar.
        if (cantidadComprada > stockActual) {

            alert("No se puede hacer la compra, no hay suficiente stock");
            i--; // Resto 1 al contador para repetir cuantos productos quiere comprar.
            continue;
        } else {

            // Calculo el precio final y resto el stock del producto seleccionado.

            let precioFinal = precio * cantidadComprada;
            alert(`El precio final a pagar es: $${precioFinal} pesos`);

            totalCompra += precioFinal;

            // Actualizamos el stock del producto seleccionado.

            switch (producto) {
                case "fernet":
                    stockFernet -= cantidadComprada; //Resto el stock
                    break;
                case "coca":
                    stockCoca -= cantidadComprada; //Resto el stock
                    break;
                case "cerveza heineken":
                    stockHeineken -= cantidadComprada; //Resto el stock
                    break;
            }
        }

        //Muestro el stock que queda de cada producto para que el usuario sepa cuanto es el limite que puede comprar en cada producto

        alert(`El stock que queda de fernet es: ${stockFernet}`);
        alert(`El stock que queda de coca es: ${stockCoca}`);
        alert(`El stock que queda de cerveza heineken es: ${stockHeineken}`);

        // Procedo a preguntar al cliente si quiere hacer otra compra

        let preguntaRecompra = prompt("¿Quieres realizar otra compra? (si/no)").toLowerCase();

        if (preguntaRecompra === "no") {
            salir = true; // Defino la variable de control como true para salir del bucle y finalizar la compra
            break;
        } else if (preguntaRecompra !== "si") {
            alert("Ingresó una opción no válida");
            continue; //Si se coloca una respuesta distinta a si o no, se vuelve al inicio de la funcion compra()
        }
    }

    if (salir) {
        alert(`Gracias por su compra!! :D, el total a pagar es: $${totalCompra} pesos`); //Al darse la variable salir como true, ya le muestro al cliente el total que debe pagar, y asi terminamos el proceso
    }

}

compra();
