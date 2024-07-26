import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateCalendar } from '@mui/x-date-pickers';
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import './TripCalendar.scss';
export interface HighlightedDays {
  [key: string]: number;
}


const TripCalendar = (props: { tripCounts: HighlightedDays, onMonthChange: Function, isLoading: boolean, onDateChange: Function }) => {

  const [selectedDate, setSelectedDate] = useState("" as string);

  /**On Changing Date */
  const onDateChange = (data: Date) => {
    let d = formatDate(new Date(data), 'yy-mm-dd');
    setSelectedDate(d);
    props.onDateChange(d)
  }

  function formatDate(dd: Date, format: string) {
    var value = "";
    var date = dd.getDate() > 9 ? dd.getDate() : "0" + dd.getDate();
    var month =
      dd.getMonth() + 1 > 9 ? dd.getMonth() + 1 : "0" + (dd.getMonth() + 1);
    var year = dd.getFullYear();
    if (typeof format != "undefined" && format) {
      var separator = format.indexOf("-") > 0 ? "-" : "/";
      var format_arr =
        format.indexOf("-") > 0 ? format.split("-") : format.split("/");
      var dt_arr = [];
      if (format_arr.indexOf("dd") != -1) {
        dt_arr[format_arr.indexOf("dd")] = date;
      }
      if (format_arr.indexOf("mm") != -1) {
        dt_arr[format_arr.indexOf("mm")] = month;
      }
      if (format_arr.indexOf("yy") != -1) {
        dt_arr[format_arr.indexOf("yy")] = year;
      }
      value = dt_arr.join(separator);
    } else {
      value = date + "/" + month + "/" + year;
    }
    return value;
  }

  const handleMonthChange = (date: Dayjs) => {
    props.onMonthChange(dayjs(date).month() + 1, dayjs(date).year());
  }
  function CustomDay(props: PickersDayProps<Dayjs> & { highlightedDays?: HighlightedDays }) {
    const { highlightedDays, day, outsideCurrentMonth, ...other } = props;

    let currentDay = `${day.year()}-${day.month() + 1 > 9 ? day.month() + 1 : '0' + (day.month() + 1)}-${day.date() > 9 ? day.date() : '0' + day.date()}`;
    const isAvailable = highlightedDays?.[currentDay] ? true : false;
    return (
      <div style={{ textAlign: 'center', position: 'relative' }} >
        <PickersDay  {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} disabled={!isAvailable} style={{ backgroundColor: !isAvailable ? '#eee' : '' }}>
          <div className="day-wrapper">{day.date()}</div>
          <div className={`day ${currentDay == selectedDate ? 'selected-day' : 'no-day-selected'}`} >
            {isAvailable ? highlightedDays?.[currentDay] + ' Bookings' : ''}
          </div>
        </PickersDay>

      </div>

    );
  }
  const dayOfWeekFormatter = (date: Dayjs) => {
    // Format the day of the week to a short string (e.g., Mon, Tue)
    return dayjs(date).format('ddd').charAt(0).toUpperCase() + dayjs(date).format('ddd').slice(1);
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        disableHighlightToday
        onMonthChange={handleMonthChange}
        dayOfWeekFormatter={dayOfWeekFormatter}
        slots={{
          day: CustomDay,
        }}
        slotProps={{
          day: { highlightedDays: props.tripCounts }
        } as any}
        onChange={onDateChange}
        views={['day']}
        loading={props.isLoading}
      />
    </LocalizationProvider>
  )
}

export default TripCalendar