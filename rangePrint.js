// Create a function that can take a start point, end point, and skip amount, to print all numbers in the range. 

function printRange(start, end, skip){
  count = [];
  
  for(var i = start; i < end; i+= skip){
    count.push(i);
  }
  return count;
}