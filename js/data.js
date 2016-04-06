var data = [];

var dataStr = 'airport-aircraft-departure-travel<br>\
<br>\
You are calling this script before DOM is ready. If you write this code into jquer<br>\
<br>\
<br>\
pexels-photo-2<br>\
<br>\
You are calling this script before DOM is ready. If you write this code into jquer<br>\
<br>\
<br>\
pexels-photo-24329<br>\
<br>\
You are calling this script before DOM is ready. If you write this code into jquer<br>\
<br>\
<br>\
pexels-photo-24330<br>\
<br>\
You are calling this script before DOM is ready. If you write this code into jquer<br>\
<br>\
<br>\
pexels-photo-24846<br>\
<br>\
You are calling this script before DOM is ready. If you write this code into jquer<br>\
<br>\
<br>\
pexels-photo-28499<br>\
<br>\
You are calling this script before DOM is ready. If you write this code into jquer<br>\
<br>\
<br>\
pexels-photo-29596<br>\
<br>\
You are calling this script before DOM is ready. If you write this code into jquer<br>\
<br>\
<br>\
pexels-photo-29732<br>\
<br>\
You are calling this script before DOM is ready. If you write this code into jquer<br>\
<br>\
<br>\
pexels-photo-65567<br>\
<br>\
You are calling this script before DOM is ready. If you write this code into jquer<br>\
<br>\
<br>\
pexels-photo-67191<br>\
<br>\
You are calling this script before DOM is ready. If you write this code into jquer<br>\
<br>\
<br>\
pexels-photo-67660<br>\
<br>\
You are calling this script before DOM is ready. If you write this code into jquer<br>\
<br>\
<br>\
pexels-photo-67717<br>\
<br>\
You are calling this script before DOM is ready. If you write this code into jquer<br>\
<br>\
<br>\
pexels-photo<br>\
<br>\
You are calling this script before DOM is ready. If you write this code into jquer<br>\
<br>\
<br>\
train-railway-s-bahn-transport<br>\
<br>\
You are calling this script before DOM is ready. If you write this code into jquer<br>\
';

var d = dataStr.split('<br><br><br>')
for(var i = 0;i < d.length;i ++){
	var c = d[i].split('<br><br>');
	data.push({

		img: c[0].replace('、',' ')+'.jpg',
		caption: c[0].replace('、',' '),
		desc: c[1],

	});
	console.log(c[0].replace('、','')+'.jpg');
}