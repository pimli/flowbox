import React from 'react';
import Day from './Day';

const Week = ({ week, bookingHandler }) => {
    let weeks = week.days.map((day, i) => <Day day={day} key={i} bookingHandler={bookingHandler} />);

    return (
        <div className="week">
            {weeks}
        </div>
    );
}

export default Week;