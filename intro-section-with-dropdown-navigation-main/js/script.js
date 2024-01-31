sidebar = document.querySelector('.navbar-collapse')
burgerMenu = document.querySelector('.navbar-toggler')
exitButton = document.querySelector('.nav-wrapper-exit')
body = document.querySelector('body')
bgDark = document.querySelector('#nav-bg-collapse')
navOption = document.querySelector('.nav-item-option')
navOption1 = document.querySelectorAll('.nav-item-option')[1]
iconDown = document.querySelector('#arrow-down')
iconDown1 = document.querySelectorAll('#arrow-down')[1]

// event saat mobile
burgerMenu.addEventListener('click',function() {
    sidebar.style.display = 'block'    
    bgDark.classList.add('bg-collapse')
    sidebar.style.zIndex = '10'
})
exitButton.addEventListener('click',function() {
    sidebar.style.display = 'none'
    bgDark.classList.remove('bg-collapse')
    sidebar.style.zIndex = '0'
})

// event arrow nav option
navOption.addEventListener('click',function() {
    if (navOption.classList.contains('show')) {
        iconDown.style.transform = 'rotate(180deg)'
    }
    navOption.addEventListener('mouseout',function() {
        iconDown.style.transform = 'rotate(360deg)'
    })
})
navOption1.addEventListener('click',function() {
    if (navOption1.classList.contains('show')) {
        iconDown1.style.transform = 'rotate(180deg)'
    }
    navOption1.addEventListener('mouseout',function() {
        iconDown1.style.transform = 'rotate(360deg)'
    })
})