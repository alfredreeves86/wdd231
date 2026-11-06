//Dynamic Copyright for Year and Last modified in footer//
//Used date modified from the root.//
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