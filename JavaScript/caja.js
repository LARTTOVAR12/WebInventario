// // configuración de la camara
// const config = {
//     inputStream: {
//         type: 'LiveStream',
//         constraint: {
//             facingMode: 'environmet' // Utiliza la camara 
//         },
//         target: document.querySelector('#lectorCamara') // Elemento donde se mostrara la camara
//     },
//     decoder: {
//         readers: ['ean-reader'] // tipo de código de barras a leer (puede variar)
//     }
// };

// // Inicializar 
// Quagga.init(config, (err) => {
//     if (err) {
//         console.error('Error al inicializar la Camara', err);
//         return;
//     }
//     console.log('Quagga inicializado correctamente');
//     Quagga.start();
// });

// // escuchar el evento de detección de código de barras
// Quagga.onDetected((result) => {
//     const codigoBarras =result.codeResult.code;
//     console.log('Código de barras detectado: ', codigoBarras);
// });