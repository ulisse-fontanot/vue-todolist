var root = new Vue({
  el: "#root",
  data:{
    element: "",
    eroe: "",
    modifica: "",
    personaggi:[
      "Aragorn",
      "Gandalf",
      "Legolas",
      "Gimli"
    ],
    personaggiEliminati:[]
  },
  methods: {
    addMain(eroe){ //PER AGGIUNGERE PERSONAGGIO
      (this.eroe.length < 4) ? alert("troppo corto...") : this.personaggi.push(this.eroe);
    },
    modify(index){ //PER MODIFICARE PERSONAGGIO
      this.modifica = prompt("come lo vuoi rinominare?");
      (this.modifica.length < 4) ? alert("troppo corto...") : this.modifica=this.personaggi[index];
    },
    toDelete(index){ //MAIN TO DELETED
      this.personaggiEliminati.push(this.personaggi[index]);
      alert("HAI ELIMINATO: " + this.personaggi[index]);
      this.personaggi.splice(index,1);
      console.log(this.personaggiEliminati);
    },
    toMain(index){ //DELETED TO MAIN
      this.personaggi.push(this.personaggiEliminati[index]);
      this.personaggiEliminati.splice(index,1);
      console.log(this.personaggi);
    },
    destruct(index){ //ELIMINA UNO DEFINITIVAMENTE
      this.personaggiEliminati.splice(index,1);
    },
    destructAll(){ //ELIMINA TUTTI DEFINITIVAMENTE
      this.personaggiEliminati.splice(0);
    },
    spostaAll(index){ //TUTTI MAIN TO DELETED
      while (this.personaggi.length > 0) {
        this.personaggiEliminati.push(this.personaggi[0]);
        this.personaggi.splice(0,1);
      }
    },
    cestino(){ //ATTIVA CESTINO
      this.element == document.getElementById("cestin")
      if(this.personaggiEliminati.length > 0) {
        this.element.removeclass("sconto");
        this.element.addclass("attivo");
      }
    }
  }
})
