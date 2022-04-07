import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    //변수 state 초기값을 this.state에 객체 형태로 정의
    this.state = {
      loading: true,
      formData: 'no data',
    };

    this.handleData = this.handleData.bind(this);
    //4초 후 handleData함수 호출
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    const { formData } = this.state; //this.state를 이용해 state 깂에 접근

    this.setState({
      //this.setState를 이용해 stae 값을 변경
      loading: false,
      formData: data + formData,
    });
  }

  render() {
    return (
      <div>
        <span> 로딩중 : {String(this.state.loading)}</span>
        <span>결과 : {this.state.formData} </span>
      </div>
    );
  }
}

export default StateExample;
