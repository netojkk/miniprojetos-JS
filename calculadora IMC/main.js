let btn = document.querySelector("#btn-cal");

function imc() {
  var name = document.querySelector("#nome").value;

  var peso = document.querySelector("#peso").value;

  var altura = document.querySelector("#altura").value;

  let res = document.querySelector(".res");

  if (name.value === "" || peso.value === "" || altura.value === "") {
    res.textContent = "Preencha os campos!";
  } else {
    const valorIMC = (peso / altura ** 2).toFixed(1);

    let clas = ``;

    if ((valorIMC < 18, 5)) {
      clas = "abaixo do peso";
    } else if (valorIMC < 25) {
      clas = "com peso normal";
    } else {
      clas = "sobrepeso";
    }

    res.innerHTML = ` ${name} está ${clas}. Seu IMC é: ${valorIMC}`;
  }
}

btn.addEventListener("click", imc);
