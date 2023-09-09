import { useState } from 'react';
import AddTask from './components/organisms/AddTask/Index';
import TaskList from './components/organisms/TaskList';

function App(): JSX.Element {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const handleFinishTask = (index: number) => {
    const newTasks = tasks.filter((element, key) => key !== index);

    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todoアプリ</h1>
      <div>
        <h2>タスク追加</h2>
        <div>
          <AddTask handleAddTask={handleAddTask} />
        </div>
        <h2>タスク一覧</h2>
        <div>
          <TaskList tasks={tasks} handleFinishTask={handleFinishTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
