import { useState } from 'react';
import { Progress } from './Progress';
import { ArticleView } from './ArticleView';
import { Controls } from './Controls';

export const Reader = ({ items }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
  };

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
