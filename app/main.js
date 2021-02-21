// INICIALIZACIÓN

window.addEventListener('load', () => {
    renderLocation();
    renderDate();
    renderGreeting();
    renderBG();
});

window.onload = function () {
    setInterval(getTime, 1000);
}

// PINTADO DINÁMICO UBICACIÓN

let renderLocation = () => {
    let locationString = `${logData.userData.location}`;
    const location = document.querySelector('.clock_location');
    location.innerHTML = locationString;
}

// RELOJ

let getTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();

    let timeString = (hours < 10 ? '0' : '') + hours + ' : ' + (minutes < 10 ? '0' : '') + minutes + ' : ' + (seconds < 10 ? '0' : '') + seconds;

    document.querySelector('.clock').innerHTML = timeString;
}

// FECHA

let date = new Date();
let hours = date.getHours();
console.log(hours)


let renderDate = () => {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let dateFormat = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + (month + 1) + '/' + year;

    let dateString = dateFormat;
    document.querySelector('.clock_date').innerHTML = dateString;
}

// SALUDO

let renderGreeting = () => {
    let greetingString = [];

    if (hours > 22 & hours < 6) {
        greetingString.push(`Good Night, ${logData.userData.name}`)

    } else if (hours > 6 & hours < 14) {
        greetingString.push(`Good Morning, ${logData.userData.name}`)

    } else {
        greetingString.push(`Good Evening, ${logData.userData.name}`)
    }

    document.querySelector('#greet').innerHTML = greetingString;
}

// DEGRADADO DE FONDO

let renderBG = () => {

    if (hours >= 9 & hours <= 17) {
        document.body.style.background = "linear-gradient(0deg, rgba(151,233,234,1) 31%, rgba(45,196,253,1) 92%)";
        document.body.style.color = "rgb(69, 91, 96)"
    } else {
        switch (hours) {
            case 6:
                document.body.style.background = "linear-gradient(0deg, rgba(255,133,33,1) 27%, rgba(33,83,143,1) 84%)";
                break;
            case 7:
                document.body.style.background = "linear-gradient(0deg, rgba(253,187,45,1) 18%, rgba(34,193,195,1) 100%)";
                document.body.style.color = "rgb(69, 91, 96)"
                break;
            case 8:
                document.body.style.background = "linear-gradient(0deg, rgba(234,225,151,1) 15%, rgba(45,196,253,1) 92%)";
                document.body.style.color = "rgb(69, 91, 96)"
                break;
            case 18:
                document.body.style.background = "linear-gradient(0deg, rgba(255,133,33,1) 5%, rgba(42,155,176,1) 84%)";
                break;
            case 19:
                document.body.style.background = "linear-gradient(to bottom, rgb(213, 150, 255), rgb(255, 156, 126))";
                break;
            case 20:
                document.body.style.background = "linear-gradient(0deg, rgba(255,156,126,1) 0%, rgba(63,73,255,1) 100%)";
                break;
            case 21:
                document.body.style.background = "linear-gradient(0deg, rgba(202,92,155,1) 0%, rgba(37,40,149,1) 59%)";
                break;
            default:
                document.body.style.background = "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 51%, rgba(0,74,255,1) 100%)";
                break;
        }
    }
}