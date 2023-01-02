function catAndMouse(x, y, z) {

  let gatoA=  Math.abs(x - z);
  let gatoB=  Math.abs(z - y);

  if(gatoA === gatoB){//Cat B
  return 'Mouse C'
  }
  if(gatoA < gatoB){
    return 'Cat A'
  }
  if(gatoA > gatoB){
      return 'Cat B'
  }
}
{ x: 1 }
{ y: 2 }
{ z: 3 }

let x =1
let y =2
let z =3// raton 

catAndMouse(x, y, z)