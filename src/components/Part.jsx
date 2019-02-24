import React from 'react';

const Part = ({ part, day, bookingHandler, disabled }) => {
    let classStr = part.booked ? 'part selected' : 'part';

    return (
        <div className="part-container">

            {
                disabled ||
                <button className={classStr} onClick={bookingHandler} data-id={part.id} data-day={day} >
                    {part.label}
                </button>
            }

            {disabled && <button className="part-disabled">Closed</button>}

        </div>

    );
}

export default Part;