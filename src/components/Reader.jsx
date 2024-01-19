import { useEffect, useState } from 'react';
import { Progress } from './Progress';
import { ArticleView } from './ArticleView';
import { Controls } from './Controls';

export const Reader = ({ items }) => {
  const [selectedIdx, setSelectedIdx] = useState(() => {
    const savedIdx = window.localStorage.getItem('article-idx');
    if (savedIdx !== null) {
      return JSON.parse(savedIdx);
    }
    return 0;
  });

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  useEffect(() => {
    window.localStorage.setItem('article-idx', selectedIdx);
  }, [selectedIdx]);

  const selectedArticle = items[selectedIdx];
  const isNextDisabled = selectedIdx === items.length - 1;
  const isPrevDisabled = selectedIdx === 0;

  return (
    <div>
      <header>
        <Controls
          onPrev={handlePrev}
          onNext={handleNext}
          isNextDisabled={isNextDisabled}
          isPrevDisabled={isPrevDisabled}
        />
        <Progress current={selectedIdx + 1} total={items.length} />
      </header>

      <ArticleView article={selectedArticle} />
    </div>
  );
};
