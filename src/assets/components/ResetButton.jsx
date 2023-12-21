const ResetButton = (props) => {
  const { setCounter } = props;
  const reset = () => {
    setCounter(0);
  };
  return (
    <button
      className="reset-button"
      onClick={() => {
        reset();
      }}
    >
      Reset
    </button>
  );
};

export default ResetButton;
