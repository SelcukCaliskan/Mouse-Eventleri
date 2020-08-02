//const element =document.querySelector("#clear-todos");

//Element özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.textContent);
// console.log(element.innerHTML);
// //console.log(element);

//Style ve Element Özelliklerini Değiştirme


// element.className="btn btn-primary";

// element.style.color="#000";
// element.style.marginLeft="5px";
// element.href="http://google.com.tr";
// element.target="blank";

// element.textContent="Silin";
// element.innerHTML="<span>Deneme</span>";

// const element=document.querySelectorAll(".list-group-item");
// element.forEach(function(el){
//     el.style.color="red";
//     el.style.background="#eee";
// });
// console.log(element);

//Dom Elementleri Üzerinde Gezinme

// let value;
// const todoList=document.querySelector(".list-group");
// const todo=document.querySelector(".list-group-item:nth-child(2");
// const cardrow=document.querySelector(".card.row");
// value=todoList;
// value=todo;
// value=cardrow;
// console.log(value);


//Yebi element Oluşturma 
//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               

const newLink= document.createElement("a");

const cardbody=document.getElementsByClassName("card-body")[1];

newLink.id="clear-todos";
newLink.className="btn btn-danger";
newLink.href="https://www.google.com.tr";
newLink.target="_blank";


newLink.appendChild(document.createTextNode("Farklı sayfaya git"));
cardbody.appendChild(newLink);

console.log (newLink);



//Text Node Text Content ile yapamadık ondan dolayı NoDE Kullanıyoruz..
// const text=document.createTextNode("Naber");

// cardbody.appendChild(text);

// console.log(cardbody);
