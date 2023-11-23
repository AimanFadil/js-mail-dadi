//Email validator
let insert_email = prompt('Digita la tua mail');

let valid_email = ['index@gmail.com', 'html@gmail.com', 'style@gmail.com', 'css@gmail.com', 'js@gmail.com']

if(insert_email = valid_email){
    console.log('La tua mail è valida')
}
else{
    console.log('La tua mail non è valida')
}

//Dadi
let user_num = Math.floor(Math.random() * 6)
console.log( 'Punteggio Utente:'+ user_num)

let pc_num = Math.floor(Math.random() * 6)
console.log('Punteggio pc:'+ pc_num)

if(user_num > pc_num){
    console.log('Complimenti ,hai vinto il gioco!!!')
}
else if(user_num == pc_num){
    console.log('Capita, Pareggio')
}
else{
    console.log('Mi dispiace ma hai perso...')
}