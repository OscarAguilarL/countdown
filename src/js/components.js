import '../css/components.css';

const $app = document.querySelector('#app');

export const counter = () => {
  const counterHtml = `
    <div class="counter-container">
      <div class="card">
        <h2 id="days" class="number">00</h2>
        <p class="word">Días</p>
      </div>
      <div class="card">
        <h2 id="hours" class="number">00</h2>
        <p class="word">Horas</p>
      </div>
      <div class="card">
        <h2 id="minutes" class="number">00</h2>
        <p class="word">Minutos</p>
      </div>
      <div class="card">
        <h2 id="seconds" class="number">00</h2>
        <p class="word">Segundos</p>
      </div>
    </div>
  `;

  const div = document.createElement('div');
  div.innerHTML = counterHtml;
  $app.append(div.firstElementChild);
  return div.firstElementChild;
};
