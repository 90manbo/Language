const toggleBtn = document.querySelector('.navbar_toggleBtn');
const list = document.querySelector('.navbar_list');
const sns = document.querySelector('.navbar_sns');

toggleBtn.addEventListener('click', ()=>{
    list.classList.toggle('active');
    sns.classList.toggle('active');
});