const randomDamage = _ => Math.floor((Math.random() * 10)) + 1;

const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return (randNum === 0 ? opt1 : opt2);
}
// console.log(chooseOption("test1", "test2"));

//prompt 3
const attackPlayer = (health) => health - randomDamage();
// console.log(attackPlayer(100));

//prompt 4
const logHealth = (player, health) => console.log(`${player} health: ${health}`);


//prompt5
const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

//prompt6
const isDead = (health) => health <= 0 ? true : false;

//prompt7

const fight = (player1, player2, player1Health, player2Health) => {
    while (true) {
        let attacker = chooseOption(player1, player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            isDead(player2Health);

            if (isDead(player2Health)) {
                logDeath(player1, player2);
                break;
            }

        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            isDead(player1Health);
            if (isDead(player1Health)) {
                logDeath(player2, player1);
                break;
            }
        }
    }
}

fight("dragon", "dragonslayer", 100, 100);



// while (true) {
//     let randomNumber = Math.floor((Math.random() * 10) + 1);
//     if (randomNumber !== 5) {
//         counter++;
//         console.log(`${randomNumber}!==5`);
//     } else {
//         counter++;
//         console.log(`5===5. it took ${counter} iterations to randomly generate the number 5`);
//         break;
//     }
// }

