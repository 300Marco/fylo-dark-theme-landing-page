const activeMenu = {
    body: document.querySelector('body'),
    navigationMenu: document.querySelector('.header-box .navigation-menu'),
    buttonMenu: document.querySelector('.header-box .section-logo .button-menu span'),
    run() {
        if(!this.navigationMenu.className.includes('active')) {
            this.body.classList.add('active');
            this.buttonMenu.style.transform = 'scaleX(-1)'
            this.navigationMenu.classList.add('active');
        } else if(this.navigationMenu.className.includes('active')) {
            this.body.classList.remove('active');
            this.buttonMenu.style.transform = 'scaleX(1)'
            this.navigationMenu.classList.remove('active');
        }
    }
}