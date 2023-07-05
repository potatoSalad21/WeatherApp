export default function WeekDay({ forecastForDay, celsiusToggled }) {
  const weekDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  function convertToCel(temp) {
    return Math.round((temp - 32) * 5 / 9);
  }
  
  let date = new Date(forecastForDay.Date);
  const day = weekDays[date.getDay()];
  
  const dayPhrase = forecastForDay.Day.IconPhrase;

  const temp = forecastForDay.Temperature;
  let maxTemp = celsiusToggled ? convertToCel(temp.Maximum.Value) : temp.Maximum.Value;
  let minTemp = celsiusToggled ? convertToCel(temp.Minimum.Value) : temp.Minimum.Value;

  return (
    <li className="weekDay">
      <div className="info">
        <span>{day}</span>
        <div className="temp">{maxTemp}°/{minTemp}°</div>
      </div>
      <span className="phrase">{dayPhrase}</span>
    </li>
  );
}