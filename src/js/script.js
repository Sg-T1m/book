const button_zakaz = document.querySelector(".header_button");
const button_zakaz2 = document.querySelector(".zaka");

const bidy = document.querySelector("body");
function create_modal() {
  const modal = document.createElement("div");
  modal.classList.add("modelWindow_menu_overlay");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="modelWindow_Window_content">
        <div class="windos_close"> </div>
        <div class="modelWindow_header">
          <p class="modelWindow_text"> Заказ столика</p>
        </div>
        <div class="modelWindow_mein">
          <form class="form_zakaz_mein">
            <p class="text_fo_form">Введите номер телефона </p>
            <input type="text" name="number" class="form_number">
            <p class="text_fo_form"> Введите время на которое желаете забронировать столик</p>
            <input type="text" name="time" class="form_time">
        
          <div class="style_button_form">
            <button class="form_button1"> Отправить</button>
            <button class="form_button2">Выйти</button>
          </div>
          </form>
        </div>
        <div class="ModelWindow_footer"></div>
      </div>
      `
  );

  document.body.appendChild(modal);
  return modal;
}
modal = function (oprions) {
  const $modal = create_modal(oprions);
  return {
    open() {
      $modal.classList.add("open");
    },
    close() {
      $modal.classList.remove("open");
    },
    destroy() {},
  };
};

const myModal = modal();
const conten = document.querySelector(".modelWindow_Window_content");
button_zakaz.addEventListener("click", function (e) {
  myModal.open();
});
const overlayClose = document.querySelector(".modelWindow_menu_overlay");
overlayClose.addEventListener("click", function (e) {
  myModal.close();
});
conten.addEventListener("click", (e) => e.stopPropagation());

const buttonExit = document.querySelector(".form_button2");
buttonExit.addEventListener("click", function (e) {
  myModal.close();
});
const windosClose = document.querySelector(".windos_close");
windosClose.addEventListener("click", function (e) {
  myModal.close();
});
const buttonMeny = document.querySelector(".button_menu");
buttonMeny.addEventListener("click", function (e) {
  console.log("pivo");
});
button_zakaz2.addEventListener("click", function (e) {
  myModal.open();
});

function create_modal2(oprions2) {
  const modal2 = document.createElement("div");
  modal2.classList.add("modal_meny_overlay");
  modal2.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="modal_meny_content">
        dv
        </div>
      `
  );

  document.body.appendChild(modal2);
  return modal2;
}

modal2 = function (oprions2) {
  const $modal2 = create_modal2(oprions2);
  return {
    open2() {
      $modal2.classList.add("open2");
    },
    close2() {
      $modal2.classList.remove("open2");
    },
    destroy2() {},
  };
};
buttonMeny.addEventListener("click", function (e) {
  myModal2.open2();
});
const myModal2 = modal2();
const overlayClose2 = document.querySelector(".modal_meny_overlay");
overlayClose2.addEventListener("click", function (e) {
  myModal2.close2();
});
const conten2 = document.querySelector(".modal_meny_content");
conten2.addEventListener("click", (e) => e.stopPropagation());


// рабоачтя отправка

const formPut = document.querySelector('.form_zakaz_mein')
const input1 = document.querySelector('.form_number')
const input2 = document.querySelector('.form_time')
const buttonsubmit = formPut.querySelector('.form_button1')
input1.addEventListener("submit", (e)=> e.preventDefault())
input2.addEventListener("submit", (e)=> e.preventDefault())
formPut.addEventListener("submit", (e)=> e.preventDefault())
 async function otpravitPivo(url,data){
  await fetch(`${url}`,{
    
         method: "post",
        body: JSON.stringify(data),
           headers: {
           "Content-type": "application/json",
           },
            })
          
  
} 

buttonsubmit.addEventListener("click", submitForm)
function submitForm(e){
  e.preventDefault()
  const data = {
    number: input1.value,
    data: input2.value
  }

  otpravitPivo('http://localhost:3000/number',data)
}




// работа с беком
// это запрос к серверу врроде бы)
// class Queshen {
//   static create(question) {
//     return fetch(
//       "https://test-fb443-default-rtdb.firebaseio.com/questions.json",
//       {
//         method: "post",
//         body: JSON.stringify(question),
//         headers: {
//           "Content-type": "application/json",
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         question.id = response.name; //задавания  респонсу
//         return question;
//       })
//       .then(addToLocalStorage144)
//       .then(Queshen.renderList); // получание из бд
//   }
//   static renderList() {
//     const questions = getQuestionsFromLocalStorage()

//     const html = questions.length
//       ? questions.map(toCard).join('')
//       : `<div class="js_bek">Вы пока ничего не спрашивали</div>`

//     const list = document.getElementById('aboba')

//     list.innerHTML = html
//   }

//   static listToHTML(questions) {
//     return questions.length
//       ? `<ol>${questions.map(q => `<li>${q.text}</li>`).join('')}</ol>`
//       : '<p>Вопросов пока нет</p>'
//   }
// }

// async function addToLocalStorage144(question) {
//    const all = getQuestionsFromLocalStorage();
//    all.push(question);
//   localStorage.setItem('questions', JSON.stringify(all));
//   console.log(all)
// }

// async function getQuestionsFromLocalStorage() {
//   await JSON.parse(localStorage.getItem('questions') || "[]"); // сохранение вопросов
// }

// //
// const form = document.querySelector(".form_zakaz_mein");
// const input = form.querySelector(".form_number");
// const btn = form.querySelector(".form_button1");

// form.addEventListener("submit", submitFormHander); // хуйня для отправки
// input.addEventListener("input", () => {
//   // хуетень для блока кнопки
//   btn.disabled = !chek(input.value);
// });

// function submitFormHander(event) {
//   event.preventDefault();
//   if (chek(input.value)) {
//     const question = {
//       Text: input.value.trim(),
//       data: new Date().toJSON(),
//     };

//     btn.disabled = true;
//     // запрос на сервер  сохранения
//     Queshen.create(question).then(() => {
//       console.log("Queshen", question);
//       input.value = "";
//       btn.disabled = false;
//     });
//   }
// }
// //
// function chek(value) {
//   return value.length >= 5; // проверка на колво символов в value
// }
// //
// function toCard(question) {
//   `<div">
//   ${new Date(question.date).toLocaleDateString()}
//   ${new Date(question.date).toLocaleTimeString()}
// </div>
// <div>${question.text}</div>`;
// }
