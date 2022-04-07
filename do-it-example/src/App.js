import React from 'react';
import TodaysPlan from './03/TodaysPlans';
import PropsComponent from './03/PropsComponent';
import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent';
import ChildComponent2 from './03/ChildComponent2';
import DefaultPropsComponent from './03/DefaultPropsComponent';
import StateExample from './03/StateExample';
import ForceUpdateExample from './03/ForceUpdateExample';
import Counter from './03/Counter2';
import NewCounter from './03/NewCounter';
import Todolist from './03/Todolist';
import CounterApp from './03/CounterApp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    //bind를 사용하면 increateCount함수가 호출되는 this 범위가 App 컴포넌트에 묶이게 된다.
    //bind함수를 constructor에 모아두면 매번 render함수를 호출할때 마다 새로 작성하지 않아도 된다.
    return <Counter count={this.state.count} onAdd={this.increaseCount.bind(this)}/>;
  }
}

export default App;
