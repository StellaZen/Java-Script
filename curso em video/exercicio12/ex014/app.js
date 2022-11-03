function carregar(){
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12){
        //manhã
        img.src = 'imagens/manhaa.png';
        document.body.style.background = '#b5c5d6';
    }else if (hora > 12 && hora < 18){
        //tarde
        img.src = 'imagens/tardee.png';
        document.body.style.background = '#d19e64';
    }else{
        //noite
        img.src = 'imagens/noitee.png';
        document.body.style.background = '#1c545f';
    }
}
