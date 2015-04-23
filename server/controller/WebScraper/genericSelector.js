var cheerio = require('cheerio');

exports.extract=function(sitVal,html){

	var sel={};
	if(sitVal.id==="flipkart"){

		if(sitVal.sid){
			var comment="var op=[];"+
            "$(\".gd-col.gu4\").each(function(){"+
                "var res={};"+
                "res.img=$(\".pu-image.fk-product-thumb img\",this).attr(\"src\");"+
                "res.title=$(\"a.fk-display-block\",this).attr(\"title\");"+
                "res.href=$(\"a.fk-display-block\",this).attr(\"href\");"+
                "res.price=$(\".pu-old\",this).text();"+
                "res.discount=$(\".pu-off-per\",this).text();"+
                "res.sellingprice=$(\".pu-final span\",this).text();"+
                "result.push(res);"+
       		"})";
       		return comment;	
		}
		else if(sitVal.pid){

			sel.img="$(\".left-col img\").attr(\"src\")";
			sel.title="$(\".title\").text()";
			sel.rating="$(\".fk-stars\").attr(\"title\")";
			sel.price="$(\".pricing .price\").text()";
			sel.sellingprice="$(\".pricing .price\").text()";
			sel.specialprice="$(\".product-exchange-wrap .tab-header-wrap .tab-header a .selling-price\").attr(\"data-evar48\")";
			sel.discount="$(\".product-exchange-wrap .tab-header-wrap .tab-header a .discount\").text()";

			// var $ = cheerio.load(sitVal.html);
			// sel.img=$(".left-col img").attr("src");
			// sel.title=$(".title").text();
			// sel.rating=$(".fk-stars").attr("title");
			// sel.price=$(".price").text();
			// sel.sellingprice=$(".sellingprice").text();
			// sel.discount=$(".discount").text();
			return sel;			
		}


	}

}