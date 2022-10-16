function sumIntervals(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);
    
    let prevInterval = intervals[0];
  
    return intervals.map((interval) => {
      let start = interval[0]
      let end = interval[1];
  
      if (prevInterval === interval) {
        return end - start;
      }
      if (prevInterval[1] > interval[0]) {
        start = prevInterval[1];
      }
      if (start > end) {
        return 0;
      }
      prevInterval = [start, end];
      return end - start;
    }).reduce((a, b) => a + b, 0);
  }