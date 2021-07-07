var currentNavbarColorIndicator = 1;
function setNavbarColor(x){
	if(x == currentNavbarColorIndicator)return;
	else{
		switch(x){
			case 1: document.getElementsByTagName('nav')[0].style.backgroundColor = "rgba(0, 0, 0, 0)"; break;
			case 2: document.getElementsByTagName('nav')[0].style.backgroundColor = "rgba(0, 0, 0, 0.7)";;break;
		}
		currentNavbarColorIndicator = x;
	}
}
document.addEventListener('scroll', (e) => {
	// define commons here.
	let viewportHeight = window.innerHeight;
	let position = document.documentElement.scrollTop || document.body.scrollTop;
	if(position < viewportHeight - 100)setNavbarColor(1);
	else setNavbarColor(2);
});
setNavbarColor(1);

// (function titleMarquee() {
//     document.title = document.title.substring(1) + document.title.substring(0,1);
//     setTimeout(titleMarquee, 50);
// })();
