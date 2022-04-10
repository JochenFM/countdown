const countdown = () => {
    const countDate = new Date("April 19, 2022 00:00:00").getTime();//I can set date to which it counts down; getTime converts in ms
    const now = new Date().getTime();//current time/date
    const gap = countDate - now;//the difference between future opening date and now

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);

    document.querySelector(".day").innerText = textDay
    document.querySelector(".hour").innerText = textHour
    document.querySelector(".minute").innerText = textMinute
    document.querySelector(".second").innerText = textSecond



};

setInterval(countdown, 1000); //calling the function only once with countdown() would execute all of the abover only once, so we need setInterval method, every 1000ms