export default async function global(request, response) {
let globalcases = await fetch("https://api.covid19api.com/summary");
response.json(globalcases.json());
}