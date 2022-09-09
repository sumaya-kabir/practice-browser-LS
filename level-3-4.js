const setInputValue = (id) => {
    const inputField = document.getElementById(id);
    const inputValue =inputField.value;
    inputField.value = '';
    return inputValue;
}


// save to LS
document.getElementById('name-save').addEventListener('click', function(){
    const name = setInputValue('name-field');
    localStorage.setItem('name', name);
});
document.getElementById('email-save').addEventListener('click', function(){
    const email = setInputValue('email-field');
    localStorage.setItem('email', email);
});
document.getElementById('message-save').addEventListener('click', function(){
    const message = setInputValue('message-field');
    localStorage.setItem('message', message);
});


// delete form LS
document.getElementById('name-delete').addEventListener('click', function(){
    const name = setInputValue('name-field');
    localStorage.removeItem('name', name);
});
document.getElementById('email-delete').addEventListener('click', function(){
    const email = setInputValue('email-field');
    localStorage.removeItem('email', email);
});
document.getElementById('message-delete').addEventListener('click', function(){
    const message = setInputValue('message-field');
    localStorage.removeItem('message', message);
});

// send all info together
const sendAll = () => {
    const name = setInputValue('name-field');
    const email = setInputValue('email-field');
    const message = setInputValue('message-field');

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
}

// clear ALL FROM LS
const reset = () => {
    localStorage.clear();
}
