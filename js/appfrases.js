const frases=[{frase: 'Agua que no has de beber, déjala correr.', autor: 'Mauricio Cacuango'},
{frase: 'A caballo regalado no se le mira el dentado.', autor: 'Augusto Sandino'},
{frase: 'A Dios rogando y con el mazo dando.', autor: 'Cristina de Suecia'},
{frase: 'A falta de pan, buenas son tortas.', autor: 'Dennisse de Suecia'},
{frase: 'A la vejez viruela.', autor: 'Eva Perón'},
{frase: 'No hay mal que por bien no venga.', autor: 'Fidel Castro'},
{frase: 'A mal tiempo, buena cara.', autor: 'Francisco de Miranda'},
]
const app = Vue.createApp({
    methods:{},
    data(){
        return{
            listafrases: frases

        }
    }
})
 
  
app.mount('#myapp')