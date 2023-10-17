let precioEfectivo, precioCuotas, inflacionMensual, totalCuotas;
let costoEfectivo, costoCuotas, cuotasPagadas;

function calcularConveniencia() {
    precioEfectivo = parseFloat(prompt("Ingrese el precio total en efectivo:"));
    precioCuotas = parseFloat(prompt("Ingrese el precio total en cuotas:"));
    inflacionMensual = parseFloat(prompt("Ingrese la tasa de inflación mensual estimada (%):")) / 100;
    totalCuotas = parseInt(prompt("Ingrese la cantidad total de cuotas:"));

    if (isNaN(precioEfectivo) || isNaN(precioCuotas) || isNaN(inflacionMensual) || isNaN(totalCuotas) || totalCuotas < 1) {
        alert("Ingrese valores válidos para los precios, la inflación, y la cantidad de cuotas.");
        return;
    }

    costoEfectivo = precioEfectivo;
    costoCuotas = 0;
    cuotasPagadas = [];

    for (let i = 1; i <= totalCuotas; i++) {
        const cuotaActual = precioCuotas / totalCuotas;
        const cuotaActualAjustada = cuotaActual / Math.pow(1 + inflacionMensual, i);
        costoCuotas += cuotaActualAjustada;
        cuotasPagadas.push(cuotaActualAjustada);
    }

    mostrarResultado();
}

function mostrarResultado() {
    let resultado = "Resultado:\n\n";
    resultado += "Costo en Efectivo: $" + costoEfectivo.toFixed(2) + "\n";
    resultado += "Costo en Cuotas (actualizado por inflación): $" + costoCuotas.toFixed(2) + "\n";
    resultado += "Monto de cada cuota: $" + (precioCuotas / totalCuotas).toFixed(2) + "\n";
    resultado += "Inflación Mensual Estimada: " + (inflacionMensual * 100) + "%\n\n";

    if (costoEfectivo < costoCuotas) {
        resultado += "Conviene pagar en efectivo.";
    } else {
        resultado += "Conviene pagar en cuotas.\n\nDetalles de cada cuota:\n";
        for (let i = 0; i < cuotasPagadas.length; i++) {
            resultado += "Cuota " + (i + 1) + ": $" + cuotasPagadas[i].toFixed(2) + "\n";
        }
    }

    alert(resultado);
}

calcularConveniencia();
