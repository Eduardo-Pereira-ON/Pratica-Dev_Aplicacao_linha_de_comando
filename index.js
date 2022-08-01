import dados from "readline-sync"

let salariominimoano = [
    {salario:510.00 , ano:2010},
    {salario:545.00 , ano:2011},
    {salario:622.00 , ano:2012},
    {salario:685.00 , ano:2013},
    {salario:724.00 , ano:2014},
    {salario:788.00 , ano:2015},
    {salario:880.00 , ano:2016},
    {salario:937.00 , ano:2017},
    {salario:954.00 , ano:2018},
    {salario:998.00 , ano:2019},
    {salario:1045.00 , ano:2020}
]

let imflacaoSalarioAno = [
    {ipca: 5.91, ano:2010},
    {ipca: 6.50, ano:2011},
    {ipca: 5.84, ano:2012},
    {ipca: 5.91, ano:2013},
    {ipca: 6.41, ano:2014},
    {ipca: 10.67, ano:2015},
    {ipca: 6.29, ano:2016},
    {ipca: 2.95, ano:2017},
    {ipca: 3.75, ano:2018},
    {ipca: 4.31, ano:2019},
    {ipca: 4.52, ano:2020}
]

let stringSalario = 'Salario minimo: ';
let stringano = 'ano: ';
let stringInflacao = 'Inflacao IPCA: ';
let stringCrescimentoS = 'Crescimento Salarial: '

console.log('1 - Listar o historico do salario minimo ao ano')
console.log('2 - Listar o historico da taxa IPCA (inflacao)')
console.log('3 - Comparar e listar a porcentagem de crescimento salarial com a inflacao(IPCA)s')

var escolha = dados. question('\n\nDigite o numero da sua escolha: ')

if(Number(escolha) == 1){
    for(let salarioM of salariominimoano){
    
     let ano = salarioM.ano 
     let salario = salarioM.salario
        console.log('\n\n' + stringSalario.padEnd(30,'.')+ 'R$ ' + salario + ',00')
        console.log(stringano.padEnd(30, '.') + ano)
    }

}else if(Number(escolha) == 2){
    for(let inflacaoAno of imflacaoSalarioAno){
       
     let ipca = inflacaoAno.ipca
     let ano = inflacaoAno.ano
        console.log('\n\n' + stringInflacao.padEnd(30, '.') + ipca + '%')
        console.log(stringano.padEnd(30, '.') + ano )       
    }

}else if(Number(escolha) == 3){
    for(let contador = 2; contador < salariominimoano.length; contador++) {
     let ano = salariominimoano[contador].ano
     let salario = salariominimoano[contador].salario
     let percentualCrescimento;
     let crescimentoFormatado;
     //let ipca = inflacaoAno.ipca

      if(contador > 0){
     let salarioAnterior = salariominimoano[contador - 1].salario
     let diferenca = salario - salarioAnterior;

         percentualCrescimento = (diferenca / salarioAnterior) * 100;
         crescimentoFormatado = percentualCrescimento.toFixed(2).replace('.', ',')+'%'
     }   
     let ipca = imflacaoSalarioAno[contador].ipca;


     
         console.log('\n\n'+stringano.padEnd(30,'.') + ano)
         console.log(stringSalario.padEnd(30,'.') + salario)
         console.log(stringCrescimentoS.padEnd(30,'.') + crescimentoFormatado)
         console.log(stringInflacao.padEnd(30,'.') + ipca + '%')


    }

}else if(Number(escolha) !== 1,2,3,String){
    console.log('Opcao invalida')
    console.log('Digite um opcao valida')
    var escolha = dados. question('Digite o numero da sua escolha: ')
}











