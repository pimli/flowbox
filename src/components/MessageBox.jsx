import React from 'react';

const MessageBox = ({ msgHandler }) => {
    return (
        <div className="message-box">
            <div className="msg">
                <div>
                    You wish to book this laundry slot.
                    Send us your name and your email and we'll confirm your booking.
            </div>

                <form id="booking" name="booking" onSubmit={msgHandler} noValidate>

                    <input id="name" type="text" required placeholder="Name"></input>
                    <input id="email" type="text" required placeholder="E-mail"></input>

                    <input type="submit" value="Confirm" />
                </form>

            </div>

        </div>
    );
}

export default MessageBox;