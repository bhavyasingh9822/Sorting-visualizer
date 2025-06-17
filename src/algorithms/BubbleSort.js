import { swap } from "./Utility";

export function getBubbleSortAnimations(arr) {
  const copy = [...arr];
  const animations = [];
  const n = copy.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push([[j, j + 1], false]); // comparison
      if (copy[j] > copy[j + 1]) {
        animations.push([[j, copy[j + 1]], true]); // swap values
        animations.push([[j + 1, copy[j]], true]);
        swap(copy, j, j + 1);
      }
    }
  }

  return animations;
}

