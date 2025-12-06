const calculadora = require("../../models/calculadora")

test("2 + 2 é 4", () => {
  const resultado = calculadora.somar(2,2)
  expect(resultado).toBe(4)
})

test("Erro string no numero1", () => {
  const resultado = calculadora.somar("strf",2)
  expect(resultado).toBe("Erro: Um valor nao numerico no numero 1")
})

test("Erro string no numero2", () => {
  const resultado = calculadora.somar(3,"dfddf")
  expect(resultado).toBe("Erro: Um valor nao numerico no numero 2")
})

test("Erro | campo vazio, digite um valor numerico no campo 1", () => {
  const resultado = calculadora.somar(null,3)

  expect(resultado).toBe("Erro | campo vazio, digite um valor numerico no campo 1")
})