var request= require('request'),
    cheerio = require('cheerio');

var url = "http://www.homelighting.com";
var count = 0, totalCount = 0;


request(url, function(err, req, res){
	var $ = cheerio.load(res);
	var catUrl = [];
	$('li.mega ul.links li a').each(function(i, hre){
		catUrl[i] = $(this).attr('href');
//		console.log(i + " " + catUrl[i]);
		//if(i < 83){
			request(catUrl[i], function(error, request, response){
				var $$ = cheerio.load(response);
				count = $$('.faceItem > li > a > input').parent().text().trim();
				if(count.length != 0) {
					count = parseInt(count.replace(/[a-zA-Z\(\)]/gi,'').trim());
					totalCount = count + totalCount;
					console.log("count - : " +count+" totalCount - : " + totalCount);
				}
			});
		//}
	});
});
