const titleElement = document.querySelector('.title');
const textContent = titleElement.textContent.trim();
titleElement.innerHTML = '';
const animationDuration = 4; // Adjust the animation duration in seconds
const delayIncrement = 0.3; // Adjust the delay increment between letters

for (let i = 0; i < textContent.length; i++) {
  const letterSpan = document.createElement('span');
  letterSpan.textContent = textContent[i];
  letterSpan.style.display = 'inline-block';
  letterSpan.style.animation = `wave-motion ${animationDuration}s infinite cubic-bezier(0.36, 0.45, 0.63, 0.53) ${i * delayIncrement}s`;
  titleElement.appendChild(letterSpan);
}