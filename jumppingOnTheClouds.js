function jumpingOnClouds(c, k) {

    console.log({c})
    console.log({k})
    let cantidadDeNubes = c.length;
    let energia = 100;
    let indiceNube =0;
    do{
        if((c[(indiceNube + k)%cantidadDeNubes] == 1)){
            energia= energia -2;
        }
      energia--;
      indiceNube = (indiceNube + k )%cantidadDeNubes;
    }while( indiceNube !== 0 )
    return energia;
    }

    {
        c: [
          0, 0, 1, 0,
          0, 1, 1, 0
        ]
      }
      { k: 2 }

      let k = 2;
       let c = [
        0, 0, 1, 0,
        0, 1, 1, 0
      ]
      jumpingOnClouds(c, k)