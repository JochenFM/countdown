const countdown = () => {
    const countDate = newDate("April 19, 2022 00:00:00").getTime()//I can set date to which it counts down; getTime converts in ms
    const now = newDate().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

};


countdown();