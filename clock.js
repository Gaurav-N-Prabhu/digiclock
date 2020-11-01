function realtime()
{
    var hr = document.getElementById('hrs');
    var m = document.getElementById('mint');
    var s = document.getElementById('sec');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s
	
	if(h>12)
	{

		hr.innerHTML = h-12;
		mint.innerHTML = m;
		sec.innerHTML = s;
	}
	else
	{
		hr.innerHTML = h;
		mint.innerHTML = m;
		sec.innerHTML = s;
	}
}
var interval = setInterval(realtime, 0);
