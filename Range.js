function range(start, end, step) {
  if (step === null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

//Define a function range which takes 3 integer parameters: start, end, and step.
// The function should return an array of numbers from start to end counting by step.
// The function should return an empty array [] if given incorrect parameters, such as:
// start, end, or step being undefined
// end being greater than start
// step being negative