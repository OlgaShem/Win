/*Popup*/
document.querySelectorAll('.button-join').forEach(button => {
    button.addEventListener('click', function () {
        let popup = document.querySelector('.popup').classList.add('active');
    });
});

const popupClose = document.querySelector('.popup-close');
popupClose.addEventListener('click', function () {   
    const popup = document.querySelector('.popup').classList.remove('active');
});
   

const resetPas = document.querySelector('.form-link')
resetPas.addEventListener('click', function () {   
    const resetPas = document.querySelector('#login-form').classList.remove('active');
    const forgotForm = document.querySelector('.forgot-form').classList.add('active');
    const toggle = document.querySelector('.toggle-container').classList.remove('active');
});

const back = document.querySelector('.button-back')
back.addEventListener('click', function () {   
    const resetPas = document.querySelector('#login-form').classList.add('active');
    const forgotForm = document.querySelector('.forgot-form').classList.remove('active');
    const toggle = document.querySelector('.toggle-container').classList.add('active');
});

const sendPas = document.querySelector('.button-send');
sendPas.addEventListener('click', function () {   
    pasAlert = document.querySelector('.password-alert').classList.add('active');
});


const close = document.querySelector('.close');
close.addEventListener('click', function () {  
    pasAlert = document.querySelector('.password-alert').classList.remove('active');
}); 

/*Mobile menu*/

document.querySelector('.mobile-menu').addEventListener('click', toggleMenuAndIcon);

function toggleMenuAndIcon() {
    const icon = document.querySelector('.mobile-menu');
    const menu = document.querySelector('.header-menu');
    
    const isMenuIcon = icon.src.includes('menu-mob.svg');
        
    icon.src = isMenuIcon ? "img/close.svg" : "img/menu-mob.svg";

      
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
/*Mobile menu*/

document.querySelector('.mobile-menu').addEventListener('click', toggleMenuAndIcon);

function toggleMenuAndIcon() {
    const icon = document.querySelector('.mobile-menu');
    const menu = document.querySelector('.header-menu');
    
    const isMenuIcon = icon.src.includes('menu-mob.svg');
        
    icon.src = isMenuIcon ? "img/close.svg" : "img/menu-mob.svg";

      
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

/*Form toggle*/
 function toggleSwitch() {
    const toggleContainer = document.querySelector('.toggle-container');
    const toggleButton = document.querySelector('.toggle-button');
    const labelLeft = document.getElementById('labelLeft');
    const labelRight = document.getElementById('labelRight');
    const loginForm = document.getElementById('login-form');
    const regForm = document.getElementById('registration-form');

    if (labelLeft.classList.contains('active')) {
        labelLeft.classList.remove('active');
        labelRight.classList.add('active');
        loginForm.classList.remove('active');
        regForm.classList.add('active');
        toggleContainer.classList.add('right');
    } else {
       
        labelLeft.classList.add('active');
        labelRight.classList.remove('active');
        loginForm.classList.add('active');
        regForm.classList.remove('active');
        toggleContainer.classList.remove('right');
    }
}
/*Password hide/show */
document.querySelectorAll('.toggle-icon').forEach(icon => {
        icon.addEventListener('click', function () {
            let passwordInput = this.previousElementSibling; 
            if (passwordInput && passwordInput.classList.contains('password-field')) {
                passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
            }

            if (this.src.includes('eye.svg')) {
                this.src = 'img/eye-off.svg';
            } else {
                this.src = 'img/eye.svg';
            }
        });
    });

/*FAQ cards*/
function toggleCard(card) {
    card.classList.toggle("open");
  }
  

document.querySelector('.faq-button').addEventListener('click', function() {
    const hiddenCards = document.querySelectorAll('.faq-card.hidden');
    const allCards = document.querySelectorAll('.faq-card');

   const isExpanded = hiddenCards.length === 0;

    allCards.forEach((card, index) => {
        if (index >= 6) { 
            card.classList.toggle('hidden', isExpanded);
        }
    });

    this.textContent = isExpanded ? 'Show more' : 'Show Less';
});





