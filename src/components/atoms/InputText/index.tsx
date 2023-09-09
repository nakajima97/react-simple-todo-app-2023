type Props = {
  input: string;
  onInputChange: React.Dispatch<React.SetStateAction<string>>;
};

const Index = ({ input, onInputChange }: Props): JSX.Element => {
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(event) => {
          onInputChange(event.target.value);
        }}
      />
    </>
  );
};

export default Index;
