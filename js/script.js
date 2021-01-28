var root = new Vue({
  el: "#root",
  data:{
    element: "",
    eroe: "",
    personaggi:[
      "Aragorn",
      "Gandalf",
      "Legolas",
      "Gimli"
    ],
    personaggiEliminati:[]
  },
  methods: {
    addMain(eroe){
      (this.eroe.length < 4) ? alert("troppo corto...") : this.personaggi.push(this.eroe);
    },
    toDelete(index){
      this.personaggiEliminati.push(this.personaggi[index]);
      alert("HAI ELIMINATO: " + this.personaggi[index]);
      this.personaggi.splice(index,1);
      console.log(this.personaggiEliminati);
    },
    toMain(index){
      this.personaggi.push(this.personaggiEliminati[index]);
      this.personaggiEliminati.splice(index,1);
      console.log(this.personaggi);
    },
    destruct(index){
      this.personaggiEliminati.splice(index,1);
    },
    destructAll(){
      this.personaggiEliminati.splice(0);
    },
    cestino(){
      this.element == document.getElementById("cestin")
      if(this.personaggiEliminati.length > 0) {
        this.element.removeclass("sconto");
        this.element.addclass("attivo");
      }
    }
  }
})
