// Attraverso una chiamata ajax all’Api di boolean avremo
// a disposizione una decina di dischi musicali. 
// Stampiamo tutto a schermo.  DONE
// In questo momento non è importante la parte grafica.
// Bonus (per oggi pomeriggio): Creare una select con
// i seguenti generi: pop, rock, metal e jazz. In base
// a cosa scegliamo nella select vedremo i corrispondenti cd.  DONE

new Vue({
    el: '#root',
    data: {

        // array di oggetti album
        albums: [],

        // selected impostata 'vuota' per il v-model HTML
        selected: '',

        // array dei generi musicali generato dinamicamente
        genres: []
    },
    mounted(){

        // creo una costante con valore 'this'
        // per poter richiamare i data nel mounted
        const self=this;
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(function(resp){
            self.albums=resp.data.response;

            // imposto un forEach per controllare se nell'array
            // dei generi è presente il genere dell'elemento
            // ciclato, se non lo è allora lo pusho all'interno
            // dell'array, se c'è già non lo pusherà,
            // così da non creare doppioni
            self.albums.forEach((element)=>{
                if(!self.genres.includes(element.genre)){
                    self.genres.push(element.genre)
                }
            })
        })
    }
});
Vue.config.devtools=true;