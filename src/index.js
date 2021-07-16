import './styles.css';
import countdown from './js/components';
import Swal from 'sweetalert2';

const $form = document.querySelector('#date-form');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const date = document.querySelector('#date-input').value;

  if (new Date(date) < new Date()) {
    Swal.fire('Error', 'La fecha debe ser mayor a la fecha actual', 'error');
    return;
  }

  countdown(date, 'days', 'hours', 'minutes', 'seconds');
});

// countdown('Jul 16, 2021 05:19:00', 'days', 'hours', 'minutes', 'seconds');
// countdown('Aug 24, 2021 05:19:00', 'days', 'hours', 'minutes', 'seconds');
