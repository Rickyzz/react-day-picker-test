import React from "react";

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
    console.log(day);
    this.setState({ selectedDay: day });
  };
  render() {
    return <Example onDayChange={this.handleDayChange} />;
  }
}

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined
    };
  }

  handleDayChange = (day) => {
    console.log(day);
    this.setState({ selectedDay: day });
  };

  render() {
    return (
      <div>
        <p>In English (default):</p>
        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          format={FORMAT}
          placeholder={`${formatDate(new Date(2021, 10, 22), FORMAT)}`}
          onDayChange={this.handleDayChange}
        />
      </div>
    );
  }
}

const FORMAT = "yyyy-MM-DD";
