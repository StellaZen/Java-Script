function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fAno.value.lenght == 0 || fAno.value > ano){
        window.alert("Verifique os dados e tente novamente");
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if (fsex[0].checked){
            genero = 'Homem';
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','bebe.png');
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','homem.png');
            }else{
                //idoso
                img.setAttribute('src','idoso.png')
            }
        }else{
            genero = 'Mulher';
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute('src','menina.png');
            }else if(idade <50){
                //adulta
                img.setAttribute('src','mulher.png')
            }else{
                //idosa
                img.setAttribute('src','idosa.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
        img.style.borderRadius = '50%'
    }
        
    }
