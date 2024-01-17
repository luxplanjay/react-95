export const Controls = ({
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
}) => {
  return (
    <div>
      <button onClick={onPrev} disabled={isPrevDisabled}>
        Prev
      </button>
      <button onClick={onNext} disabled={isNextDisabled}>
        Next
      </button>
    </div>
  );
};
