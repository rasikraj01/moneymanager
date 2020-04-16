import React, {useEffect, useState} from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import {Calendar} from 'react-modern-calendar-datepicker';

function ExpenseCalendar() {
    const [selectedDay, setSelectedDay] = useState(null);

    return (
        <div>
            <Calendar value={selectedDay} onChange={setSelectedDay} shouldHighlightWeekends/>
        </div>
  );
}

export default ExpenseCalendar;