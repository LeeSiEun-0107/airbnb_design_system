import TodaysPlan from './TodaysPlans';

function TodaysPlanApp(props) {
  const { onButtonClick, hasPlan } = props;
  return (
    <div className="body">
      {hasPlan ? <TodaysPlan /> : null}
      <button onClick={onButtonClick}>계획없음</button>
    </div>
  );
}
