function calcularImc(){
    var altura = document.getElementById("altura").value;
    var peso = doument.getElementById("peso").value;

    console.log(altura);
    console.log(peso);

    var imc = peso / (altura) **2;

    if (imc < 18.5){
        window.alert("IMC está abaixo do peso!");

    } else if(imc < 24.9){
        window.alert("IMC está normal!");

    } else if(imc < 29.9){
        window.alert("Sobrepeso!");

    } else if(imc < 39.9){
        window.alert("Obesidade Tipo I!");

    } else if(imc > 39.9){
        window.alert("Obesidade Tipo II!");
    }
}