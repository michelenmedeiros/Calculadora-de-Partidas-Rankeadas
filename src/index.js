function calculateRank(wins, defeats) {
    //Calcula saldo de vitorias
    const winningBalance = wins - defeats;
    let level = " ";

    //Nivel dos jogadores com base nas vitorias 
    if (wins < 10){
        level = "Ferro";
    }
     else if (wins >= 11 && wins <= 20){
        level = "Bronze";
    }
     else if (wins >= 21 && wins <= 50){
        level = "Prata";
    }
     else if (wins >= 51 && wins <= 80) {
        level = "Ouro";
    }
     else if (wins >= 81 && wins <= 90) {
        level = "Diamante";
    }
     else if (wins >= 91 && wins <= 100) {
        level = "Lendário";
    }
     else {(wins >= 101) 
        level = "Imortal";
    }

    // Mensagem de saída
    return (`O Herói tem de saldo de ${winningBalance} e está no nível de ${level}`);
}

//Usando
let result = calculateRank(95, 14);
console.log(result); 
