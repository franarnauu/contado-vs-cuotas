const datos = {
    precioEfectivo: 0,
    precioCuotas: 0,
    inflacionMensual: 0,
    totalCuotas: 0,
    costoEfectivo: 0,
    costoCuotas: 0,
    cuotasPagadas: [],
};

function calcularConveniencia() {
    datos.precioEfectivo = parseFloat(prompt("Ingrese el precio total en efectivo:"));
    datos.precioCuotas = parseFloat(prompt("Ingrese el precio total en cuotas:"));
    datos.inflacionMensual = parseFloat(prompt("Ingrese la tasa de inflación mensual estimada (%):")) / 100;
    datos.totalCuotas = parseInt(prompt("Ingrese la cantidad total de cuotas:"));

    if (isNaN(datos.precioEfectivo) || isNaN(datos.precioCuotas) || isNaN(datos.inflacionMensual) || isNaN(datos.totalCuotas) || datos.totalCuotas < 1) {
        alert("Ingrese valores válidos para los precios, la inflación y la cantidad de cuotas.");
        return;
    }

    datos.costoEfectivo = datos.precioEfectivo;
    datos.costoCuotas = 0;
    datos.cuotasPagadas = [];

    for (let i = 1; i <= datos.totalCuotas; i++) {
        const cuotaActual = datos.precioCuotas / datos.totalCuotas;
        const cuotaActualAjustada = cuotaActual / Math.pow(1 + datos.inflacionMensual, i);
        datos.costoCuotas += cuotaActualAjustada;
        datos.cuotasPagadas.push(cuotaActualAjustada);
    }

    mostrarResultado();
}

function mostrarResultado() {
    let resultado = "Resultado:\n\n";
    resultado += "Costo en Efectivo: $" + datos.costoEfectivo.toFixed(2) + "\n";
    resultado += "Costo en Cuotas (actualizado por inflación): $" + datos.costoCuotas.toFixed(2) + "\n";
    resultado += "Monto de cada cuota: $" + (datos.precioCuotas / datos.totalCuotas).toFixed(2) + "\n";
    resultado += "Inflación Mensual Estimada: " + (datos.inflacionMensual * 100) + "%\n\n";

    if (datos.costoEfectivo < datos.costoCuotas) {
        resultado += "Conviene pagar en efectivo.";
    } else {
        resultado += "Conviene pagar en cuotas.\n\nDetalles de cada cuota:\n";
        datos.cuotasPagadas.forEach((cuota, index) => {
            resultado += "Cuota " + (index + 1) + ": $" + cuota.toFixed(2) + "\n";
        });
    }

    alert(resultado);
}

calcularConveniencia();
