const express = require('express')();

let destinations;
let weathers = [];

fetch("http://127.0.0.1:3001/destinations").then((data) => { data.json() }).then((data) => {
    destinations = data;
});

for (i in destinations)
{
    fetch(`https://freetestapi.com/apis/weathers?city=${i['city']}`).then((data) => { data.json() }).then((data) => {
        weathers.push(data);
    });
}



