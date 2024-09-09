function pesquisar() {
    

let section =document.getElementById("resultados-pesquisa")

let campoPesquisa = document.getElementById("campo-pesquisa").value

console.log(campoPesquisa)

if (campoPesquisa ==""|| !campoPesquisa){
    section.innerHTML = "<p> Nada foi encontrado!</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()


let resultados= "";
let titulo = "";
let sinopse = "";

let busca = ""
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    sinopse = dado.sinopse.toLowerCase()

    if(titulo.includes(campoPesquisa)||sinopse.includes(campoPesquisa)){
        busca += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p clas="descricao-meta">${dado.sinopse}</p>
        </div> 
    `;
    }

}
if (!resultados){
    section.innerHTML = "<p> Nada foi encontrado!</p>"
    return
}
  
section.innerHTML = busca
}
//46:08