import React, { Component } from 'react';
import Weeker from './Weeker';
import Calendar from './Calendar';
import MessageBox from './MessageBox';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            booking: null,
            showConfirm: false,
            calendar: new Calendar()
        }

        this.bookingHandler = this.bookingHandler.bind(this);
    }

    prevHandler = (e) => {
        e.preventDefault();
        let newState = { ...this.state };
        newState.calendar.previousWeek();
        this.setState(newState);
    }

    nextHandler = (e) => {
        e.preventDefault();
        let newState = { ...this.state };
        newState.calendar.next();
        this.setState(newState);
    }

    bookingHandler = (e) => {
        e.preventDefault();
        if (this.state.booking !== null) {
            return;
        }

        let newState = { ...this.state };
        newState.showConfirm = true;
        newState.booking = {
            day: e.target.dataset.day,
            id: e.target.dataset.id
        };

        this.setState(newState);

    }

    msgHandler = (e) => {
        e.preventDefault();
        let { day, id } = this.state.booking;
        const booked = !this.state.calendar.currentWeek.days[day].parts[id].booked;
        let newState = { ...this.state };
        newState.calendar.currentWeek.days[day].parts[id].booked = booked;
        newState.haveBooking = true;
        newState.showConfirm = false;

        this.setState(newState);
    }

    render() {
        return (
            <div className="main">
                {this.state.showConfirm &&
                    <MessageBox msgHandler={this.msgHandler} />
                }

                <Weeker calendar={this.state.calendar}
                    bookingHandler={this.bookingHandler}
                    nextHandler={this.nextHandler}
                    prevHandler={this.prevHandler}
                />
            </div>
        );
    }
}

export default Main;