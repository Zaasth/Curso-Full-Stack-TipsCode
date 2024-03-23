const title = document.querySelector("#title");
const img1 = document.getElementsByClassName("container_img")[0]
const img2 = document.getElementsByClassName("container_img")[1]
const img3 = document.querySelector(".container_img")[0]

RodarDado();

function RodarDado(){

    let RandomNumber1 = Math.floor(1 + Math.random()*6);

    let RandomNumber2 = Math.floor(1 + Math.random()*6);

    let ImgRandom = "/img/0"+RandomNumber1+".png";
    img1.setAttribute("src", ImgRandom);
    let ImgRandom2 = "/img/0"+RandomNumber2+".png";
    img2.setAttribute("src", ImgRandom2);

    if(RandomNumber2 > RandomNumber1){
        title.textContent = "Jogador 2 ganhou!!";
    } else if(RandomNumber2 < RandomNumber1) {
        title.textContent = "Jogador 1 ganhou!!!!";
    }else {
        title.textContent = "EMPATE!!";
    }
    
    
}
