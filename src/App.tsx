import { useState } from 'react';

function App(): JSX.Element {
  const [tasks, setTasks] = useState(['タスク1', 'タスク2', 'タスク3']);
  const [text, setText] = useState('');

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
    setText('');
  };

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
        <div>
          <input
            type="text"
            name="add-task-input"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
          <button
            name="add-task-button"
            onClick={() => {
              handleAddTask(text);
            }}
          >
            タスクを追加する
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
