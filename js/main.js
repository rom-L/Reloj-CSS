"use strict";

const HOUR_HAND = document.querySelector(".hour-hand");
const MINUTE_HAND = document.querySelector(".minute-hand");
const SECOND_HAND = document.querySelector(".second-hand");

function updateTime() {
    //consigue los valores en tiempo real
    const DATE = new Date();
    const SECONDS = (DATE.getSeconds() / 60) * 360 - 90;
    const MINUTES = (DATE.getMinutes() / 60) * 360 - 90;
    const HOURS = ((DATE.getHours() + DATE.getMinutes() / 60) / 12) * 360 - 90;

    HOUR_HAND.style.transform = `rotate(${HOURS}deg)`;
    MINUTE_HAND.style.transform = `rotate(${MINUTES}deg)`;
    SECOND_HAND.style.transform = `rotate(${SECONDS}deg)`;
}


setInterval(updateTime, 1000);