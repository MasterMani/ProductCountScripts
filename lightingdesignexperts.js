var request = require('request');
var cheerio = require('cheerio');

var url = "http://www.lightingdesignexperts.com/line-card.aspx";

var count, totalCount = 0, str = '', newstr = '';

request(url, function(err, req, res){
	var $ = cheerio.load(res);
	var catUrl = [];
	$('.line-cards > h3 > a').each(function(i, hrf){
		catUrl[i] = "http://www.lightingdesignexperts.com" + $(this).attr('href');
		request(catUrl[i], function(error, requ, resp){
			var $$ = cheerio.load(resp);
			str = $$('.countersLabel:nth-child(1) + td > span.pagerLink:nth-of-type(1)').text().match(/of.*(of.*)/)[1].replace(/of/,'').trim();
			count = parseInt(str);
			totalCount = count + totalCount;
			console.log(catUrl[i] + " ---> " + count);
			console.log("Total Count = " + totalCount);
			
		});
	});
	
});
