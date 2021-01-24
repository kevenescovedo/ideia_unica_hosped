export default function global(request, response) {
let globalcases = fetch("https://api.covid19api.com/summary");
response.json(globalcases);
}