export const debounce = (func, ms = 300) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, ms);
    };
};
export const errorMessage = () => {
    let errorMsg = document.querySelector('.error-msg');
    if (!errorMsg) {
        const table = document.querySelector('table');
        table.insertAdjacentHTML('afterend', '<p class="error-msg" style="color:red; text-align:center">Произошла ошибка, данных нет!</p>');
        errorMsg = document.querySelector('.error-msg');
    }
    setTimeout(() => {
        errorMsg.remove();
    }, 5000);
};