function climbingLeaderboard(ranked, player) {
    // Write your code here
    let tablaDeResultados = [];
    let indicedDelRecord = 0;
    let pos = 1;

    for (let i = player.length - 1; i >= 0; i--) {
        if (ranked[indicedDelRecord] <= player[i]) {
            tablaDeResultados.push(pos);

        }
     else {

            while (indicedDelRecord < ranked.length -1  && ranked[indicedDelRecord] > player[i]) {
                if (ranked[indicedDelRecord] !== ranked[indicedDelRecord - 1]) {
                    pos++;

             }


             indicedDelRecord++;
            }            if (ranked[indicedDelRecord] <= player[i]) {
                tablaDeResultados.push(pos);
            } else {
                tablaDeResultados.push(pos + 1);
            }
        }
    }
    console.log(tablaDeResultados)
    return tablaDeResultados;
}

{
    ranked: [
        100, 100, 50, 40,
        40, 20, 10
    ]
}
{ player: [5, 25, 50, 120] }

let player = [5, 25, 50, 120]
let ranked = [
    100, 100, 50, 40,
    40, 20, 10
]
climbingLeaderboard(ranked, player)
