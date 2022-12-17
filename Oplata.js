class OPLATA{
    htmlOPLATA = '';
    render(){
        this.htmlOPLATA =`
        <div class = "Basket">
        hello
        </div>
        `
    ROOT_OPLATA.innerHTML=this.htmlOPLATA;
    }
    
}

const OplataPage = new OPLATA();
OplataPage.render();


class OPLATA_Header {
    render(){
        const html = `
            <div class="LK_header-container">
                <div id = "LK_sidebar">
                    <div class = "LK_toggle-btn" onclick="LK_openMenu()">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                    <li>Корзина</li>
                        <li><a href="/">Главная</a></li>
                        <li><a onclick="headerPage.handlerOpenShoppingPage();">Личный кабинет</a></li>
                        <li>История заказов</li>
                        <li>Настроить профиль</li>
                        <li>Выйти</li>
                    </ul>

                </div>
                Welcome to Some Shop

            </div>
        `;

        ROOT_OPLATA_HEADER.innerHTML = html;
    }
    
}
function LK_openMenu(){
    document.getElementById("LK_sidebar").classList.toggle('active');
}
const OPLATA_headerPage = new OPLATA_Header;
OPLATA_headerPage.render();
