document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("input", function (event) {
            const fieldId = event.target.id;
            const fieldValue = event.target.value;

            let tableCell;

            switch (fieldId) {
                case "nombre":
                    tableCell = document.querySelector("table tbody tr:nth-child(1) td:nth-child(2)");
                    break;
                case "apellido":
                    tableCell = document.querySelector("table tbody tr:nth-child(2) td:nth-child(2)");
                    break;
                case "email":
                    tableCell = document.querySelector("table tbody tr:nth-child(3) td:nth-child(2)");
                    break;
                case "telefono":
                    tableCell = document.querySelector("table tbody tr:nth-child(4) td:nth-child(2)");
                    break;
                case "edad":
                    tableCell = document.querySelector("table tbody tr:nth-child(5) td:nth-child(2)");
                    break;
                case "direccion":
                    tableCell = document.querySelector("table tbody tr:nth-child(6) td:nth-child(2)");
                    break;
                case "provincia":
                    tableCell = document.querySelector("table tbody tr:nth-child(7) td:nth-child(2)");
                    break;
                case "codigo-postal":
                    tableCell = document.querySelector("table tbody tr:nth-child(8) td:nth-child(2)");
                    break;
                case "metodo-contacto":
                    tableCell = document.querySelector("table tbody tr:nth-child(9) td:nth-child(2)");
                    break;
                case "suscripcion":
                    tableCell = document.querySelector("table tbody tr:nth-child(10) td:nth-child(2)");
                    break;
                default:
                    return;
            }

            if (tableCell) {
                if (event.target.type === "checkbox") {
                    const selectedCheckboxes = document.querySelectorAll("input[name='suscripcion[]']:checked");
                    const values = Array.from(selectedCheckboxes).map(checkbox => checkbox.nextElementSibling.textContent);
                    tableCell.textContent = values.join(", ");
                } else if (event.target.type === "radio") {
                    const selectedRadio = document.querySelector("input[name='metodo-contacto']:checked");
                    tableCell.textContent = selectedRadio ? selectedRadio.nextElementSibling.textContent : "";
                } else {
                    tableCell.textContent = fieldValue;
                }
            }
        });
    }

    const botonLeerMas = document.getElementById("boton-leer-mas");
    if (botonLeerMas) {
        botonLeerMas.addEventListener("click", function () {
            const cvCompleto = document.getElementById("cv-completo");

            if (cvCompleto.style.display === "none") {
                cvCompleto.style.display = "block";
                botonLeerMas.textContent = "Leer menos";
            } else {
                cvCompleto.style.display = "none";
                botonLeerMas.textContent = "Leer mas";
            }
        });
    }
});


const JuegoPiedraPapelTijeras = (() => {
    function play(userChoice) {
        const choices = ['piedra', 'papel', 'tijeras'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        let result = '';

        if (userChoice === computerChoice) {
            result = `Empate 🤝. Ambos eligieron ${userChoice}.`;
        } else if (
            (userChoice === 'piedra' && computerChoice === 'tijeras') ||
            (userChoice === 'papel' && computerChoice === 'piedra') ||
            (userChoice === 'tijeras' && computerChoice === 'papel')
        ) {
            result = `¡Ganaste! 👍 Elegiste ${userChoice} y la computadora eligió ${computerChoice}.`;
        } else {
            result = `Perdiste 👎. Elegiste ${userChoice} y la computadora eligió ${computerChoice}.`;
        }

        document.getElementById('result').innerText = result;
    }

    return { play };
})();

window.play = JuegoPiedraPapelTijeras.play;
