    function anotherChoice(){
		var total=0;
		for (var i=0;i<choice.length;i++){
			total=total+prices[choice[i]];
		}
		return total;
	}

     $("#espresso").on('click',function(){
		return makecoffe("espresso");
	});
	$("#Latte").on('click',function(){
		return makecoffe("Latte");
	});
	$("#hot").on('click',function(){
		return makecoffe("hot");
	});
	$("#img").on("click",function(){
    		return makecoffe("brew");
    	});
	$("#reset").on("click",function(){
		return reset();
	})
	function reset(){
		

		choice = [];
		$ ('#revenue').html(anotherChoice()+'dt');
	}
		
	
	var prices={
    		"brew":1,
    		"espresso":1.25,
    		"Latte":2.50,
    		"hot":2.80
    	};

    	var choice=[];
	function makecoffe(CoffeType){
	choice.push(CoffeType);
	if((CoffeType==="brew")||(CoffeType==="espresso")){
	  	$("#img").attr('src','https://imgaz.staticbg.com/thumb/view/oaupload/ser1/banggood/images/3B/F4/bf29ad2d-4734-4f57-b1c9-dad5c497a1ae.png ');
	
	setTimeout(function(){
$("#img").attr("src","https://images.homedepot-static.com/productImages/23e773bd-fe78-4ee8-90b7-820c6c2c5767/svn/allures-illusions-mugs-giant-coffee-64_600.jpg");
	},1000);
	setTimeout(function(){
$("#img").attr("src","https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
},1500);
	 $('#revenue').html(anotherChoice()+'dt');
	}
	else if (CoffeType==="Latte"){
		  	$("#img").attr('src','https://imgaz.staticbg.com/thumb/view/oaupload/ser1/banggood/images/3B/F4/bf29ad2d-4734-4f57-b1c9-dad5c497a1ae.png ');
	
	setTimeout(function(){
$("#img").attr("src","https://media-cdn.tripadvisor.com/media/photo-s/12/8a/39/6c/un-bon-latte.jpg");
	},1000);
	setTimeout(function(){
$("#img").attr("src","https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
},1500);
	 $('#revenue').html(anotherChoice()+'dt');
	}
	else if(CoffeType==="hot"){
	$("#img").attr('src','https://imgaz.staticbg.com/thumb/view/oaupload/ser1/banggood/images/3B/F4/bf29ad2d-4734-4f57-b1c9-dad5c497a1ae.png ');
	
	setTimeout(function(){
$("#img").attr("src","https://images-na.ssl-images-amazon.com/images/I/517cCg8KCAL._AC_.jpg");
	},1000);
	setTimeout(function(){
$("#img").attr("src","https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
},1500);
	 $('#revenue').html(anotherChoice()+'dt');

		}


	}



