type Props = {
  tasks: string[];
  handleFinishTask: (index: number) => void;
};

const TaskList = ({ tasks, handleFinishTask }: Props): JSX.Element => {
  return (
    <>
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
    </>
  );
};

export default TaskList;
