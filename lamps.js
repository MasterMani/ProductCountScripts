var request = require('request'),
    cheerio = require('cheerio');

var url = "http://www.lamps.com/sitemap";
var count = 0, totalCount = 0;

request(url, function(err, req, res){
	var $ = cheerio.load(res);
	var catUrl = [];
	$('.sitecatul li a').each(function(i, hre){
		catUrl[i] = $(this).attr('href');
//		console.log(catUrl[i]);
		request(catUrl[i], function(error, request, response){
			var $$ = cheerio.load(response);
			var tempCount = 0;
//			console.log($$('#narrow-by-list dt + dd .nav_price').html())
			$$('#narrow-by-list dt + dd span.nav_price').each(function(j, prc){
				tempCount = parseInt($$(this).find('a .count').text().replace(/[\)]/,'').replace(/[\(]/,'').trim());
				console.log(tempCount);
				count = count + tempCount;
				
				console.log("Count : " +count + "Url : " + catUrl[i] );
			});

		})
	});
});
