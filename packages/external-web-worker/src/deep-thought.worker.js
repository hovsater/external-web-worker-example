import meaningOfLife from './meaning-of-life.js';

self.onmessage = ({ data: { question } }) => {
  self.postMessage({
    answer: meaningOfLife(),
  });
};
