document.addEventListener('DOMContentLoaded', () => {
  console.log('Craftyy Corner site is ready.');

  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    product.addEventListener('mouseover', () => {
      product.style.transform = 'scale(1.05)';
      product.style.transition = 'transform 0.3s ease';
    });

    product.addEventListener('mouseout', () => {
      product.style.transform = 'scale(1)';
    });
  });
});
