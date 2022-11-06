class Header {
    handlerOpenShoppingPage(){
        shoppingPage.render();
    }
    render(){
        const html = `
            <div class="header-container">
                <div id = "sidebar">
                    <div class = "toggle-btn" onclick="openMenu()">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        <li>Меню</li>
                        <li><a href="./auth.html">Личный кабинет</a></li>
                        <li><a onclick="headerPage.handlerOpenShoppingPage();">Корзина</a></li>
                        <li><a href="/">Главная</a></li>
                    </ul>     
                </div>
                Welcome to Some Shop
            </div>
        `;

        ROOT_HEADER.innerHTML= html;
    }
}
function openMenu(){
    document.getElementById("sidebar").classList.toggle('active');
}
const headerPage = new Header;
headerPage.render();