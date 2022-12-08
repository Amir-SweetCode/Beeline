/********** scroll **********/
(function () {
    const header = document.querySelector(".header__wrapper");
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add("header-fixed");
        } else {
            header.classList.remove("header-fixed");
        }
    };
})();

/************ burger hidden ***********/
(function () {
    const burgerMenu = document.querySelector(".burger-menu__btn");
    const burgerHidden = document.querySelector('.burger-hidden-menu');
    const burgerClose = document.querySelector('.burger-hidden__btn-close');
    burgerMenu.addEventListener('click', () => {
        burgerHidden.classList.add('show-burger');
    });
    burgerClose.addEventListener('click', () => {
        burgerHidden.classList.remove('show-burger');
    });
})();

(function () {
    const beeline = document.querySelector(".beeline-dropdown");
    const beelineList = document.querySelector(".burger-beeline__list");
    const arrow = document.querySelector(".beeline-arrow");
    const beelineTwo = document.querySelector(".beeline-dropdown__two");
    const beelineListTwo = document.querySelector(".burger-beeline__list__two");
    const arrowTwo = document.querySelector(".beeline-arrow__two");
    const beelineThree = document.querySelector(".beeline-dropdown__three");
    const beelineListThree = document.querySelector(".burger-beeline__list__three");
    const arrowThree = document.querySelector(".beeline-arrow__three");
    beeline.addEventListener("click", () => {
        beelineList.classList.toggle("burger-beeline__list__active");
        arrow.classList.toggle("beeline-arrow__active");
    });
    beelineTwo.addEventListener("click", () => {
        beelineListTwo.classList.toggle("burger-beeline__list__active");
        arrowTwo.classList.toggle("beeline-arrow__active");
    });
    beelineThree.addEventListener("click", () => {
        beelineListThree.classList.toggle("burger-beeline__list__active");
        arrowThree.classList.toggle("beeline-arrow__active");
    });
})();

/************* search hidden **************/
(function () {
    const searchHidden = document.querySelector('.search-hidden');
    const searchShowBtn = document.querySelector('.lower-menu__search_show');
    const searchHiddenClose = document.querySelector('.search-hidden__close');
    searchShowBtn.addEventListener('click', () => {
        searchHidden.classList.remove('search-hidden_show');
    });
    searchHiddenClose.addEventListener('click', () => {
        searchHidden.classList.add('search-hidden_show');
    });
})();

/*********** modal **********/
(function(){
    const modalDesc = document.getElementById("modal-desc");
    const modalDescClose = document.getElementById("modal-desc_close");
    const modalDescBack = document.getElementById("modal-desc_back");
    const modalDescLogin = document.getElementById("lower-menu__btn_modal");
    const btnModalMobile = document.getElementById('lower-menu__btn_modal_mobile');
    const iviBannerBtns = document.getElementById('ivi-banner__btns');
    const tariffButton = document.querySelector('.tariff__button');
    const tariffButtonClick = document.querySelector('.tariff__button_click');
    const serviceButton = document.querySelector('.service__button');
    const tariffMobile = document.querySelector('.tariff__mobile');
    const tariffMobileClick = document.querySelector('.tariff__mobile_click');
    const serviceMobile = document.querySelector('.service__mobile');

    modalDescLogin.addEventListener("click",() => {
        modalDesc.classList.toggle("modal-desc__active");
    });
    btnModalMobile.addEventListener("click",() => {
        modalDesc.classList.toggle("modal-desc__active");
    });
    iviBannerBtns.addEventListener("click",() => {
        modalDesc.classList.toggle("modal-desc__active");
    });
    tariffButton.addEventListener("click",() => {
        modalDesc.classList.toggle("modal-desc__active");
    });
    tariffButtonClick.addEventListener("click",() => {
        modalDesc.classList.toggle("modal-desc__active");
    });
    serviceButton.addEventListener("click",() => {
        modalDesc.classList.toggle("modal-desc__active");
    });
    tariffMobile.addEventListener("click",() => {
        modalDesc.classList.toggle("modal-desc__active");
    });
    tariffMobileClick.addEventListener("click",() => {
        modalDesc.classList.toggle("modal-desc__active");
    });
    serviceMobile.addEventListener("click",() => {
        modalDesc.classList.toggle("modal-desc__active");
    });
    modalDescClose.addEventListener("click",() => {
        modalDesc.classList.toggle("modal-desc__active");
    });
    window.addEventListener('click', (e) => {
        if (e.target == modalDescBack) {
            modalDesc.classList.toggle("modal-desc__active");
        }
    });
})();

/*********** footer **********/
(function () {
    const footerTitleFace = document.getElementById("footer-list__item__title__face");
    const footerTitlebusiness = document.getElementById("footer-list__item__title__business");
    const footerTitleCompany = document.getElementById("footer-list__item__title__company");
    const footerTitleSupport = document.getElementById("footer-list__item__title__support");

    const footerListFace = document.getElementById("footer-list__face");
    const footerListbusiness = document.getElementById("footer-list__business");
    const footerListCompany = document.getElementById("footer-list__company");
    const footerListSupport = document.getElementById("footer-list__support");

    const footerArrowFace = document.getElementById("footer-arrow__face");
    const footerArrowBusiness = document.getElementById("footer-arrow__business");
    const footerArrowCompany = document.getElementById("footer-arrow__company");
    const footerArrowSupport = document.getElementById("footer-arrow__support");

    const footerLineFace = document.getElementById("footer-line__face");
    const footerLineBusiness = document.getElementById("footer-line__business");
    const footerLineCompany = document.getElementById("footer-line__company");
    const footerLineSupport = document.getElementById("footer-line__support");

    footerTitleFace.addEventListener("click", () => {
        footerListFace.classList.toggle("footer-list__active");
        footerArrowFace.classList.toggle("footer-arrow__active");
        footerTitleFace.classList.toggle("footer-list__line__active");
        footerLineFace.classList.toggle("footer-line");
    });
    footerTitlebusiness.addEventListener("click", () => {
        footerListbusiness.classList.toggle("footer-list__active");
        footerArrowBusiness.classList.toggle("footer-arrow__active");
        footerTitlebusiness.classList.toggle("footer-list__line__active");
        footerLineBusiness.classList.toggle("footer-line");
    });
    footerTitleCompany.addEventListener("click", () => {
        footerListCompany.classList.toggle("footer-list__active");
        footerArrowCompany.classList.toggle("footer-arrow__active");
        footerTitleCompany.classList.toggle("footer-list__line__active");
        footerLineCompany.classList.toggle("footer-line");
    });
    footerTitleSupport.addEventListener("click", () => {
        footerListSupport.classList.toggle("footer-list__active");
        footerArrowSupport.classList.toggle("footer-arrow__active");
        footerTitleSupport.classList.toggle("footer-list__line__active");
        footerLineSupport.classList.toggle("footer-line");
    });
})();

/********** whatsApp **********/
(function () {
    const message = document.getElementById("message");
    const whatsapp = document.getElementById("whatsapp");
    const messageAll = document.getElementById("message-all");
    const messageClose = document.getElementById("message-close");
    message.addEventListener("click", () => {
        whatsapp.classList.toggle("whatsapp-active");
        messageClose.classList.toggle("message-close__active");
        messageAll.classList.toggle("message-all__active");
    });
})();

/************** video ***********/
(function () {
    const connect = document.querySelector("#connect");
    const video = document.querySelector("#video");
    const videosWrapper = document.querySelector('.videos-wrapper')
    const videoClose = document.querySelector(".video-close");
    const downloadBtn = document.querySelector('.download__btn');
    connect.addEventListener("click", () => {
        video.classList.toggle("video-active");
    });
    downloadBtn.addEventListener("click", () => {
        video.classList.toggle("video-active");
    });
    videoClose.addEventListener("click", () => {
        video.classList.toggle("video-active");
    });
    window.addEventListener('click', (e) => {
        if (e.target == video) {
            video.classList.toggle("video-active");
        }
    });
})();

new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoHeight: true,
    spaceBetween: 100,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
});