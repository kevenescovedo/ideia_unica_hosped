//nossa api exemplo
//um rota é um funcao js que recebe um request e response
function tempo(request,response) {
let data = new Date();
//a response serve para mandar algo pro usuario e a resposta em json

response.json({date: data.toLocaleDateString("pt-Br", {day: "2-digit", month: "long"}), texto: "essa é a nossa api"});
}
export default tempo;