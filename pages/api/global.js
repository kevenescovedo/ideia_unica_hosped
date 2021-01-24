export default async function global(request, response) {
let globalcases = await fetch("https://api.covid19api.com/summary");
let json = await globalcases.json();
response.json({novosCasosConfirmados: json.Global.NewConfirmed});


}