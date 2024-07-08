// para convertir el texto al hacer clic en el botón "Convertir"
document.getElementById('convertButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value; // Obtiene el texto de entrada
    const outputText = convertToBionicReading(inputText); // Convierte el texto a formato Bionic Reading
    document.getElementById('outputText').innerHTML = outputText; // Muestra el texto convertido
});

// función para convertir el texto a formato Bionic Reading
function convertToBionicReading(text) {
    return text.split(' ').map(word => {
        const midpoint = Math.ceil(word.length / 2); // Encuentra el punto medio de cada palabra
        return '<b>' + word.substring(0, midpoint) + '</b>' + word.substring(midpoint); // Formatea la primera mitad en negrita
    }).join(' ');
}
