import Swal from 'sweetalert2';
const d = document;

const countdown = (limitDate, daysId, hoursId, minutesId, secondsId) => {
  const $days = document.querySelector(`#${daysId}`),
    $hours = document.querySelector(`#${hoursId}`),
    $minutes = document.querySelector(`#${minutesId}`),
    $seconds = document.querySelector(`#${secondsId}`),
    countDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let currentTime = new Date().getTime(),
      limitTime = countDate - currentTime,
      days = ('0' + Math.floor(limitTime / (1000 * 60 * 60 * 24))).slice(-2),
      hours = (
        '0' + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        '0' + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ('0' + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);

    $days.innerText = days;
    $hours.innerText = hours;
    $minutes.innerText = minutes;
    $seconds.innerText = seconds;

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $days.innerText = '00';
      $hours.innerText = '00';
      $minutes.innerText = '00';
      $seconds.innerText = '00';
      Swal.fire('', 'Ha terminado la cuenta atrás', 'success');
    }
  }, 1000);
};

export default countdown;
