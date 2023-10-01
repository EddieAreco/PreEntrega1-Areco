
function compra() {

    // Inicializo el stock de productos y otros valores.
    let stockFernet = 10;
    let stockCoca = 10;
    let stockHeineken = 10;
    let descuento = 0.3;
    let recargaCredito = 0.2;

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

            // Actualizamos el stock del producto seleccionado.

            // if (producto === "fernet") {
            //     stockFernet -= cantidadComprada;
            // } else if (producto === "coca") {
            //     stockCoca -= cantidadComprada;
            // } else if (producto === "cerveza heineken") {
            //     stockHeineken -= cantidadComprada;
            // } else {

            // }

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
    }

    alert("Gracias por su compra!! :D");
}

compra();
