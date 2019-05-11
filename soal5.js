function sort_array(ar) {
  let place = [];
  while(ar.length > 0) {
    place.push(getLargestChar(ar.shift()));
  }
  return ar.push(place);
}

function getLargestChar(ar) {
  return ar.reduce(function(a, b) {
    a = Array.isArray(a) ? getLargestChar(a) : a;
    b = Array.isArray(b) ? getLargestChar(b) : b;
    return a > b ? a : b;
  });
}

exports.sort_array = sort_array;
