import { useState } from 'react';
import initialData from './data/initialData';
import Column from './components/Column.jsx';


function App() {
  const [initialState] = useState(initialData);

  return (
    <div className="App">
      {initialState.columnOrder.map((columnId) => {
        const column = initialState.columns[columnId];
        const tasks = column.tasksIds.map((taskId) => initialState.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
      </div>
  );
}

export default App;
