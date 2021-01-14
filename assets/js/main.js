// home carusel
const homeCarusel = document.querySelector(".home__carusel");
const homePanelItems = document.querySelectorAll(".home__panel_item");
const customerCont = document.querySelector(".customer__cont");
let homeCaruselBool = true;

homePanelItems[0].addEventListener("click", () => {
    homeCarusel.style.transform = "translateX(0%)";
    homePanelItems[0].style["background-color"] = "var(--white)";
    homePanelItems[1].style["background-color"] = "var(--transparent)";
})
homePanelItems[1].addEventListener("click", () => {
    homeCarusel.style.transform = "translateX(-50%)";
    homePanelItems[0].style["background-color"] = "var(--transparent)";
    homePanelItems[1].style["background-color"] = "var(--white)";
})
setInterval(() => {
    if (homeCaruselBool) {
        homeCarusel.style.transform = "translateX(-50%)";
        homePanelItems[0].style["background-color"] = "var(--transparent)";
        homePanelItems[1].style["background-color"] = "var(--white)";
        customerCont.style.transform = "translateX(-50%)";
    }
    else {
        homeCarusel.style.transform = "translateX(0%)";
        homePanelItems[0].style["background-color"] = "var(--white)";
        homePanelItems[1].style["background-color"] = "var(--transparent)";
        customerCont.style.transform = "translateX(0%)";
    }
    homeCaruselBool = !homeCaruselBool;
}, 4000);





// document event
const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const headerLinks = document.querySelectorAll(".header__link");
const logoImg = document.querySelector(".logo__img");
let headerBool = true;

if (window.innerWidth < 992) {
    headerLinks.forEach((item) => {
        item.style.color = "var(--black)";
    })
    logoImg.setAttribute("src", "assets/media/img/logos/logoDark.png");
}
document.addEventListener("scroll", () => {
    if (scrollY > 50) {
        if (window.innerWidth > 991) {
            if (headerBool) {
                header.style["background-color"] = "var(--white)";
                logoImg.setAttribute("src", "assets/media/img/logos/logoDark.png");
                headerLinks.forEach((item) => {
                    item.style.color = "var(--black)";
                })
                headerBool = !headerBool;
            }
        }
        else {
            headerLinks.forEach((item) => {
                item.style.color = "var(--black)";
            })
            logoImg.setAttribute("src", "assets/media/img/logos/logoDark.png");
        }
    }
    else {
        if (window.innerWidth > 991) {
            if (!headerBool) {
                header.style["background-color"] = "var(--transparent)";
                logoImg.setAttribute("src", "assets/media/img/logos/logo.png");
                headerLinks.forEach((item) => {
                    item.style.color = "var(--white)";
                })
                headerBool = !headerBool;
            }
        }
        else {
            headerLinks.forEach((item) => {
                item.style.color = "var(--black)";
            })
            logoImg.setAttribute("src", "assets/media/img/logos/logoDark.png");
        }
    }
})




// header
window.addEventListener("resize", () => {
    if (window.innerWidth < 993) {
        headerLinks.forEach((item) => {
            item.style.color = "var(--black)";
        })
        logoImg.setAttribute("src", "assets/media/img/logos/logoDark.png");
    }
    else {
        if (headerBool) {
            headerLinks.forEach((item) => {
                item.style.color = "var(--white)";
            })
            logoImg.setAttribute("src", "assets/media/img/logos/logo.png");
        }
    }
})