//1. Exercício: Senha do Wifi 

// alert("Captive Portal da Padaria")

// const PASSWORD = "pao123"
// let attempts = 0;


// while (attempts < 3) {
//     let wifi = prompt("Digite a senha do wifi:")

//     if(wifi === PASSWORD) {
//         console.log("Conectado. Bom café!");
//         alert("Conectado. Bom café!")
//         break
//     } else {
//         console.log("Senha incorreta!");
//         alert("Senha incorreta!");

//             if(attempts === 2) {
//                 alert("Acesso bloqueado!")
//                 console.log("Acesso bloqueado!");
//             }
//         }
//         attempts++
// }

// 2. Contador descrescente: Ano novo

// let new_year = 10

// while (new_year > 0){
//      alert(new_year)

//    new_year--
// }

// alert("Feliz ano novo!!")


// 3. Contador de meta


// let val_total = 0
// let week = 0

// while (val_total < 300) {

// let value = Number(prompt("Digite o valor que ganhou essa semana:"))

//  if(value <= 0){
//     console.log("Digite um valor válido!")
//     alert("Digite um valor válido!")
//  } else {
//     val_total += value
//     alert(`Valor total: R$${val_total}`)
//  }
//   week++
// }

//  if(val_total >= 300){
//     alert (`Parabéns!! Você pode comprar a bicicleta. Quantidades de semanas: ${week}`);
//     console.log(`Parabéns!! Você pode comprar a bicicleta. Quantidades de semanas: ${week}`);
//  }

// 4. Código secreto (quantidade de balas) para adivinhar
let total = Number(prompt("Dona Cida, digite a quantidade de balas:"))
let attempts = Number(prompt("Digite o número de tentativas do jogador:"))

if(total > 50 || total < 0 || attempts > 50 || attempts < 0) {
    alert("Dona Cida, digite um valor válido. As quantidades e tentivas deve ser entre 1 a 50")
} else {
while (attempts > 0){

    let random = Number(prompt("Jogador. digite um valor entre 1 a 50:"))

    if (random <= 50 && random >= 1 ) {
    
        if(random === total){
            alert(`Parabéns! Você acertou. Numero secreto: ${total}. Tentativas: ${attempts}`)
            break
        } else {
             attempts--
        }
        if(random > total){
            alert(`Errou!! Tente um número menor! Tentativas restantes: ${attempts}`)
        } else {
            alert(`Errou!! Tente um número maior! Tentativas restantes: ${attempts}`)
        }


    } else {
        alert("Digite um valor entre 1 a 50")
    }
    if(attempts === 0 ){
        alert(`Suas tentativas acabaram! :( Tinha ${total} de balas no pote.`)
        }
   
    }
}