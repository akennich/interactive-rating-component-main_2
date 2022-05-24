const submit = document.querySelector('#submit');
const selection = document.querySelector('#selection');
const section1 = document.querySelector('#section1')
const section2 = document.querySelector('#section2')
submit.addEventListener('click', function() {
    selection.innerHTML = `You selected ${document.querySelector('input[name="RatingOpt"]:checked').value} of 5`;
    section1.classList.add('show');
    section2.classList.remove('show');
})