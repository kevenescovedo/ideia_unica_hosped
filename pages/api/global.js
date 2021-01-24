function global  (request,response)  {
//fazer um fetch é um requisição
var globalresponse = await fetch("https://api.covid19api.com/summary");
response.json(globalresponse);
}
export default global;
