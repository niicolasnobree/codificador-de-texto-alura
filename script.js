const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem');

// Chaves para criptografia:
// Letra "e" => "enter"
// Letra "i" => "imes"
// Letra "a" => "ai"
// Letra "o" => "ober"
// Letra "u" => "ufat"

//função encriptar

function btnEncriptar () {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = '';
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0] , matrizCodigo[i][1]);;
        }

    }
    return stringEncriptada;

}

//função desencriptar

function btnDesencriptar () {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = '';
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [['e' , 'enter'] , ['i' , 'imes'] , ['a' , 'ai'] , ['o' , 'ober'] , ['u' , 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);;
        }

    }
    return stringDesencriptada;

}

// função copiar

var btnCopiar = document.querySelector('.btn-copiar');

btnCopiar.addEventListener('click', function(event) {
  var copyMensagem = document.querySelector('.mensagem');
  copyMensagem.select();
  var successful = document.execCommand('copy');

});
