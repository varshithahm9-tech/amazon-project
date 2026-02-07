// builtin class = > XMLHttpRequest
const xhr = new XMLHttpRequest();


// setup the event
xhr.addEventListener('load',()=>{
    console.log(xhr.response);
});

xhr.open('GET','https://supersimplebackend.dev/documentation');
xhr.send();
