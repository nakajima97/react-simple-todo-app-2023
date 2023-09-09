import { useState } from 'react';
import AddTask from './components/organisms/AddTask/Index';

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
          <ul>
            {tasks.map((task, key) => (
              <li key={key}>
                {task}
                <button
                  onClick={() => {
                    handleFinishTask(key);
                  }}
                >
                  完了
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
