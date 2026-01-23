const showBtn = document.getElementById('showCurrentDuties');
const currentDuties = document.querySelector('.current-duties');

showBtn.onclick = () => {
    currentDuties.classList.toggle('hidden');
    
    showBtn.textContent = currentDuties.classList.contains('hidden') 
        ? '- Less Info'
        : '+ More Info';
};