// src/hooks/useTypewriter.js
import { useState, useEffect } from 'react';

const useTypewriter = (
  words,
  typeSpeed = 120,
  deleteSpeed = 60,
  pauseDuration = 1200
) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout;

    const currentWord = words[wordIndex];

    if (isDeleting) {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsPaused(false);
        timeout = setTimeout(() => {}, pauseDuration / 3);
      }
    } else {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, typeSpeed);
      } else {
        setIsPaused(true);
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseDuration]);

  return { text, isPaused };
};

export default useTypewriter;
