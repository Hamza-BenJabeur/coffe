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
	$("#Soda").on('click',function(){
		return makecoffe("Soda");
	});
	$("#img").on("click",function(){
    		return makecoffe("brew");
    	});
	$("#water").on("click",function(){
    		return makecoffe("water");
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
    		"hot":2.80,
    		"Soda":4,
    		"water":2
    	};

    	var choice=[];
	function makecoffe(CoffeType){
	choice.push(CoffeType);
	if((CoffeType==="brew")||(CoffeType==="espresso")){
	  	$("#img").attr('src','https://imgaz.staticbg.com/thumb/view/oaupload/ser1/banggood/images/3B/F4/bf29ad2d-4734-4f57-b1c9-dad5c497a1ae.png ');
	
	setTimeout(function(){
$("#img").attr("src","https://images.homedepot-static.com/productImages/23e773bd-fe78-4ee8-90b7-820c6c2c5767/svn/allures-illusions-mugs-giant-coffee-64_600.jpg");
	},2000);
	setTimeout(function(){
$("#img").attr("src","https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
},2000);
	 $('#revenue').html(anotherChoice()+'dt');
	}
	else if (CoffeType==="Latte"){
		  	$("#img").attr('src','https://imgaz.staticbg.com/thumb/view/oaupload/ser1/banggood/images/3B/F4/bf29ad2d-4734-4f57-b1c9-dad5c497a1ae.png ');
	
	setTimeout(function(){
$("#img").attr("src","https://media-cdn.tripadvisor.com/media/photo-s/12/8a/39/6c/un-bon-latte.jpg");
	},2000);
	setTimeout(function(){
$("#img").attr("src","https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
},2000);
	 $('#revenue').html(anotherChoice()+'dt');
	}
	else if(CoffeType==="hot"){
	$("#img").attr('src','https://imgaz.staticbg.com/thumb/view/oaupload/ser1/banggood/images/3B/F4/bf29ad2d-4734-4f57-b1c9-dad5c497a1ae.png ');
	
	setTimeout(function(){
$("#img").attr("src","https://images-na.ssl-images-amazon.com/images/I/517cCg8KCAL._AC_.jpg");
	},2000);
	setTimeout(function(){
$("#img").attr("src","https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
},2000);
	 $('#revenue').html(anotherChoice()+'dt');

		}
		else if(CoffeType==="Soda"){
	$("#img").attr('src','https://i.redd.it/0dmiuri6zyt41.jpg');
	
	setTimeout(function(){
$("#img").attr("src","https://png.pngtree.com/png-clipart/20190920/original/pngtree-beverage-drink-soda-red-cola-png-image_4622935.jpg");
	},2000);
	setTimeout(function(){
$("#img").attr("src","https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
},2000);
	 $('#revenue').html(anotherChoice()+'dt');

		}
			else if(CoffeType==="water"){
	$("#img").attr('src','https://i.redd.it/wjlgkpxwolhz.jpg').css("height","300px");
	
	setTimeout(function(){
$("#img").attr("src","https://us.123rf.com/450wm/karandaev/karandaev1508/karandaev150800001/43117571-water-bottle-isolated-on-white-background.jpg?ver=6");
	},2000);
	setTimeout(function(){
$("#img").attr("src","https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
},2000);
	 $('#revenue').html(anotherChoice()+'dt');

		}


	}



