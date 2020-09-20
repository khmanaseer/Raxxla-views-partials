const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


// Glitchy-container
let bg= document.getElementById('glitchy-container')
		let count=20;
		for (let i=0; i<count; i++){
			let glitchBox = document.createElement('div')
			glitchBox.className = "glitchy-box";
			bg.appendChild(glitchBox);
		}
		setInterval(function(){
			let glitch = document.getElementsByClassName("glitchy-box");
			for (let i = 0; i<glitch.length; i++){
				glitch[i].style.left = Math.floor(Math.random()* 100) + "vw";
				glitch[i].style.top = Math.floor(Math.random()* 100) + "vh";
				glitch[i].style.width = Math.floor(Math.random()* 400) + "px";
				glitch[i].style.height = Math.floor(Math.random()* 100) + "px";
				glitch[i].style.backgroundPosition = Math.floor(Math.random()* 50) + "px";
			}
		},200)
