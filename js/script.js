// function masukan nama
function replacename(){
  let name = prompt("Siapa nama anda?", "");
  document.getElementById("name").innerHTML = name
}
replacename();

// slide foto
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//message-us
//validasi
function displayResult(){
  //ambil input dari form
  const nama = document.forms['form-input']['nama'].value;
  const tglLahir = document.forms['form-input']['tgl_lahir'].value;
  const jkel = document.forms['form-input']['jkel'].value;
  const pesan = document.forms['form-input']['pesan'].value;

  if(nama == '' || tglLahir == '' || jkel == '' || pesan == ''){
    document.getElementById('error-msg').innerHTML = "Data tidak boleh kosong!";
    return false;
  }

  const currentTime = new Date();
  const date = currentTime.toLocaleDateString();
  const time = currentTime.toLocaleDateString();
  
  document.getElementById('error-msg').innerHTML = '';
  setSenderform(nama, tglLahir, jkel, pesan, date, time);

  return false;
}

//hasil input message
document.getElementsByClassName("submit").addEventListener("click", function(event) {
  event.preventDefault();
})

function setSenderform(nama, tglLahir, jkel, pesan, date, time){
  document.getElementById('current-time').innerHTML = time;
  document.getElementById('user-nama').innerHTML = nama;
  document.getElementById('user-tgl-lahir').innerHTML = tglLahir;
  document.getElementById('user-jkel').innerHTML = jkel;
  document.getElementById('user-pesan').innerHTML = pesan;
} 