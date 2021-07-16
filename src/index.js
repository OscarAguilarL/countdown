import './styles.css';
import countdown from './js/components';

const $form = document.querySelector('#date-form');
const $input = document.querySelector('#date-input');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const date = $input.value;
  countdown(date, 'days', 'hours', 'minutes', 'seconds');
});

// countdown('Jul 16, 2021 05:19:00', 'days', 'hours', 'minutes', 'seconds');
// countdown('Aug 24, 2021 05:19:00', 'days', 'hours', 'minutes', 'seconds');
