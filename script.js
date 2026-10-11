document.addEventListener('DOMContentLoaded', () => {
  // Плавный скролл по якорям
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Клик по кнопке бронирования
  const bookBtn = document.querySelector('.btn-book');
  if (bookBtn) {
    bookBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Дякуємо! Форма бронювання столика відкриється незабаром.');
    });
  }

  // Переключение точек в отзывах
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });
});