


/**
 * 
 * Matriz de reflexion por formula sabemos que Ref= 2q - p
 * 
 * con lo que nos queda rx = 2qx - px
                        ry = 2qy - py
 */
function findPoint(px, py, qx, qy) {
    // Write your code here
  let xCoord=0;
  let yCoord=0;
  xCoord = (2*qx - px);
  yCoord = (2*qy - py);
    return [xCoord,yCoord];

}
let px=0 
let py = 0
let qx = 1
let qy= 1

findPoint(px, py, qx, qy);