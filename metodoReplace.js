let cidade = "Sãokjbkjbhjghj bvhgfgjg vaaaa  nkllçfff  haaaa"
let cidade2 = ""

for (let i = 0; i < cidade.length; i++ ) {
  
  if (cidade[i] === "a") cidade2 += "A"
  else if (cidade[i] === "ã") cidade2 += "Ã"
  else if (cidade[i] === "à") cidade2 += "À"
  else if (cidade[i] === "á") cidade2 += "Á"
  else cidade2 += cidade[i]
  
}


console.log(cidade2)

//1a repetição: console.log(cidade[0])
//2a repetição: console.log(cidade[1])
//3a repetição: console.log(cidade[2])



nome = "Camila"
nome2 = nome.replace(/mila/, "MILA")
nome3 = nome.replace(/mila/g, "MILA")


console.log(nome2)
console.log(nome3)