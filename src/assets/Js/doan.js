
const images = document.querySelectorAll('.rounded-image');
const description = document.querySelector('.meta');

images.forEach(image => {
  image.addEventListener('click', function() {
    description.textContent = this.dataset.description;
  });
});

