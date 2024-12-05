console.log(Vue)
 
const app = Vue.createApp({
  //  template: `
    // <h1>Hola Mundo</h1>
    //<p>Con Vue.JS</p>
    //<p>{{1+2}}</p>
     //<p>{{[1,2,3,4,5,6,7]}}</p>
    //<p>{{ {nombre:"Mauricio", apellido:"Cacuango" } }}</p>
    //<p>{{true? "Activo":"Inactivo"}}</p>
    //<p>1==1</p>
    //<p>{{1==1}}</p>
    //`,
    //style: ``

    //Options API

    methods:{
        cambiarMensaje(){
            this.mensaje = "Adios Mundo";
            this.edad = 30;
        }
    },
    data(){
        return{
            mensaje: "Hola Mundo PWeb",
            edad: 25
        }
    }
})
 
app.mount('#myapp')