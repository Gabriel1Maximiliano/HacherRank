function designerPdfViewer(h, word) {
    // Write your code here
    // la altura es word.length 
    // la base es el valor mas alto de la letra 
  // como el minimo es cero en el codigo de letras o sea la a entonces
  let maxima = -1;
    let estandarizadoDeLetras  = word.toUpperCase();
    console.log(estandarizadoDeLetras)
    console.log({estandarizadoDeLetras})
    console.log({word})
 for (let i = 0; i < estandarizadoDeLetras.length; i++) {
      let letra = estandarizadoDeLetras[i];
      let posicionDeLetra = letra.charCodeAt(0)-65; // si es a me da cero 
      console.log(posicionDeLetra)
      let alturaMamxima = h[posicionDeLetra];
    if(maxima < alturaMamxima){
         maxima = alturaMamxima;
    }
 }
 return maxima * word.length;
}



{
    h: [
      1, 3, 1, 3, 1, 4, 1, 3,
      2, 5, 5, 5, 5, 5, 5, 5,
      5, 5, 5, 5, 5, 5, 5, 5,
      5, 5
    ]
  }
  { word: 'abc' }
  let word= 'abc';
  let h= [
    1, 3, 1, 3, 1, 4, 1, 3,
    2, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5,
    5, 5
  ]
  designerPdfViewer(h, word)