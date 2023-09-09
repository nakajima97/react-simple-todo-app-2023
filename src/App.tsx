import { useState } from 'react';

function App(): JSX.Element {
  const [tasks, setTasks] = useState(['タスク1', 'タスク2', 'タスク3']);

  return (
    <div>
      <h1>Todoアプリ</h1>
      <div>
        <h2>タスク一覧</h2>
        <div>
          <ul>
            {tasks.map((task, key) => (
              <li key={key}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
