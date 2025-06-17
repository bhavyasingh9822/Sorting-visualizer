import { swap } from "./Utility";

export function getSelectionSortAnimations(arr) {
  const copy = [...arr];
  const animations = [];

  for (let i = 0; i < copy.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < copy.length; j++) {
      animations.push([[minIndex, j], false]); // comparison
      if (copy[j] < copy[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      animations.push([[i, copy[minIndex]], true]);
      animations.push([[minIndex, copy[i]], true]);
      swap(copy, i, minIndex);
    }
  }

  return animations;
}
