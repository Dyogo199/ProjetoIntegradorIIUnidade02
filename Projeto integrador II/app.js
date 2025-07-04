const { createApp } = Vue;

createApp({
  data() {
    return {
      novaTarefa: '',
      prioridade: 'Baixa',
      tarefas: []
    }
  },
  methods: {
    adicionarTarefa() {
      if (this.novaTarefa.trim() !== '') {
        this.tarefas.push({
          nome: this.novaTarefa.trim(),
          prioridade: this.prioridade
        });
        this.novaTarefa = '';
        this.prioridade = 'Baixa';
      }
    },
    removerTarefa(index) {
      this.tarefas.splice(index, 1);
    }
  }
}).mount('#app');
