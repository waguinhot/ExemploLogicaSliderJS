
let nImg = 0;

// fingindo que eu fiz um fetch e busquei um json de uma api bla bla bla...
let images = [
    {
        url: "./imgs/imagem01.jpeg",
        alt: "Imagem 01"
    },
    {
        url: "./imgs/imagem02.jpg",
        alt: "Imagem 02"
    }
    ,{
        url:"./imgs/imagem03.png",
        alt:"Imagem 03"
    }
];

//onde a mágica começa acontecer
let img = document.getElementById("img");

//jogada de mestre, se eu for esperar o acontecer pelo contador ele inicia vazio zzzzZZZZ
img.src = images[nImg].url;
img.alt = images[nImg].alt;

//Primeira rodada no manual pra não esperar o dobro do que quero que demore o contador zzzzZZZZ
nImg++;

//pra pegar os indices corretamente sem extrapolar xD
let qtdImagem = images.length - 1;

//chamando função pra alterar o src e alt da tag img
setInterval( definirSlider, 5000);


async function definirSlider()
{
    img.src = await images[nImg].url;
    img.alt = await images[nImg].alt;

    //almentando o indice do array  pra pegar outra imagem na proxima vez que rodar a função
    nImg ++;

    //verificando o tamanho do indice pra não extrapolar o que tem lá
    if(nImg > qtdImagem) nImg = 0;


}

 function proximo()
{   
    // aumentando 1 no indice do array pra buscar a proxima imagem
    nImg++;

     //verificando o tamanho do indice pra não extrapolar o que tem lá
    if(nImg > qtdImagem) nImg = 0;

    img.src =  images[nImg].url;
    img.alt =  images[nImg].alt;
    return;
}

 function anterior()
{   
    // subtraindo 1 no indice do array pra buscar a proxima imagem
    nImg = nImg - 1;

     //verificando o tamanho do indice pra não deixar menor que o primeiro indice
    if(nImg < 0 ) nImg = qtdImagem;
    img.src =  images[nImg].url;
    img.alt =  images[nImg].alt;
    return;
}





