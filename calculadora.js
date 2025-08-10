function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor ingresa un numero.";
    } else {
        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                resultado = num2 !== 0 ? num1 / num2 : "Error: División entre cero";
                break;
            default:
                resultado = "Operador no válido";
        }
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
