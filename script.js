const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', function () {
  const isDark = document.body.classList.toggle('dark');
  themeBtn.textContent = isDark ? '☀️ โหมดสว่าง' : '🌙 โหมดมืด';
});

const moreBtn = document.getElementById('moreBtn');
const moreBox = document.getElementById('moreBox');

moreBtn.addEventListener('click', function () {
  const isOpen = moreBox.classList.toggle('open');
  moreBtn.textContent = isOpen ? 'ย่อกลับ' : 'อ่านเพิ่มเติม';
});
