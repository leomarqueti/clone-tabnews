test("GET to /api/v1/status should return 200", async () => {
  // precisamos colocar await pois pedimos para o teste esperar um pouco ate a pagina carregar , damos uma promise , uma promessa que jaja chega, entao criamos uma funçao async para que tudo funcione e quando der o a responsa a variavel vai receber no response.status o 200 
  const response = await fetch("http://localhost:3000/api/v1/status/");
  expect(response.status).toBe(200);
});
