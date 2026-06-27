const githubUser = "SEU_USUARIO";

const typing = document.getElementById("typing");

const texto = "Edmilson Oliveira";

let i = 0;

function escrever(){

if(i < texto.length){

typing.innerHTML += texto.charAt(i);

i++;

setTimeout(escrever,120);

}

}

escrever();

fetch(`https://api.github.com/users/${githubUser}/repos?sort=updated`)

.then(r=>r.json())

.then(repos=>{

const container=document.getElementById("repos");

repos.forEach(repo=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<h3>${repo.name}</h3>

<p>${repo.description || "Sem descrição."}</p>

<p><strong>Linguagem:</strong> ${repo.language || "-"}</p>

<a href="${repo.html_url}" target="_blank">Ver Projeto</a>

`;

container.appendChild(card);

});

});