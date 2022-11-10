
var postos_de_gasolina = [2, 15, 22, 10.2]
var consumo = 8
var combustivel = 2

postos_de_gasolina.sort(function(a, b) {
return a - b;
});

var n = postos_de_gasolina.length
var resta = consumo*combustivel

//retira o numero maior que RESTA

for(var i = 0; i < n; i++){
if(postos_de_gasolina[i] > resta){
    postos_de_gasolina.splice(i,1)
}
}

var n = postos_de_gasolina.length
var maxDistance = (postos_de_gasolina[postos_de_gasolina.length-1])


if(postos_de_gasolina.length != 0){
  console.log(`O posto mais distante está a`,maxDistance, `km`)
}else{
  maxDistance = -1
  console.log(maxDistance)
} 
return maxDistance;
