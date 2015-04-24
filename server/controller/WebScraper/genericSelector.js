var cheerio = require('cheerio');

exports.extract=function(sitVal,html){

	var sel={};
	if(sitVal.id==="flipkart"){

		// if(sitVal.sid){
		// 	var comment="var op=[];"+
  //           "$(\".gd-col.gu4\").each(function(){"+
  //               "var res={};"+
  //               "res.img=$(\".pu-image.fk-product-thumb img\",this).attr(\"src\");"+
  //               "res.title=$(\"a.fk-display-block\",this).attr(\"title\");"+
  //               "res.href=$(\"a.fk-display-block\",this).attr(\"href\");"+
  //               "res.price=$(\".pu-old\",this).text();"+
  //               "res.discount=$(\".pu-off-per\",this).text();"+
  //               "res.sellingprice=$(\".pu-final span\",this).text();"+
  //               "result.push(res);"+
  //      		"})";
  //      		return comment;	
		// }
		// else

		//determine whether details page or not. then pushing selector to json object
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


	}

}