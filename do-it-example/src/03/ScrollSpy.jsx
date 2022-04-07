import React, { Component } from 'react';

export default class ScrollSpy extends Component.PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    //윈도우의 스크롤 이벤트를 감지해 checkposition함수 실행
    window.addEventListener('scroll', this.checkPosition);
  }

  setRef(ref) {
    //ref프로퍼티에서 반환된 객체를 컴포넌트에 할당
    this.ref = ref;
  }

  checkPosition() {
    //DOM 객체의 위치가 스크롤 화면 안팎인지 측정하고 있음
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }

  componentDidMount() {
    this.checkPosition();
  }

  //컴포넌트가 소멸할 때 화면 스크롤 감시 함수를 메모리에서 제거
  ComponentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition);
  }
  render() {
    return <div ref={this.setRef} />;
  }
}
