function contar(){
    let ini = document.getElementById("ini");
    let fim = document.getElementById("ifim");
    let passo = document.getElementById("ipas");
    let res = document.getElementById("res");

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Impossível contar"
    }else{
        res.innerHTML = "contando: <br>";
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if(p <= 0){
            window.alert("Passo inválido. Considerando passo 1")
            p = 1
        }

        if(i < f){
            //contagem crescente
         for (let c = i; c <= f ; c += p){
            res.innerHTML += ` ${c} \u{1F498} `
            }      
        }else{
            //contagem regressiva
            for (c = i ; c >= f ; c-= p){
                res.innerHTML += `${c} \u{1F498}`
            }
        }
        res.innerHTML += `\u{1F3C1}`        
    }
    
}