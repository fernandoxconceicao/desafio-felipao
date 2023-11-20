let nomeHeroi = "zeldinha"
let nivelHeroi = 6001

if (nivelHeroi <= 1000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de Ferro")
} else if (nivelHeroi <= 2000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de Bronze")
} else if (nivelHeroi <= 5000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de Prata")
} else if (nivelHeroi <= 7000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de Ouro")
} else if (nivelHeroi <= 8000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de Platina")
} else if (nivelHeroi <= 9000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de Ascendente")
} else if (nivelHeroi <= 10000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de Imortal")
} else if (nivelHeroi > 10000) {
    console.log("O Herói de nome " + nomeHeroi + " está no nível de Radiante")
} else {
    console.log("O seu nível é radiante!")
}
