import '../css/components.css';
// import webpack from '../assets/img/webpack-logo.png';

export const saludar = (nombre) => {
    console.log('Creando etiqueta');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;
    document.body.append(h1);


    //Img
    // const imgLogo=document.createElement('img');
    // imgLogo.src=webpack;
    // document.body.append(imgLogo);
}
