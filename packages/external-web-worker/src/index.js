export function newWorker() {
  return new Worker(new URL('./deep-thought.worker.js', import.meta.url));
}
