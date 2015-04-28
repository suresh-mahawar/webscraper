var cheerio = require('cheerio');

exports.extract=function(url){

	var sel={};
 	var domainName=getDomain(url);
 	
	if(domainName.indexOf("flipkart")!=-1){
		sel.img="$(\".productImage.current\").attr(\"data-src\")";
		sel.title="$(\".title\").text()";
		sel.rating="$(\".fk-stars\").attr(\"title\")";
		sel.price="$(\".pricing .price\").text()";
		sel.specialprice="$(\".pricing .price\").text()";
		sel.sellingprice="$(\".selling-price.omniture-field\").attr(\"data-evar48\")";
		sel.discount="$(\".discount.fk-green\").text()";
		return sel;			
	}
	else if(domainName.indexOf("amazon")!=-1){
		sel.img="$(\"#imgTagWrapperId img\").attr(\"src\")";
		sel.title="$(\"#productTitle\").text()";
		sel.rating="$(\"#merchant-info\").text()";
		sel.price="$(\"#price tr:nth-child(1) td:nth-child(2)\").text()";
		sel.sellingprice="$(\"#priceblock_saleprice\").text()";
		// sel.sellingprice="$(\".selling-price.omniture-field\").attr(\"data-evar48\")";
		sel.discount="$(\"#regularprice_savings td:nth-child(2)\").text()";
		return sel;
	}
	else if(domainName.indexOf("myntra")!=-1){
		sel.img="$(\".images .blowup img\").attr(\"src\")";
		sel.title="$(\"h1\").text()";
		sel.rating="$(\".fk-stars\").attr(\"title\")";
		sel.price="$(\".info .price\").attr(\"data-price\")";
		sel.specialprice="$(\".pricing .price\").text()";
		sel.sellingprice="$(\".selling-price.omniture-field\").attr(\"data-evar48\")";
		sel.discount="$(\".discount.fk-green\").text()";
		return sel;	
	}
	else if(domainName.indexOf("jabong")!=-1){
		sel.img="$(\".imageview-slider li img\").attr(\"src\")";
		sel.title="$(\".d-inline.fs12.c777.l-hght14.fs12.f-bold .fs11.c222\").text()";
		sel.rating="$(\".fl.fs11 .fl.pl10.fs11.c999 span\").text()";
		sel.price="$(\"#price_div span.striked-price\").text()";
		sel.specialprice="$(\".pricing .price\").text()";
		sel.sellingprice="$(\"#price_div span#before_price span:nth-child(2)\").text()";
		sel.discount="$(\"#price_div span.discount-tag\").text()";		
		return sel;		

	}
	else if(domainName.indexOf("ebay")!=-1){
		sel.img="$(\"#mainImgHldr img#icImg\").attr(\"src\")";
		sel.title="$(\"#itemTitle\").text()";
		sel.rating="$(\".fl.fs11 .fl.pl10.fs11.c999 span\").text()";
		sel.price="$(\"#prcIsum\").text()";
		sel.specialprice="$(\".pricing .price\").text()";
		sel.sellingprice="$(\"#price_div span#before_price span:nth-child(2)\").text()";
		sel.discount="$(\"#price_div span.discount-tag\").text()";		
		return sel;		

	}
	

}
function getDomain(url) {
    var hostName = getHostName(url);
    var domain = hostName;
    
    if (hostName != null) {
        var parts = hostName.split('.').reverse();
        
    if (parts != null && parts.length > 1) {
        domain = parts[1] + '.' + parts[0];
            
        if (hostName.toLowerCase().indexOf('.co.uk') != -1
                && parts.length > 2) {
          domain = parts[2] + '.' + domain;
        }
    }
    }
    
    return domain;
}
function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 &&
        typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];
    }
    else {
        return null;
    }
}