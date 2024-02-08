// Sidebar = document.querySelector('.navbar-collapse')
// BurgerMenu = document.querySelector('.navbar-toggler')
// ExitButton = document.querySelector('.nav-wrapper-exit')
// BgDark = document.querySelector('#nav-bg-collapse')
// NavOption = document.querySelector('.nav-item-option')
// NavOption1 = document.querySelectorAll('.nav-item-option')[1]
// IconDown = document.querySelector('#arrow-down')
// IconDown1 = document.querySelectorAll('#arrow-down')[1]

// event saat mobile
// BurgerMenu.addEventListener('click',function() {
//     Sidebar.style.display = 'block'    
//     BgDark.classList.add('bg-collapse')
//     Sidebar.style.zIndex = '10'
// })
// ExitButton.addEventListener('click',function() {
//     Sidebar.style.display = 'none'
//     BgDark.classList.remove('bg-collapse')
//     Sidebar.style.zIndex = '0'
// })

// // event arrow nav option
// NavOption.addEventListener('click',function() {
//     if (NavOption.classList.contains('show')) {
//         IconDown.style.transform = 'rotate(180deg)'
//     }
//     NavOption.addEventListener('mouseout',function() {
//         IconDown.style.transform = 'rotate(360deg)'
//     })
// })
// NavOption1.addEventListener('click',function() {
//     if (NavOption1.classList.contains('show')) {
//         IconDown1.style.transform = 'rotate(180deg)'
//     }
//     NavOption1.addEventListener('mouseout',function() {
//         IconDown1.style.transform = 'rotate(360deg)'
//     })
// })
// =============================
export function OpenMenu() {
    let Sidebar = document.querySelector('.navbar-collapse');
    let BurgerMenu = document.querySelector('.navbar-toggler');
    let BgDark = document.querySelector('#nav-bg-collapse')
    // event
    BurgerMenu.addEventListener(click,function() {
        Sidebar.style.display = 'block'    
        BgDark.classList.add('bg-collapse')
        Sidebar.style.zIndex = '10'
    })

}
export function CloseMenu() {
    let ExitButton = document.querySelector('.nav-wrapper-exit');
    let BurgerMenu = document.querySelector('.navbar-toggler');
    let BgDark = document.querySelector('#nav-bg-collapse')
    // event
    ExitButton.addEventListener(click,function() {
        Sidebar.style.display = 'none'
        BgDark.classList.remove('bg-collapse')
        Sidebar.style.zIndex = '0'
    })

}
