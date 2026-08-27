/**
 * Preloader → hero handshake. A plain event would race React's effect
 * order (the preloader can finish before the hero subscribes), so this
 * replays the signal for late subscribers.
 */
let begun = false;
const listeners = new Set<() => void>();

export function beginJourney() {
  begun = true;
  listeners.forEach((cb) => cb());
  listeners.clear();
}

export function onJourneyBegin(cb: () => void): () => void {
  if (begun) {
    cb();
    return () => {};
  }
  listeners.add(cb);
  return () => listeners.delete(cb);
}
