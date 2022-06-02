
// ✅.map()  
// ✅State
// ✅Props
// 🤌Props drilling -> Só no react

// Coisa de mamãe assopra a sopinha 🍼👶👼
// ✅Filter()
// ✅findIndex() 🍼
// ✅SpreadOperator 👼
// ✅Push() 🍼


var data = require('./data.json');                                          // importa em js: atribui o require à uma variavel

let {aliens, ovinis, valocidade_max, unidade_velicidade, data_in_data} = data; // metodo mais atual de desestruturação


mochilinhaDaEscola = {
  "mochila":{
    "lapis": "✍️", 
    "lanchinho": "🍎", 
    "caderninho": "📒", 
    "borrachinha": "🤌"
  },
  "fraldinha": "💩"
}

function lapis(mochilinhaDaEscola){
  // mochila = mochilinhaDaEscola.mochila
  console.log(mochila["lapis"])
}

lapis({mochila});

//REACT
export default function Painel(props) { 
  return <div>{props.username}</div>
}

export default function Painel( {username} ) { 
  return <div>{username}</div>
}


// let aliens_ = data.aliens;                                                    // atribui o valor de uma key especifica a uma variavel (obj_nome.key)

function tiposDeAliens(){
  console.log(aliens); // ela só existe dentro da função
};

const tiposDeOvinis = () => 
    ovinis.map( //MAP -> Mapear uma lista              [ 'Disco_voador', 'Charuto', 'osnis' ]
      unidade => //ovini é um objeto dentro de "ovinis" 
        console.log(
        JSON.stringify(unidade)
        )
);

const carrosRuins = () => {
  objeto = ["peugeot", "tesla","nissan", "uno", "fordKa","nissan", "fiesta", "corola", "nissan"]
  objeto.push("fusca");
  
  posicaoDoCarroBrabo = objeto.findIndex("fordKa"); //Retorna??

  objeto[posicaoDoCarroBrabo] = "Ferrari";

  spreadOperatorObjet = ["A","B", ...objeto]  //["A","B","peugeot", "tesla","nissan", "uno", "fordKa","nissan", "fiesta", "corola", "nissan"]
  spreadOperatorObjet2= [...objeto, "A","B"]
  spreadOperatorObjet3= [ "A",...objeto,"B", ...aliens]
                               // SpreadOperator enfia a porra toda da lista

  ObjetoDeSopinha = {...objeto}                        
  count= 0
  godCar=0
  
  objeto.map(item => {                                           // .map() precisa de um variavel auxiliar para receber o valor de cada item q esta sendo passado por ele
    if(item == "nissan"){                                               // ele roda toda a lista até o final dela
      count++
    }
    if(item == "fordKa"){
      godCar++
    }
  })

  function eMaior(carro){
   return(carro == "nissan")
  }

  results = objeto.filter(eMaior(carro)); // Se a função retornar VERDADEIRO ele devolve o valor da posição
  
  console.log(`Encontramos ${count} carros ruins na lista & ${godCar} carro SINISTROOOO FORDKA!`);
}



carrosRuins();                           // tiposDeAliens referencia a uma funcao

//MAP com Function
// var celcius = fahrenheit.map( function( elem ) {
//   return Math.round( ( elem - 32 ) * 5 / 9 );
// } ); 




// //REACT

// function func(props){
//   //lógica
//  return(false)
// }

// // TIPOS DE ARROW FUNCTION

// const arrowFunc = (props) => {
//   return (false)
// }

// const arrowFunc2 = props => {
//   //com lógica
//   return (false)
// }

// const arrowFunc3 = props => (false)

// const arrowFunc4 = props => false

// const arrowFunc5 = () => (false)

// import React from 'react';
// import { Container } from './styles';

//código em TS


// export default Tooltip = ({ title, className, children }) => (
//     <Container className={className}>
//       {children}
//       <span>{title}</span>
//     </Container>
// );

// export function Tooltip2({ title, className, children }) {
//   return(
//     <Container className={className}>
//     {children}
//     <span>{title}</span>
//   </Container>
//   )
// }

