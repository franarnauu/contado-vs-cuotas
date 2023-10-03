function calcularConveniencia() {
    const precioEfectivo = parseFloat(prompt("Ingrese el precio total en efectivo:"));
    const precioCuotas = parseFloat(prompt("Ingrese el precio total en cuotas:"));
    const inflacionMensual = parseFloat(prompt("Ingrese la tasa de inflacion mensual estimada (%):")) / 100;
    const totalCuotas = parseInt(prompt("Ingrese la cantidad total de cuotas:"));

    if (isNaN(precioEfectivo) || isNaN(precioCuotas) || isNaN(inflacionMensual) || isNaN(totalCuotas) || totalCuotas < 1) {
        alert("Ingrese valores validos para los precios, la inflacion, y la cantidad de cuotas.");
        return;
    }

    let costoEfectivo = precioEfectivo;
    let costoCuotas = 0;
    let cuotasPagadas = [];

    for (let i = 1; i <= totalCuotas; i++) {
        const cuotaActual = precioCuotas / totalCuotas;
        const cuotaActualAjustada = cuotaActual / Math.pow(1 + inflacionMensual, i);
        costoCuotas += cuotaActualAjustada;
        cuotasPagadas.push(cuotaActualAjustada);
    }

    const resultado = `Costo en Efectivo: $${costoEfectivo.toFixed(2)}\nCosto en Cuotas (actualizado por inflacion): $${costoCuotas.toFixed(2)}\nMonto de cada cuota: $${(precioCuotas / totalCuotas).toFixed(2)}\nInflacion Mensual Estimada: ${inflacionMensual * 100}%`;

    if (costoEfectivo < costoCuotas) {
        alert(resultado + "\nConviene pagar en efectivo.");
    } else {
        alert(resultado + "\nConviene pagar en cuotas.\n\nDetalles de cada cuota:\n" + cuotasPagadas.map((cuota, index) => `Cuota ${index + 1}: $${cuota.toFixed(2)}`).join("\n"));
    }
}

calcularConveniencia();
