var request = require('request');
var cheerio = require('cheerio');

var url = "";

var count, totalCount = 0;

request(url, function(err, req, res){
	var $ = cheerio.load(res);
	var catUrl = [];
	$().each(function(i, hrf){
		catUrl[i] = $(this).attr('href');
		request(catUrl[i], function(error, requ, resp){
			var $$ = cheerio.load(resp);
			count = parseInt($$().text());
			totalCount = count + totalCount;
			console.log(catUrl[i] + " --->"  + count);
			console.log("Total Count = " + totalCount);
		});
	});
	
});
