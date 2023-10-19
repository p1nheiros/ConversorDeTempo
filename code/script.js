function convertMinutes() {
    var minutes = parseInt(document.getElementById('minutes').value);
    var hours = Math.floor(minutes / 60);
    var remainingMinutes = minutes % 60;
    document.getElementById('result-minutes').innerHTML = `Horas: ${hours} | Minutos: ${remainingMinutes}`;
}

function convertDays() {
    var days = parseInt(document.getElementById('days').value);
    var years = Math.floor(days / 365);
    var remainingDays = days % 365;
    var months = Math.floor(remainingDays / 30);
    remainingDays = remainingDays % 30;
    document.getElementById('result-days').innerHTML = `Anos: ${years} | Meses: ${months} | Dias: ${remainingDays}`;
}

function reset() {
    document.getElementById('minutes').value = '';
    document.getElementById('result-minutes').innerHTML = '';
    document.getElementById('days').value = '';
    document.getElementById('result-days').innerHTML = '';
}