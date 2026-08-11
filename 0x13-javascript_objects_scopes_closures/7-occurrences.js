#!/usr/bin/node
function nbOccurences (list, searchElement) {
  let count = 0;
  for (const item of list) {
    if (item === searchElement) {
      count += 1;
    }
  }
  return count;
}

exports.nbOccurences = nbOccurences;
