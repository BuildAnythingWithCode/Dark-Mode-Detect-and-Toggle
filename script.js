if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.className = 'dark';
  document.querySelector('.theme-name').textContent = 'dark';
} else {
  document.documentElement.className = 'light';
  document.querySelector('.theme-name').textContent = 'light';
}

function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'light' ? 'dark' : 'light';
  root.className = newTheme;
  document.querySelector('.theme-name').textContent = newTheme;
  document.querySelector('.initial-text').classList.add('hidden');
}

document.querySelector('.theme-toggle').addEventListener('click', setTheme);
