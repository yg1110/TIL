/*
1. 입력형태
data = {
  start: 2020-03-17T04:30:00.000Z(Date형식)
  end: 2020-03-17T05:30:00.000Z(Date형식)
  color: "green"
};

2. 출력형태
[
  <11 empty items>,
  [ { start: 0, end: 59, color: '#123456' } ],
  [ { start: 0, end: 59, color: '#123456' } ],
  [ { start: 0, end: 10, color: '#123456' } ],
  <10 empty items>
]
*/

const _TIME = require("./_TIME.js");

exports.difftime = data => {
  const resulttime = [];
  for (let i = 0; i < data.length; i++) {
    let time = new _TIME.TimeClass(data[i].start, data[i].end, data[i].color);
    // console.log(time);

    // _TIME.TimeFunc.prototype.getTime = function() {
    //   return new _TIME.TimeFunc(data[i].start, data[i].end, data[i].color);
    // };
    // console.log(_TIME.TimeFunc.prototype.getTime());

    const studytime = new Array(24);
    // 이후시간보다 이전시간이 클경우 예외처리
    if (time.end - time.start < 0) {
      const tmp = time.start;
      time.start = time.end;
      time.end = tmp;
    }

    const timeGap = new Date(0, 0, 0, 0, 0, 0, time.end - time.start);
    const diffHour = timeGap.getHours();
    const diffMin = timeGap.getMinutes();
    // 차이가 1시간 이내
    if (diffHour == 0 && time.start.getMinutes() + diffMin <= 60) {
      studytime[time.start.getHours()] = new _TIME.TimeClass(
        time.start.getMinutes(),
        time.start.getMinutes() + diffMin,
        time.color
      );
    }

    // 차이가 1시간 이상
    else {
      // 다음날까지 선택한 경우
      if (
        time.start.getDate() !== time.end.getDate() ||
        time.start.getMonth() !== time.end.getMonth() ||
        time.start.getFullYear() !== time.end.getFullYear()
      ) {
        // 시작값은 초기 분값 ~ 59까지
        studytime[time.start.getHours()] = new _TIME.TimeClass(
          time.start.getMinutes(),
          59,
          time.color
        );

        // 나머지 전부색칠
        for (let i = time.start.getHours() + 1; i <= 24; i++) {
          studytime[i] = new new _TIME.TimeClas(0, 59, time.color)();
        }
      }

      // 다음날까지 선택하지 않은 경우
      else {
        // 시작값은 초기 분값 ~ 59까지
        studytime[time.start.getHours()] = new _TIME.TimeClass(
          time.start.getMinutes(),
          59,
          time.color
        );

        // 그 사이 시간은 전부 색칠
        for (let i = 1; i <= diffHour; i++) {
          studytime[time.start.getHours() + i] = new _TIME.TimeClass(
            0,
            59,
            time.color
          );
        }

        // 끝값은 0 ~ 초기 분값
        studytime[time.end.getHours()] = new _TIME.TimeClass(
          0,
          time.end.getMinutes(),
          time.color
        );
      }
    }
    resulttime.push(studytime);
  }
  return resulttime;
};
