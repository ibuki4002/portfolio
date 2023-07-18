import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const TextAnimation = () => {
  const textRef = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const text = textElement.innerText;
    const textElement2 = textRef2.current;
    const text2 = textElement2.innerText;

    textElement.innerText = '';
    textElement2.innerText = '';

    const animateText = async () => {
      await animateSingleText(textElement, text);
      await animateSingleText(textElement2, text2);
    };

    const animateSingleText = (element, text) => {
      return new Promise(resolve => {
        const spans = [];
        for (let i = 0; i < text.length; i++) {
          const span = document.createElement('span');
          span.innerText = text[i];
          span.style.opacity = '0';
          element.appendChild(span);
          spans.push(span);
        }

        anime({
          targets: spans,
          opacity: '1',
          translateX: ['-50px', '0px'],
          duration: 1000,
          easing: 'easeOutExpo',
          delay: (el, i) => 50 * i,
          begin: () => {
            spans.forEach(span => {
              span.style.display = 'inline-block';
            });
          },
          complete: () => {
            resolve();
          },
        });
      });
    };

    animateText();
  }, []);

  return (
    <div className="text-container">
      <h1 ref={textRef}>I'M&ensp;IBUKI&ensp;TANAKA</h1>
      <h2 ref={textRef2}>Web Developer</h2>
    </div>
  );
};

export default TextAnimation;
