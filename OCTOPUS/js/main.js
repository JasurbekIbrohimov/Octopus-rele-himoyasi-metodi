const navbarItemList1 = document.querySelector(".navbar__item_list1");
const navbarItemList2 = document.querySelector(".navbar__item_list2");
const navbarItemList3 = document.querySelector(".navbar__item_list3");
const navbarItemList4 = document.querySelector(".navbar__item_list4");
const navbarItemList5 = document.querySelector(".navbar__item_list5");

const infoItem1 = document.querySelector(".info__item1");
const infoItem2 = document.querySelector(".info__item2");
const infoItem3 = document.querySelector(".info__item3");
const infoItem4 = document.querySelector(".info__item4");
const infoItem5 = document.querySelector(".info__item5");

const infoItem6 = document.querySelector(".info__item6");
const infoItem7 = document.querySelector(".info__item7");
const infoItem8 = document.querySelector(".info__item8");
const infoItem9 = document.querySelector(".info__item9");
const infoItem0 = document.querySelector(".info__item0");

const infoBtn = document.querySelector(".info__btn")
const modal = document.querySelector(".modal")
const modalClose = document.querySelector(".modal__close")

const modalInnerTitle = document.querySelector(".modal__inner_title")


// ======== CODE =========

//modal
infoBtn.addEventListener("click", ()=>{
    modal.classList.add("open")
    modal.classList.add("static")
})
modalClose.addEventListener("click", ()=>{
    modal.classList.remove("open")
    modal.classList.remove("static")
})




// navigation bar
navbarItemList1.addEventListener("click", ()=>{
    infoItem1.classList.add("open")
    infoItem1.classList.remove("close")

    infoItem2.classList.add("close")
    infoItem2.classList.remove("open")
    infoItem3.classList.add("close")
    infoItem3.classList.remove("open")
    infoItem4.classList.add("close")
    infoItem4.classList.remove("open")
    infoItem5.classList.add("close")
    infoItem5.classList.remove("open")

    // ------------

    infoItem6.classList.add("open")
    infoItem6.classList.remove("close")

    infoItem7.classList.add("close")
    infoItem7.classList.remove("open")
    infoItem8.classList.add("close")
    infoItem8.classList.remove("open")
    infoItem9.classList.add("close")
    infoItem9.classList.remove("open")
    infoItem0.classList.add("close")
    infoItem0.classList.remove("open")

})
navbarItemList2.addEventListener("click", ()=>{
    infoItem1.classList.remove("open")
    infoItem1.classList.add("close")

    infoItem2.classList.add("open")
    infoItem2.classList.remove("close")

    infoItem3.classList.remove("open")
    infoItem3.classList.add("close")
    infoItem4.classList.add("close")
    infoItem4.classList.remove("open")
    infoItem5.classList.add("close")
    infoItem5.classList.remove("open")

// =================

    infoItem6.classList.remove("open")
    infoItem6.classList.add("close")

    infoItem7.classList.add("open")
    infoItem7.classList.remove("close")

    infoItem8.classList.remove("open")
    infoItem8.classList.add("close")
    infoItem9.classList.add("close")
    infoItem9.classList.remove("open")
    infoItem0.classList.add("close")
    infoItem0.classList.remove("open")

})
navbarItemList3.addEventListener("click", ()=>{
    infoItem1.classList.remove("open")
    infoItem1.classList.add("close")
    infoItem2.classList.add("close")
    infoItem2.classList.remove("open")

    infoItem3.classList.add("open")
    infoItem3.classList.remove("close")

    infoItem4.classList.add("close")
    infoItem4.classList.remove("open")
    infoItem5.classList.add("close")
    infoItem5.classList.remove("open")

// ======================
    infoItem6.classList.remove("open")
    infoItem6.classList.add("close")
    infoItem7.classList.add("close")
    infoItem7.classList.remove("open")

    infoItem8.classList.add("open")
    infoItem8.classList.remove("close")

    infoItem9.classList.add("close")
    infoItem9.classList.remove("open")
    infoItem0.classList.add("close")
    infoItem0.classList.remove("open")

})
navbarItemList4.addEventListener("click", ()=>{
    infoItem1.classList.remove("open")
    infoItem1.classList.add("close")
    infoItem2.classList.add("close")
    infoItem2.classList.remove("open")
    infoItem3.classList.remove("open")
    infoItem3.classList.add("close")

    infoItem4.classList.add("open")
    infoItem4.classList.remove("close")

    infoItem5.classList.add("close")
    infoItem5.classList.remove("open")

// ===========================
    infoItem6.classList.remove("open")
    infoItem6.classList.add("close")
    infoItem7.classList.add("close")
    infoItem7.classList.remove("open")
    infoItem8.classList.remove("open")
    infoItem8.classList.add("close")

    infoItem9.classList.add("open")
    infoItem9.classList.remove("close")

    infoItem0.classList.add("close")
    infoItem0.classList.remove("open")

})
navbarItemList5.addEventListener("click", ()=>{
    infoItem1.classList.remove("open")
    infoItem1.classList.add("close")
    infoItem2.classList.add("close")
    infoItem2.classList.remove("open")
    infoItem3.classList.remove("open")
    infoItem3.classList.add("close")
    infoItem4.classList.add("close")
    infoItem4.classList.remove("open")

    infoItem5.classList.add("open")
    infoItem5.classList.remove("close")


// =========================

    infoItem6.classList.remove("open")
    infoItem6.classList.add("close")
    infoItem7.classList.add("close")
    infoItem7.classList.remove("open")
    infoItem8.classList.remove("open")
    infoItem8.classList.add("close")
    infoItem9.classList.add("close")
    infoItem9.classList.remove("open")

    infoItem0.classList.add("open")
    infoItem0.classList.remove("close")

})