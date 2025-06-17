import { swap } from "./Utility";

export function getHeapSortAnimations(arr) {
  const copy = [...arr];
  const animations = [];

  const heapify = (n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n) {
      animations.push([[left, largest], false]);
      if (copy[left] > copy[largest]) largest = left;
    }

    if (right < n) {
      animations.push([[right, largest], false]);
      if (copy[right] > copy[largest]) largest = right;
    }

    if (largest !== i) {
      animations.push([[i, copy[largest]], true]);
      animations.push([[largest, copy[i]], true]);
      swap(copy, i, largest);
      heapify(n, largest);
    }
  };

  const n = copy.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
  }

  // Heap sort
  for (let i = n - 1; i > 0; i--) {
    animations.push([[0, copy[i]], true]);
    animations.push([[i, copy[0]], true]);
    swap(copy, 0, i);
    heapify(i, 0);
  }

  return animations;
}
