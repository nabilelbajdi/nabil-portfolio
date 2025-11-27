import { useState, useEffect, useCallback } from 'react';

/**
 * useTypewriter - Creates a typing animation effect
 * 
 * @param {string} text - The text to type out
 * @param {object} options - Configuration options
 * @param {number} options.speed - Typing speed in ms per character (default: 50)
 * @param {number} options.delay - Delay before starting in ms (default: 0)
 * @param {boolean} options.enabled - Whether to start typing (default: true)
 * @param {function} options.onComplete - Callback when typing completes
 */
export function useTypewriter(text, options = {}) {
  const {
    speed = 50,
    delay = 0,
    enabled = true,
    onComplete,
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Reset when text changes
  useEffect(() => {
    if (!enabled) return;
    
    setDisplayText('');
    setIsComplete(false);
    setIsTyping(false);

    const startDelay = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [text, delay, enabled]);

  // Typing effect
  useEffect(() => {
    if (!isTyping || !enabled) return;

    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayText, text, speed, isTyping, enabled, onComplete]);

  const reset = useCallback(() => {
    setDisplayText('');
    setIsComplete(false);
    setIsTyping(false);
  }, []);

  const skipToEnd = useCallback(() => {
    setDisplayText(text);
    setIsTyping(false);
    setIsComplete(true);
  }, [text]);

  return {
    displayText,
    isTyping,
    isComplete,
    reset,
    skipToEnd,
  };
}

/**
 * useTypewriterSequence - Types multiple lines in sequence
 * 
 * @param {Array<{text: string, delay?: number}>} lines - Lines to type
 * @param {object} options - Configuration options
 */
export function useTypewriterSequence(lines, options = {}) {
  const { speed = 50, startDelay = 0, lineDelay = 300, enabled = true } = options;
  
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState([]);
  const [isSequenceComplete, setIsSequenceComplete] = useState(false);

  const currentLine = lines[currentLineIndex];
  
  const handleLineComplete = useCallback(() => {
    setCompletedLines(prev => [...prev, currentLine?.text || '']);
    
    if (currentLineIndex < lines.length - 1) {
      setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
      }, currentLine?.delay || lineDelay);
    } else {
      setIsSequenceComplete(true);
    }
  }, [currentLineIndex, lines.length, currentLine, lineDelay]);

  const { displayText, isTyping } = useTypewriter(currentLine?.text || '', {
    speed,
    delay: currentLineIndex === 0 ? startDelay : 0,
    enabled: enabled && currentLineIndex < lines.length,
    onComplete: handleLineComplete,
  });

  const reset = useCallback(() => {
    setCurrentLineIndex(0);
    setCompletedLines([]);
    setIsSequenceComplete(false);
  }, []);

  return {
    completedLines,
    currentText: displayText,
    currentLineIndex,
    isTyping,
    isSequenceComplete,
    reset,
  };
}

