	var img=document.getElementById('imag');
	var vid = document.getElementById('video');
	var text1=document.getElementById('text1');
	var text2=document.getElementById('text2');
	var text3=document.getElementById('text3');
	
		function changeSlide(){
			var time= Math.abs(vid.currentTime);
			if (0.0<=time && time<3.0) {
				img.src='http://goo.gl/Av1pac';
				text1.innerHTML='aaaaaaaaaaaaaaaaaa';
				text2.innerHTML='bbbbbbbbbbbbbbbbbb';
				text3.innerHTML='cccccccccccccccccc';
			}
			else if(3.0<time && time< 7.5) {
				img.src = 'http://goo.gl/vw43v1';
 				text1.innerHTML='ddddddddddddddddd';
 				text2.innerHTML='eeeeeeeeeeeeeeeee';
 				text3.innerHTML='fffffffffffffffff';	
			} 
			 else if (7.5<time && time < 11.5) {
				img.src='http://goo.gl/0Kd7UO';
				text1.innerHTML='gggggggggggggggggg';
				text2.innerHTML='hhhhhhhhhhhhhhhhhh';
				text3.innerHTML='kkkkkkkkkkkkkkkkkk';
			}
			else  {
				img.src='http://goo.gl/an2HXY';
				text1.innerHTML='lllllllllllllllllll';
				text2.innerHTML='mmmmmmmmmmmmmmmmmmm';
				text3.innerHTML='nnnnnnnnnnnnnnnnnnn';
			}
			}
	var loop = setInterval(changeSlide, 500);


	