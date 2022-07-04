import Location from './Location';
import Date from './Date';
import Time from './Time';

function LocationTimeDate({ loc, time, date }) {
  return (
    <div className="locationTimeDate-container">
      <Location loc={loc} />
      <div className="timeDate-Container">
        <Time time={time} />
        <Date date={date} />
      </div>
    </div>
  );
}

export default LocationTimeDate;
