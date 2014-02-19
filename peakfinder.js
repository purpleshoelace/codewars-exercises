function pickPeaks( arr ){
  var result = {},
      arrlen = arr.length,
      i;
  result.pos = [];
  result.peaks = [];
  if(arrlen < 2){ return result; }
  for(i = 0; i<arrlen; i++){
    if( arr[i] > arr[i-1] && arr[i] > arr[i+1] ) { result.pos.push(i), result.peaks.push(arr[i]); }
    // handle plataeu
    if( arr[i] > arr[i-1] && arr[i] == arr[i+1] ) {
      var j = i;
      while( arr[i] == arr[j] ){ j++ }
      if( arr[i] > arr[j] ){
        result.pos.push(i), result.peaks.push(arr[i]);
      }
      i = j;
    }
  }
  return result;
}