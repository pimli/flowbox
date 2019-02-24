import React from 'react';
import Part from './Part';

const Day = ({ day, bookingHandler }) => {
    let parts = day.parts.map((part, i) => <Part part={part}
        day={day.id}
        key={i}
        bookingHandler={bookingHandler}
        disabled={day.disabled}
    />);

    return (
        <div className="day">
            <h4>{day.label}</h4>
            {parts}
        </div>
    );
}

export default Day;