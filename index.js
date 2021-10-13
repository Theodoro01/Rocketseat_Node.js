const question = [
    "O que eu aprendi hoje ?",
    "O que eu desejo melhorar ?"
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n" + question[index] + " > ")
}
 

ask()

const answers = []
    process.stdin.on("data", data => {
        answers.push( data.toString().trim())
        if ( answers.length < question.length){
            ask(answers.length)
        } else {
            process.exit()
        }
    })


process.on("exit", () => {
    console.log(`
        O que você aprendeu hoje foi:
        ${answers[0]},

        O que você deseja melhorar é:
        ${answers[1]},


    `)
})