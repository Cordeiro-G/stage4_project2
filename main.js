alert(`Para calcular se um aluno passou você deverá adicionar
1) O nome competo do estudante
2) A nota da primeira prova
3) A nota da segunda prova`)
let student = prompt("Insira o nome completo do aluno aqui: ")
let noteOne = prompt("Insira a nota da primeira prova: ")
noteOne = Number(noteOne)
let noteTwo = prompt("Insira a nota da segunda prova")
noteTwo = Number(noteTwo)
const media = (noteOne + noteTwo) / 2
if(media >=7){
    alert(`Parabéns ${student}  foi aprovado com ${media} `)
} else{
    alert(`${student} não foi aprovado pois ficou abaixo da média com a nota ${media}`)
}