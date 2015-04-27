var cheerio = require('cheerio');

exports.extract=function(sitVal,html){

	var sel={};

	if(sitVal.pid){
		sel.img="$(\".productImage.current\").attr(\"data-src\")";
		sel.title="$(\".title\").text()";
		sel.rating="$(\".fk-stars\").attr(\"title\")";
		sel.price="$(\".pricing .price\").text()";
		sel.specialprice="$(\".pricing .price\").text()";
		sel.sellingprice="$(\".selling-price.omniture-field\").attr(\"data-evar48\")";
		sel.discount="$(\".discount.fk-green\").text()";
		return sel;			
	}
	else if(sitVal.qid){
		sel.img="$(\"#imgTagWrapperId img\").attr(\"src\")";
		sel.title="$(\"#productTitle\").text()";
		sel.rating="$(\"#merchant-info\").text()";
		sel.price="$(\"#price tr:nth-child(1) td:nth-child(2)\").text()";
		sel.sellingprice="$(\"#priceblock_saleprice\").text()";
		// sel.sellingprice="$(\".selling-price.omniture-field\").attr(\"data-evar48\")";
		sel.discount="$(\"#regularprice_savings td:nth-child(2)\").text()";
		return sel;
	}
	else if(sitVal.uq){
		sel.img="$(\".images .blowup img\").attr(\"src\")";
		sel.title="$(\"h1\").text()";
		sel.rating="$(\".fk-stars\").attr(\"title\")";
		sel.price="$(\".info .price\").attr(\"data-price\")";
		sel.specialprice="$(\".pricing .price\").text()";
		sel.sellingprice="$(\".selling-price.omniture-field\").attr(\"data-evar48\")";
		sel.discount="$(\".discount.fk-green\").text()";
		return sel;	
	}

	

}