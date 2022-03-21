import { newWorker } from 'external-web-worker';

const worker = newWorker();

worker.postMessage({
  question: 'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
});

worker.onmessage = ({ data: { answer } }) => {
  console.log(answer);
};
