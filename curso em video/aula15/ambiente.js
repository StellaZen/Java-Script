/*let num = [1 , 5 , 8, 7 ]

 num[3] = 6

 console.log(num)

 num.push(7)
 num.push(9)
 num.sort()
 console.log(num)
 console.log(`o vetor tem ${num.length} posições`)

let valores = [8, 1, 7, 4, 9]

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
let valores = [8, 1, 7, 4, 9]
valores.sort()

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log(`O Número 8 está na posição ${valores.indexOf(8)}`)