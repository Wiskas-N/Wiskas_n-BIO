const style = document.createElement('style');
style.textContent = `
    * {
        cursor: none !important;
    }
    
    a, button, input, textarea, select, label, 
    [role="button"], [onclick], [tabindex]:not([tabindex="-1"]) {
        cursor: none !important;
    }
`;
document.head.appendChild(style);

const cursorDot = document.createElement('div');

cursorDot.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transform: translate(-50%, -50%);
    transition: width 0.2s ease, height 0.2s ease;
`;

document.body.appendChild(cursorDot);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let dotX = 0;
let dotY = 0;

const dotSpeed = 0.3;

function updateCursor() {
    dotX += (mouseX - dotX) * dotSpeed;
    dotY += (mouseY - dotY) * dotSpeed;

    cursorDot.style.left = `${dotX}px`;
    cursorDot.style.top = `${dotY}px`;
    
    requestAnimationFrame(updateCursor);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

const interactiveElements = ['a', 'button', 'input', 'textarea', 'select', 'label', '[role="button"]'];


document.addEventListener('mousedown', () => {
    cursorDot.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
});

document.addEventListener('mouseout', (e) => {
    if (!e.relatedTarget && e.clientY <= 0) {
        cursorDot.style.opacity = '0';
    }
});

document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity = '1';
});

updateCursor();

window.addEventListener('resize', () => {
    cursorDot.style.display = 'none';
    
    setTimeout(() => {
        cursorDot.style.display = 'block';
    }, 10);
});
