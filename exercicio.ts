import PromptSync from "prompt-sync"

import { exercicio1 } from "./moduloExercicio1";
import { exercicio2 } from "./moduloExercicio2";
import { exercicio3 } from "./moduloExercicio3";
import { exercicio4 } from "./moduloExercicio4";
import { exercicio5 } from "./moduloExercicio5";
import { exercicio6 } from "./moduloExercicio6";

let prompt = PromptSync();

let resposta;
// Digite o numero do exercicio que voce quer exibir
do {
    console.log("Bem vindo ao menu de exercicios! ")

    resposta = prompt("Digite um numero de 1 a 6, para escolher um exercicio, ou 'sair' para interromper o programa : ")

    switch (resposta) {
        case "1":
            //Chamar exercicio 1
            exercicio1()
            break;
        case "2":
            //Chamar exercicio 2
            exercicio2()
            break
        case "3":
            //Chamar exercicio 3
            exercicio3()
            break
        case "4":
            //Chamar exercicio 4
            exercicio4()
            break
        case "5":
            //Chamar exercicio 5
            exercicio5()
            break
        case "6":
            //Chamar exercicio 6
            exercicio6()
            break

        default:
            console.log("Voce nao escolheu nunhum exercicio")
            break;
    }

} while (resposta != "sair")

// exercicio1()