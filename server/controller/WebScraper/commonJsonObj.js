var cheerio = require('cheerio');

exports.Mapper=function(html,url){
 	var $ = cheerio.load(html);  
 	var domainName=getDomain(url);
	var selector=JsonVariable(domainName);

	var result={};
	for(j in selector){
		
		if(selector[j]["text"]){
			result[selector[j]["property"]]=$(selector[j]["selector"]).text();
		}
		else{
			result[selector[j]["property"]]=$(selector[j]["selector"]).attr(selector[j]["attr"]);
			
		}
	}
	return result;
}

function JsonVariable(domainName){

	var Mapper= [];
	switch(domainName){
		case("flipkart"):
		Mapper=[	
		{
			property: "img",
			selector: ".imgWrapper",
			attr: "data-src",
			text: false
		},
		{
			property: "title",
			selector: "h1.title",
			attr: null,
			text: true
		},
		{
			property: "subtitle",
			selector: 'span.subtitle',
			attr: null,
			text: true
		},
		{
			property: "rating",
			selector: ".fk-stars",
			attr: "title",
			text: false
		},
		{
			property: "price",
			selector: ".pricing .price",
			attr: null,
			text: true
		},
		{
			property: "sellingprice",
			selector: ".selling-price.omniture-field",
			attr: "data-evar48",
			text: false
		},
		{
			property: "discount",
			selector: ".discount.fk-green",
			attr: null,
			text: true
		}

		];
		break;
		case("amazon"):
		Mapper=[
		{
			property: "img",
			// selector: '#imgTagWrapperId img',
			selector:".a-button-text img",
			attr: "src",
			text: false
		},
		{
			property: "title",
			selector: '#productTitle',
			attr: null,
			text: true
		},
		{
			property: "rating",
			selector: '#merchant-info',
			attr: null,
			text: true
		},
		{
			property: "price",
			selector: '#price tr:nth-child(1) td:nth-child(2)',
			attr: null,
			text: true
		},
		{
			property: "sellingprice",
			selector: '#priceblock_saleprice',
			attr: null,
			text: true
		},
		{
			property: "discount",
			selector: '#regularprice_savings td:nth-child(2)',
			attr: null,
			text: true
		}
		];
		break;
		case("myntra"):
		Mapper=[
		{
			property: "img",
			selector: '.images .blowup img',
			attr: 'src',
			text: false
		},
		{
			property: "title",
			selector: 'h1',
			attr: null,
			text: true
		},
		{
			property: "rating",
			selector: '.fk-stars',
			attr: 'title',
			text: false
		},
		{
			property: "price",
			selector: '.info .price',
			attr: 'data-price',
			text: false
		},
		{
			property: "sellingprice",
			selector: '.selling-price.omniture-field',
			attr: 'data-evar48',
			text: false
		},
		{
			property: "discount",
			selector: 'span.discount',
			attr: null,
			text: true
		}
		];
		break;
		case("jabong"):
		Mapper=[
		{
			property: "img",
			selector: '.imageview-slider li img',
			attr: 'src',
			text: false
		},
		{
			property: "title",
			selector: '.d-inline.fs12.c777.l-hght14.fs12.f-bold .fs11.c222',
			attr: null,
			text: true
		},
		{
			property: "rating",
			selector: '.fl.fs11 .fl.pl10.fs11.c999 span',
			attr: null,
			text: true
		},
		{
			property: "price",
			selector: "#price_div span.striked-price",
			attr: null,
			text: true
		},
		{
			property: "sellingprice",
			selector: "#price_div span#before_price span:nth-child(2)",
			attr: null,
			text: true
		},
		{
			property: "discount",
			selector: "#price_div span.discount-tag",
			attr: null,
			text: true
		}
		];
		break;
		case("ebay"):
		Mapper=[
		{
			property: "img",
			selector: '#mainImgHldr img#icImg',
			attr: 'src',
			text: false
		},
		{
			property: "title",
			selector: "#itemTitle",
			attr: null,
			text: true
		},
		{
			property: "rating",
			selector: ".fl.fs11 .fl.pl10.fs11.c999 span",
			attr: null,
			text: true
		},
		{
			property: "price",
			selector: "#prcIsum",
			attr: null,
			text: true
		},
		{
			property: "sellingprice",
			selector: "#price_div span#before_price span:nth-child(2)",
			attr: null,
			text: true
		},
		{
			property: "discount",
			selector: "#price_div span.discount-tag",
			attr: null,
			text: true
		}
		];
		break;
	}
		return Mapper;

}

function getDomain(url) {
    var hostName = getHostName(url);
    var domain = hostName;
    
    if (hostName != null) {
        var parts = hostName.split('.').reverse();
        
    if (parts != null && parts.length > 1) {
        domain = parts[1] ;
        // + '.' + parts[0];
            
        if (hostName.toLowerCase().indexOf('.co.uk') != -1
                && parts.length > 2) {
          domain = parts[2];	
      // + '.' + domain;
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