const shape = document.getElementById('shape');
const angleRange = document.getElementById('angleRange');
const angleValue = document.getElementById('angleValue');

function updateShape() {
    const angle = parseInt(angleRange.value);
    angleValue.textContent = angle + '°';
    const scale = 1 + (angle / 360);
    shape.style.transform = `scale(${scale})`;
}

angleRange.addEventListener('input', updateShape);
