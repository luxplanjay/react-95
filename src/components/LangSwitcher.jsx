import { useLang } from '../langContext';

export const LangSwitcher = () => {
  const ctx = useLang();

  return (
    <select value={ctx.lang} onChange={e => ctx.changeLang(e.target.value)}>
      <option value="uk">UK</option>
      <option value="en">EN</option>
      <option value="pl">PL</option>
    </select>
  );
};
