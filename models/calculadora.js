function somar(numero1,numero2){

  if (typeof(numero1) == "string" ){
    return "Erro: Um valor nao numerico no numero 1"
  } 
  if (typeof(numero2) != "number"){
    return "Erro: Um valor nao numerico no numero 2"
  }
  if (numero1 == null){
    return "Erro | campo vazio, digite um valor numerico no campo 1"
  }
  
  return numero1 + numero2
}

exports.somar = somar