
function calcular() {
  var pes = (document.convertidor.pesos.value) * 1;
  if (pes == 0) { alert("No ha llenado el espacio de pesos inghrese un n") } else {

      var tot = pes / 16;
      tot = tot.toFixed(2);
      document.convertidor.dolar.value = tot;
  }




}
