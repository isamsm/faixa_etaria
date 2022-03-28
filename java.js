function faixaEtaria() {
    const idade = document.getElementById("idade").value;
    const p = document.getElementById("resposta");
        if (idade >= 0 && idade < 15) {
            p.textContent = "Criança";
        } else if (idade >= 15 && idade < 30) {
            p.textContent = "Jovem";
        } else if (idade >= 30 && idade < 60) {
            p.textContent = "Adulto";
        } else if (idade >= 60 && idade < 100) {
            p.textContent = "Idoso";
        } else if (idade < 0) {
            p.textContent = "Idade inválida";
        } else if (idade >= 100) {
            p.textContent = "Parabéns, você já tem um século, ou mais, de vida!";
    }
}