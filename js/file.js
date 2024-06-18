let fileInput = document.getElementById('f1');
let fileName = document.getElementById('fileName');
fileInput.addEventListener('input',()=>{
  fileName.innerHTML = fileInput.files[0].name;
})