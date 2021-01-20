module.exports = class TimeTable {
  constructor() {
    this.studytime = [];
    for (let i = 0; i < 24; ++i) {
      this.studytime.push([]);
    }
  }

  pushTime(time) {
    // 이후시간보다 이전시간이 클경우 예외처리
    if (time.end - time.start < 0) {
      const tmp = time.start;
      time.start = time.end;
      time.end = tmp;
    }

    const timeGap = new Date(0, 0, 0, 0, 0, 0, time.end - time.start);
    const diffHour = timeGap.getHours();
    const diffMin = time.start.getMinutes() + timeGap.getMinutes();

    // 차이가 1시간 이내
    if (diffHour === 0 && diffMin <= 60) {
      this.studytime[time.start.getHours()].push({
        start: time.start.getMinutes(),
        end: diffMin,
        color: time.color
      });
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
        this.studytime[time.start.getHours()].push({
          start: time.start.getMinutes(),
          end: 59,
          color: time.color
        });

        // 나머지 전부색칠
        for (let i = time.start.getHours() + 1; i <= 24; i++) {
          this.studytime[i].push({
            start: 0,
            end: 59,
            color: time.color
          });
        }
      }

      // 다음날까지 선택하지 않은 경우
      else {
        // 시작값은 초기 분값 ~ 59까지
        this.studytime[time.start.getHours()].push({
          start: time.start.getMinutes(),
          end: 59,
          color: time.color
        });

        // 그 사이 시간은 전부 색칠
        for (let i = 1; i <= diffHour; i++) {
          this.studytime[time.start.getHours() + i].push({
            start: 0,
            end: 59,
            color: time.color
          });
        }

        // 끝값은 0 ~ 초기 분값
        this.studytime[time.end.getHours()].push({
          start: 0,
          end: time.end.getMinutes(),
          color: time.color
        });
      }
    }
    return this.studytime;
  }

  checkInTime(time, index) {
    let StartHour = time.start.getHours();
    let EndHour = time.end.getHours();
    let StartMin = time.start.getMinutes();
    let EndMin = time.end.getMinutes();

    let ErrorTime = [];

    if(this.studytime[StartHour].length > 0 && this.studytime[StartHour][0].start <= StartMin){
      ErrorTime.push(index + "번째 데이터[0]번째 줄 : " + JSON.stringify(time));
    }
    
    if(this.studytime[EndHour].length > 0 && this.studytime[EndHour][0].end >= EndMin){
      ErrorTime.push(index + "번째 데이터[" + this.studytime[EndHour].length + "]번째 줄 : " + JSON.stringify(time))
    }

    for(let i=StartHour+1; i< EndHour; i++){
      if(this.studytime[i].length > 0){
        ErrorTime.push(index + "번째 데이터[" + i + "]번째 줄 : " + JSON.stringify(time));
      }
    }

    return {
      status : ErrorTime.length > 0 ? false : true,
      msg : ErrorTime.length > 0 ? ErrorTime : index + "번째 데이터 등록성공"
    }
  }

  difftime(TimeData) {
    console.log(TimeData[0].end - TimeData[0].start);
    
    // 예외처리
    // TimeData.forEach((time, index) => console.log(this.checkInTime(time, index)));

    // 객체일 경우
    // if (!Array.isArray(TimeData)) {
    //   return this.pushTime(TimeData);
    // }

    // 배열일 경우
    // TimeData.forEach(time => this.pushTime(time));
    // return this.studytime;
  }
};
