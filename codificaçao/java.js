const mapaSilabas = {
    'ba': '1', 'be': '2', 'bi':'3', 'bo':'4', 'bu': '5',
    'ca': '6', 'ce': '7', 'ci':'8', 'co': '9', 'cu': '10',
    'da': '11', 'de': '12', 'di': '13', 'do': '14', 'du': '15',


};

function codificar() {
    let texto = document.getElementById("inputText").value.toLowerCase();
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let silabaAtual = texto.substr(i, 2);

        if (mapaSilabas[silabaAtual]) {
            resultado +=mapaSilabas[silabaAtual];
            i++;
        } else {
            resultado +=texto[i];
        }
    }

    document.getElementById("outputText").value = resultado;
}

function limpar() {
    document.getElementById("outputText").value = "";
    document.getElementById("outputText").value = "";
}
function copiar() {
    const outputText =document.getElementById("outputText").value;

    if (outputText) {
        const textarea = document.getElementById("outputText");
        textarea.ariaSelected();
        document.execCommand("copy");

        alert("Texto copiado para a área de transferencia!");
    } else {
        alert("Nenhum texto para copiar.");    
    }
}