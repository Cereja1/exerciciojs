const form = document.getElementById('form-valida-numeros');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const message = document.querySelector('.message');

    if (campoB > campoA) {
        message.innerText = 'Formulário válido! O número B é maior que o número A.';
        message.style.color = 'green';
    } else {
        message.innerText = 'Formulário inválido. O número B deve ser maior que o número A.';
        message.style.color = 'red';
    }
});
