let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
function ordenarValores(valores){
 
  if (typeof valores ==='object'){
 valores.sort((a, b) => a - b);
}
else{
  console.log("Voce só pode Ordenar Objetos");
}
}


function calcularMedia(arrObj) {
    arrObj.map(function(e) {
        let mediaValor = 0;
        ordenarValores(e.notas);

        let notasParaCalculo = e.notas.slice();

        notasParaCalculo.splice(0, 1);
        notasParaCalculo.splice(notasParaCalculo.length - 1, 1);

        for (let i = 0; i < notasParaCalculo.length; i++) {
            mediaValor += notasParaCalculo[i];
        }

        mediaValor = mediaValor / notasParaCalculo.length;

        e.mediaValida = mediaValor;

        return e;
    });
}

calcularMedia(atletas);
console.log(atletas)
