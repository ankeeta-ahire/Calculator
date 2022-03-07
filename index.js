fetch("https://investing-cryptocurrency-markets.p.rapidapi.com/currencies/list?lang_ID=1&time_utc_offset=28800", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1429481132mshcb2b4d45bb962d6p14c5eajsn3f83965f7065",
		"x-rapidapi-host": "investing-cryptocurrency-markets.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
    console.log(response.data[0][0].data[0].fullname);
    document.getElementById('crp1').innerHTML= response.data[0][0].data[0].fullname;
    document.getElementById('crp2').innerHTML= response.data[0][0].data[1].fullname;
    document.getElementById('crp3').innerHTML= response.data[0][0].data[2].fullname;
    document.getElementById('crp4').innerHTML= response.data[0][0].data[3].fullname;
    document.getElementById('crp5').innerHTML= response.data[0][0].data[4].fullname;
})
.catch(err => {
	console.error(err);
});