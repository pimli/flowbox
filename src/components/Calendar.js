const WEEK_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
let weekIndex = 0;

class Calendar {

    constructor() {
        this.weeks = [{}];
        this.weeks.push(this.createWeek());
    }

    next() {
        let currentWeekNumber = this.currentWeek.id;

        if (currentWeekNumber + 1 < this.weeks.length) {
            this.currentWeek = this.weeks[currentWeekNumber + 1];
        } else {
            this.weeks.push(this.createWeek());
        }

    }

    previousWeek() {
        let currentWeekNumber = this.currentWeek.id;

        if (currentWeekNumber > 1) {
            this.currentWeek = this.weeks[currentWeekNumber - 1];
        }
    }

    createWeek() {
        let week = {
            id: ++weekIndex,
            days: []
        };

        for (let i = 0; i < 7; i++) {
            week.days.push(this.createDay(i));
        }

        this.currentWeek = week;

        return week;
    }

    createDay(i) {
        let day = {
            label: WEEK_NAMES[i],
            id: i,
            disabled: i > 4,
            parts: [
                { id: 0, label: '6am - 9am', booked: false },
                { id: 1, label: '9am - 12', booked: false },
                { id: 2, label: '12 - 3pm', booked: false },
                { id: 3, label: '3pm - 6pm', booked: false }
            ]
        };

        return day;
    }


}

export default Calendar;