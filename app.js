const submit = document.querySelector('#submit');
const labs = document.querySelectorAll('.lab');
const selection = document.querySelector('#selection');
const section1 = document.querySelector('#section1')
const section2 = document.querySelector('#section2')
submit.addEventListener('click', function() {
    selection.innerHTML = `You selected ${document.querySelector('input[name="RatingOpt"]:checked').value} of 5`;
    section1.classList.add('show');
    section2.classList.remove('show');
})

for (let i=0; i < labs.length; i++) {
    labs[i].addEventListener('click', function(){
        labs[i].classList.add('bcolor');
        for(let j = 0; j < labs.length; j++) {
            if(j !== i){
                labs[j].classList.remove('bcolor');
            }
        }
    })
    
}
