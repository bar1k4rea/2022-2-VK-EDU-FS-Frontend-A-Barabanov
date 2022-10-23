import './index.css'

let stringToHTML = function (string) {
   let parser = new DOMParser();
   let doc = parser.parseFromString(string, 'text/html');
   return doc.body.children[0];
};

// Selectors
let messages = document.querySelector('.messages')
let input = document.querySelector('.input input')

console.log(input.value)

input.addEventListener('keyup',
    function(evt){
       if(evt.keyCode === 13) sendMessage()
    })

function sendMessage(){
   let msg = input.value;
   if (msg === '')
      sendMessage();
   input.value = ''
   let text = document.createElement('div');
   let time = document.createElement('div');
   text.classList.add('text');
   text.innerText = msg;

   time.classList.add('time');
   let data = new Date();
   time.innerText = String(data.getHours() + ":" + data.getMinutes());

   let message = document.createElement('div');
   message.classList.add('message');
   message.appendChild(text);
   message.appendChild(time);

   messages.appendChild(message);

   localStorage.setItem(`${localStorage.length}`, message.outerHTML);
}

if (localStorage.length !== 1) {
   for (let i = 1; i < localStorage.length; i++) {
      let stringFromLocalStorage = localStorage.getItem(String(i));
      let messageFromLocalStorage = stringToHTML(stringFromLocalStorage);
      messages.appendChild(messageFromLocalStorage);
   }
}