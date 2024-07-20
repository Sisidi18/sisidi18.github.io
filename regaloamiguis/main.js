function validarCodigo() {
    const codigo = document.getElementById('codigo').value;
    const imagen = document.getElementById('contenedor-imagen').querySelector('img');

    switch (codigo) {
        case '27':
            imagen.src = 'yuly.png';
            break;
        case '18':
            imagen.src = 'fer.png';
            break;
        case '15':
            imagen.src = 'agus.png';
            break;
        default:
            imagen.src = '';
            alert('Código no válido');
    }

    document.getElementById('modal-codigo').style.display = 'none'; 
}

