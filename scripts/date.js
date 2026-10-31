//Dynamic Copyright for Year and Last modified in footer//
document.addEventListener('DOMContentLoaded', () => {
    //for copyright year
    const yearEL = document.getElementById('currentyear');
    if (yearEL) {
        yearEL.textContent = new Date().getFullYear();
    }

    //Last modified date
    const modifiedEl = document.getElementById('lastModified');
    if (modifiedEl) {
        //will return MM/DD/YYY, time
        modifiedEl.textContent = document.lastModified;
    }
});