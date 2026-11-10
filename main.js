
const Alimentos = [
    {
        nome: "Pizza",
        categoria: "Massa",
        origem: "Itália",
        tipo: "Salgado"
    },
    {
        nome: "Hambúrguer",
        categoria: "Fast food",
        origem: "Estados Unidos",
        tipo: "Salgado"
    },
    {
        nome: "Sushi",
        categoria: "Comida japonesa",
        origem: "Japão",
        tipo: "Salgado"
    },
    {
        nome: "Lasanha",
        categoria: "Massa",
        origem: "Itália",
        tipo: "Salgado"
    },
    {
        nome: "Brigadeiro",
        categoria: "Doce",
        origem: "Brasil",
        tipo: "Doce"
    },
    {
        nome: "Feijoada",
        categoria: "Prato típico",
        origem: "Brasil",
        tipo: "Salgado"
    },
    {
        nome: "Taco",
        categoria: "Comida mexicana",
        origem: "México",
        tipo: "Salgado"
    },
    {
        nome: "Croissant",
        categoria: "Confeitaria",
        origem: "França",
        tipo: "Doce"
    },
    {
        nome: "Panqueca",
        categoria: "Massa",
        origem: "Grécia",
        tipo: "Doce ou salgado"
    }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let Alimento of Alimentos) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${Alimento.nome}</td>
        <td>${Alimento.categoria}</td>
        <td>${Alimento.origem}</td>
        <td>${Alimento.tipo}</td>
    `;

    corpoTabela.appendChild(linha);
}
