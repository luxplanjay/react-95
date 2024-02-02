import { useState, useMemo } from 'react';

export const UseMemoExample = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  // console.log('Calculating value');
  // const value = a + b;

  const memValue = useMemo(() => {
    console.log('Calculating memValue');
    return a + b;
  }, [a, b]);

  return (
    <div>
      <button onClick={() => setA(prev => prev + 1)}>update a: {a}</button>
      <button onClick={() => setB(prev => prev + 1)}>update b: {b}</button>
      <button onClick={() => setC(prev => prev + 1)}>update c: {c}</button>
      {/* <p>value: {value}</p> */}
      <p>memValue: {memValue}</p>
    </div>
  );
};
