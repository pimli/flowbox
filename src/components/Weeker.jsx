import React from 'react';
import Week from './Week';

const Weeker = ({ calendar, bookingHandler, nextHandler, prevHandler }) => {
    let prev = <div className="big-link disabled" >Previous</div>;

    if (calendar.currentWeek.id > 1) {
        prev = <div onClick={prevHandler} className="big-link" >Previous</div>;
    }

    return (
        <div id="weeker">
            <div className="week-header">

                {prev}
                <h1>Week {calendar.currentWeek.id}</h1>
                <div onClick={nextHandler} className="big-link" >Next</div>
            </div>

            <Week week={calendar.currentWeek} bookingHandler={bookingHandler} />
        </div>
    );
}

export default Weeker;