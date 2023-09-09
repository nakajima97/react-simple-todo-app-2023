import { useState } from 'react';
import InputText from '../../atoms/InputText';

type Props = {
  handleAddTask: (text: string) => void;
};

const AddTask = ({ handleAddTask }: Props): JSX.Element => {
  const [text, setText] = useState('');

  return (
    <>
      <InputText input={text} onInputChange={setText} />
      <button
        name="add-task-button"
        onClick={() => {
          handleAddTask(text);
          setText('');
        }}
      >
        タスクを追加する
      </button>
    </>
  );
};

export default AddTask;
