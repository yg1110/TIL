exports.TimeClass = class Time {
  constructor(start, end, color) {
    this.start = start;
    this.end = end;
    this.color = color;
  }
};

exports.TimeFunc = function Time(start, end, color) {
  this.start = start;
  this.end = end;
  this.color = color;
};
