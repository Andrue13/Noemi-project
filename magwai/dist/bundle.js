(()=>{window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".header__menu"),t=document.querySelectorAll(".header__item"),a=document.querySelector(".header__hamburger");a.addEventListener("click",(()=>{a.classList.toggle("header__hamburger_active"),e.classList.toggle("header__menu_active")})),t.forEach((t=>{t.addEventListener("click",(()=>{a.classList.toggle("header__hamburger_active"),e.classList.toggle("header__menu_active")}))}))})),$(document).ready((function(){$("[data-modal=consultation]").on("click",(function(){$(".overlay, #consultation").fadeIn("slow")})),$(".modal__close").on("click",(function(){$(".overlay, #consultation").fadeOut("slow")})),$("#consultation-form").validate({rules:{name:{required:!0,minlength:2},phone:"required",email:{required:!0,email:!0}},messages:{name:{required:"Пожалуйста, введите свое имя",minlength:jQuery.validator.format("Введите min. {0} символа!")},phone:"Пожалуйста, введите свой номер телефона",email:{required:"Пожалуйста, введите свою почту",email:"Неправильно введен адрес почты"}}}),$("input[name=phone]").mask("+7 (999) 999-99-99")}));let e=0,t=1;async function a(e){try{const t=await fetch("https://jsonplaceholder.typicode.com/posts/"+e);let a=await t.json();document.getElementById("catalogCard").insertAdjacentHTML("beforeend",`<div class="catalog-item">\n      <img src="img/${e}.jpeg" alt="coins">\n      <h2 class="catalog-item__title">bridge</h2>\n      <h3 class="catalog-item__descr">${a.title}</h3>\n      <div class="catalog-item__text">${a.body}</div>\n      <div class="catalog-item__author">Posted by <span>Eugenia</span>, on July 24, 2019</div>\n      <button class="catalog-item__button">Continue reading</button>\n  </div>`)}catch(e){alert(e)}}document.getElementById("lauding").addEventListener("click",(()=>{if(t>4)console.log("больше нельзя");else{for(let t=0;t<5;t++)e+=1,a(e),console.log(e);t+=1}}))})();