const image_1 = document.querySelector('.image-1')
const image_2 = document.querySelector('.image-2')
const image_3 = document.querySelector('.image-3')
const content_text = document.querySelector('.content-text')
const content_name = document.querySelector('.content-name')
const menu_out = document.querySelector('#menu-out')
const menu_bar = document.querySelector('.menu-bar')
const close_menu = document.querySelector('#close-menu')

image_1.addEventListener('click', (e) => {
    content_text.innerHTML = "“Đừng so sánh bản thân với người khác. Làm như vậy là bạn đang tự xúc phạm mình đấy” - Bill Gates";
    content_name.innerHTML = "Minh Trang - Học sinh lớp 10 chuyên"
})

image_2.addEventListener('click', (e) => {
    content_text.innerHTML = "“Trong một thế giới đang thay đổi rất nhanh chóng, lộ trình duy nhất đưa bạn đến thất bại là không dám mạo hiểm” - Mark Zuckerberg";
    content_name.innerHTML = "Ngọc Hiếu - Học sinh lớp 11"
})

image_3.addEventListener('click', (e) => {
    content_text.innerHTML = "“Thiên tài 1% là cảm hứng và 99% là mồ hôi” - Thomas Edison";
    content_name.innerHTML = "Huyền Nga - Học sinh lớp 12";
})

menu_out.addEventListener('click', (e) => {
    if(menu_bar.classList.contains("translate-x-[-100%]")){
        menu_bar.classList.remove("translate-x-[-100%]");
    }
})
close_menu.addEventListener('click', (e) => {
    menu_bar.classList.add("translate-x-[-100%]")
})
function scrollToForm(){
     const form_regist = document.querySelector(".form-regist")
     form_regist.scrollIntoView()
}