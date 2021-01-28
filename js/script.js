var root = new Vue({
  el: "#root",
  data:{
    personaggi:[
      "Aragorn",
      "Gandalf",
      "Legolas",
      "Gimli"
    ],
    personaggiEliminati:[]
  },
  methods: {
    toDelete(index){
      this.personaggiEliminati.push(this.personaggi[index]);
      alert("HAI ELIMINATO: " + this.personaggi[index]);
      this.personaggi.splice(index,1);
      console.log(this.personaggiEliminati);
    }
  }
})
