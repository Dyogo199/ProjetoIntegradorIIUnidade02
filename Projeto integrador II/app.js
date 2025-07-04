const { createApp } = Vue

createApp({
  data() {
    return {
      novaTarefa: '',
      tarefas: []
    }
  },
  methods: {
    adicionarTarefa() {
      if (this.novaTarefa.trim() !== '') {
        this.tarefas.push(this.novaTarefa.trim())
        this.novaTarefa = ''
      }
    },
    removerTarefa(index) {
      this.tarefas.splice(index, 1)
    }
  }
}).mount('#app')
