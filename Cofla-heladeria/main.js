dineroCofla = prompt("¿Cuanto dinero tiene Cofla?");
dineroRoberto = prompt("¿Cuanto dinero tiene Roberto?");
dineroPedro = prompt("¿Cuanto dinero tiene Pedro?");

let dinero = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla <= 1) {
  alert("Comprate un helado de agua");
  alert("y tu vuelto es: " + (dinero - 0.6));
} else if (dineroCofla >= 1 && dineroCofla <= 1.6) {
  alert("Comprate un helado de crema");
  alert("y tu vuelto es: " + (dinero - 1));
} else if (dineroCofla >= 1.6 && dineroCofla <= 1.7) {
  alert("Comprate un helado de heladix");
  alert("y tu vuelto es: " + (dinero - 1.6));
} else if (dineroCofla >= 1.7 && dineroCofla <= 1.8) {
  alert("Comprate un helado de heladovich");
  alert("y tu vuelto es: " + (dinero - 1.7));
} else if (dineroCofla >= 1.8 && dineroCofla <= 2.9) {
  alert("Comprate un helado de helardo");
  alert("y tu vuelto es: " + (dinero - 1.8));
} else if (dineroCofla >= 2.9 && dineroCofla <= 3) {
  alert("Comprate un helado de confites o un pote de 1/4");
  alert("y tu vuelto es: " + (dinero - 2.9));
} else {
  alert("ERES POBREEEEEEEEEE");
}

if (dineroPedro >= 0.6 && dineroPedro <= 1.5) {
  alert("Comprate un helado de agua");
} else if (dineroPedro >= 1 && dineroPedro <= 1.5) {
  alert("Comprate un helado de crema");
} else if (dineroPedro >= 1.6 && dineroPedro <= 1.7) {
  alert("Comprate un helado de heladix");
} else if (dineroPedro >= 1.7 && dineroPedro <= 1.8) {
  alert("Comprate un helado de heladovich");
} else if (dineroPedro >= 1.8 && dineroPedro <= 2) {
  alert("Comprate un helado de helardo");
} else if (dineroPedro >= 2.9 && dineroPedro <= 4) {
  alert("Comprate un helado de confites o un pote de 1/4");
} else {
  alert("ERES POBREEEEEEEEEE");
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1.5) {
  alert("Comprate un helado de agua");
} else if (dineroRoberto >= 1 && dineroRoberto <= 1.5) {
  alert("Comprate un helado de crema");
} else if (dineroRoberto >= 1.6 && dineroRoberto <= 1.7) {
  alert("Comprate un helado de heladix");
} else if (dineroRoberto >= 1.7 && dineroRoberto <= 1.8) {
  alert("Comprate un helado de heladovich");
} else if (dineroRoberto >= 1.8 && dineroRoberto <= 2) {
  alert("Comprate un helado de helardo");
} else if (dineroRoberto >= 2.9 && dineroRoberto <= 4) {
  alert("Comprate un helado de confites o un pote de 1/4");
} else {
  alert("ERES POBREEEEEEEEEE");
}
