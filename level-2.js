document.getElementById('btn-count').addEventListener('click', function increaseCount(){ 
    count = gettheStoredValue();
    count = count + 1;
    const countNumber = document.getElementById('number');
    countNumber.innerText = `${count}`;
    localStorage.setItem('count', count);
    
})

const gettheStoredValue = () => {
    let savedNum = localStorage.getItem('count');
    let count = 0;
    count = JSON.parse(savedNum);
    return count;
}




