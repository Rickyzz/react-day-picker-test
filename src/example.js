import React from "react";
import moment from "moment";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import { formatDate, parseDate } from "react-day-picker/moment";

export default class Sender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined
    };
  }
  handleDayChange = (day) => {
    console.log("chosenDate=" + day);
    let dfinal = moment(day).format(FORMAT);
    console.log("final answer = " + dfinal);
    this.setState({ selectedDay: day });
  };
  render() {
    let startDate = "2021-09-20";

    return (
      <DayPicker onDayChange={this.handleDayChange} startDate={startDate} />
    );
  }
}

class DayPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined
    };
  }

  handleDayChangeOld = (day) => {
    let { startDate } = this.props;
    console.log(startDate);
    this.setState({ selectedDay: day });
  };

  render() {
    let { onDayChange, startDate } = this.props;
    var date = moment(startDate).format(FORMAT);
    console.log("start");
    console.log(date);
    return (
      <div>
        <p>In English (default):</p>
        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          format={FORMAT}
          placeholder={date}
          //placeholder={`${formatDate(new Date(2021, 10, 22), FORMAT)}`}
          onDayChange={onDayChange}
          inputProps={{ style: { width: 400 } }}
          dayPickerProps={
            {
              //month: new Date(2018, 10),
              //showWeekNumbers: true,
              //todayButton: 'Today',
            }
          }
        />
      </div>
    );
  }
}

const FORMAT = "yyyy-MM-DD";
