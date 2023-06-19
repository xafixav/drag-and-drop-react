const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Aprender beautiful dnd' },
      'task-2': { id: 'task-2', content: 'Adicionar no projeto de todo-list' },
      'task-3': { id: 'task-3', content: 'Criar as tasks organicamente pela aplicacao' },
      'task-4': { id: 'task-4', content: 'Alterar as tasks organicamente pela aplicacao' },
      'task-5': { id: 'task-5', content: 'Deletar as tasks organicamente pela aplicacao' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To do',
        tasksIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
      }
    },
    columnOrder: ['column-1'],
};


export default initialData;