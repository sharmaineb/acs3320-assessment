// console.log('Number of swatches:', swatchCount);

document.addEventListener('DOMContentLoaded', function () {
    const swatchCount = 100;
    const swatchesContainer = document.querySelector('.swatches');

    function generateRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    for (let i = 0; i < swatchCount; i++) {
        const swatch = document.createElement('div');
        swatch.classList.add('swatch', 'add-to-cart', `color-${i}`);
        swatch.style.backgroundColor = generateRandomColor();
        swatch.dataset.color = `Color ${i}`;
        swatch.dataset.price = (Math.random() * 10).toFixed(2);

        swatchesContainer.appendChild(swatch);
    }
});

  