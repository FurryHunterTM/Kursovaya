class LK{
    i=0;
    htmlUser = ''; 
    render(){
        var FIO = USERS[this.i].name.split(' ');
        this.htmlUser=`
        <div class = "Profile" >
            <div class = "user__data" >
                <img class ="user-element__img" src = "${USERS[this.i].img}"/>
            </div>
            <div class = "user__data"> Личные Данные
                <div class = "user__FIO"> 
                    <span >Фамилия:<input class="text-field__input" value="${FIO[1]}" readonly> </span>
                    <span >Имя: <input class="text-field__input" value="${FIO[0]}" readonly></span>
                    <span >Отчество: <input class="text-field__input" value="${FIO[2]}" readonly> </span>
                    <span >Почта: <input class="text-field__input" value="${FIO[2]}" readonly> </span>
                    <span >Пароль: <input class="text-field__input" value="${FIO[2]}" readonly> </span>
                </div>
            </div>
        </div>
        `
    ROOT_LK.innerHTML=this.htmlUser;
    }
    
}
const userPage = new LK();
userPage.render();

class LK_Header {
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
                    <li>Личный кабинет</li>
                        <li><a href="/">Главная</a></li>
                        <li><a onclick="headerPage.handlerOpenShoppingPage();">Корзина</a></li>
                        <li>История заказов</li>
                        <li>Настроить профиль</li>
                        <li>Выйти</li>
                    </ul>

                </div>
                Welcome to Some Shop

            </div>
        `;

        ROOT_LK_HEADER.innerHTML = html;
    }
    
}
function LK_openMenu(){
    document.getElementById("LK_sidebar").classList.toggle('active');
}
const LK_headerPage = new LK_Header;
LK_headerPage.render();