var request = require('request');
var cheerio = require('cheerio');

var url = "http://egypt.souq.com/eg-en/shop-all-categories/c/";
var options = {uri:url, headers:{'User-Agent':'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36'}};

var urlArr=[];

request(url, function(error, response, html){
	console.log(html);
/*	var $ = cheerio.load(html);
	$('.refinementBrowser-mainList li > a').each(function(i, hre){
		urlArr[i] = $(this).attr('href');
		console.log(urlArr[i]);
		
	});
*/
});
