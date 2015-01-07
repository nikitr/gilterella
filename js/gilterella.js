var Gilterella = Gilterella || (function () 
{

    var
        init,
        events,
        $prevScreen,
        $nxtScreen,
        bottomsChosen,
        topChosen,
        dressChosen,
        shoeChosen,
        bottomColorChosen,
        topColorChosen,
        dressColorChosen,
        finalTop,
        finalBottom,
        finalShoes,
        finalDress,

        dressesAvailable = [],
        skirtsAvailable = [],
        pantsAvailable = [],
        shortsAvailable = [],
        blousesAvailable = [],
        knitsAvailable = [], 
        otherTopsAvailable = [],


        bootiesAvailable = [],
        bootsAvailable = [],
        flatsAvailable = [],
        loafersAvailable = [],
        otherShoesAvailable = [],
        oxfordsAvailable = [],
        pumpsAvailable = [],
        sandalsAvailable = [],
        
        colorsOfSkirts = [],
        colorsOfPants = [],
        colorsOfShorts = [],
        colorsOfBlouses = [],
        colorsOfKnits = [],
        colorsOfOtherTops = [],
        colorsOfDresses = [],
        colorsOfTops = []

        finalDresses = [],
        finalTops = [],
        finalBottoms = [],

        finalShoesList = [];
    
    //when the dress choice is made: if "no" then follow the tops/bottoms path, else follow the dress path
    $("#dressChoice").change(function() {
        dressChosen = $('#dressChoice').val();
        if(dressChosen === "No"){ 
            $prevScreen = $('.question-1');
            $nxtScreen = $('.question-2');
            $("#bottomsList").attr("disabled",false);
            $("#topsList").attr("disabled",false);
        }
        else if(dressChosen === "Yes"){
            $prevScreen = $('.question-1');
            $nxtScreen = $('.question-2-alt');
            $("#bottomsList").attr("disabled",true);
            $("#topsList").attr("disabled",true);


            //add 10 of the colors available for the dresses into an array 
            $.each(dressesAvailable, function()
            {
                var productSkus = this.skus;
                $.each(productSkus, function() {
                    var productAttributes = this.attributes;
                        $.each(productAttributes, function() {
                            
                            
                            if((this.name === "color") && ($.inArray(this.value, colorsOfDresses) === -1) && (colorsOfDresses.length<10))
                                    {
                                        colorsOfDresses.push( this.value);
                                        //console.log(this.value);
                                    }
                            
                            /*for(var i=0; i < colorsOfDresses.length; i++){
                                console.log(colorsOfDresses[i] + " \n ");
                            }*/
                            
                        });
                });
            });

            //add the available colors to the dress colors drop down 
            $("#dColors").html("");
            for(var i=0; i<colorsOfDresses.length; i++){  
                if(i === 0)
                {
                    $("#dColors").append("<option value=" + i + ">" + "Select a dress color" + "</option>");
                } 
                else{
                    $("#dColors").append("<option value=" + i + ">" + colorsOfDresses[i] + "</option>");
                }    
            }

        }
    });

    /*$.("#dColors").change(function(){
        
        }
    })*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //when bottom is chosen, add 10 of the available colors into an array
    $("#bottomsList").change(function(){
        bottomsChosen = $('#bottomsList').val();

          // IF PANTS IS CHOSEN
          if(bottomsChosen === "pants") {
            $.each(pantsAvailable, function()
            {
                var productSkus = this.skus;
                $.each(productSkus, function(){
                    var productAttributes = this.attributes;
                        $.each(productAttributes, function() {
                            if((this.name === "color") && ($.inArray(this.value, colorsOfPants) === -1) && (colorsOfPants.length<10)){
                                colorsOfPants.push( this.value);
                                console.log(this.value);
                            }
                                
                      });
                });
            });

            //add the colors to the bottoms colors drop down
            $("#bColors").html("");
            for(var i=0; i<colorsOfPants.length; i++){  
                if(i === 0){
                    $("#bColors").append("<option value=" + i + ">" + "Select a bottom color" + "</option>");
                } 
                else{
                    $("#bColors").append("<option value=" + i + ">" + colorsOfPants[i] + "</option>");
                }    
            }
        }
            
        // IF SHORTS IS CHOSEN
        else if(bottomsChosen === "shorts") {
            $.each(shortsAvailable, function()
            {
                var productSkus = this.skus;
                $.each(productSkus, function(){  
                    var productAttributes = this.attributes;
                        $.each(productAttributes, function(){
                            if((this.name === "color") && ($.inArray(this.value, colorsOfShorts) === -1) && (colorsOfShorts.length<10)){
                                colorsOfShorts.push( this.value);
                                console.log(this.value);
                            }  
                      });
                });
            });

            $("#bColors").html("");
            for(var i=0; i<colorsOfShorts.length; i++){  
                if(i === 0){
                    $("#bColors").append("<option value=" + i + ">" + "Select a bottom color" + "</option>");
                } 
                else{
                    $("#bColors").append("<option value=" + i + ">" + colorsOfShorts[i] + "</option>");
                }    
            }
        }

        // IF SKIRTS IS CHOSEN
        else if(bottomsChosen === "skirts") {
            $.each(skirtsAvailable, function()
            {
                var productSkus = this.skus;
                $.each(productSkus, function(){ 
                    var productAttributes = this.attributes;
                        $.each(productAttributes, function(){
                            if((this.name === "color") && ($.inArray(this.value, colorsOfSkirts) === -1) && (colorsOfSkirts.length<10)){
                                colorsOfSkirts.push( this.value);
                                console.log(this.value);
                            }      
                      });
                });
            });

            $("#bColors").html("");
            for(var i=0; i<colorsOfSkirts.length; i++){  
                if(i === 0){
                    $("#bColors").append("<option value=" + i + ">" + "Select a bottom color" + "</option>");
                } 
                else{
                    $("#bColors").append("<option value=" + i + ">" + colorsOfSkirts[i] + "</option>");
                }    
            }
        }

    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    $("#topsList").change(function(){
        topChosen = $('#topsList').val();

        //get the colors available for blouses
        if(topChosen === "blouses") {
            $.each(blousesAvailable, function()
            {
                var productSkus = this.skus;
                $.each(productSkus, function(){
                    var productAttributes = this.attributes;
                        $.each(productAttributes, function(){
                            if((this.name === "color") && ($.inArray(this.value, colorsOfBlouses) === -1) && (colorsOfBlouses.length<10)){
                                colorsOfBlouses.push( this.value);
                                console.log(this.value);
                            }
                        });
                });            
            });

            $("#tColors").html("");
            for(var i=0; i<colorsOfBlouses.length; i++){  
                if(i === 0){
                    $("#tColors").append("<option value=" + i + ">" + "Select a top color" + "</option>");
                } 
                else{
                    $("#tColors").append("<option value=" + i + ">" + colorsOfBlouses[i] + "</option>");
                }
            }
        }

        //get the colors available for knits
        if(topChosen === "knits") {
            $.each(knitsAvailable, function()
            {
                var productSkus = this.skus;
                $.each(productSkus, function(){
                    var productAttributes = this.attributes;
                        $.each(productAttributes, function(){
                            if((this.name === "color") && ($.inArray(this.value, colorsOfKnits) === -1) && (colorsOfKnits.length<10)){
                                colorsOfKnits.push( this.value);
                                console.log(this.value);
                            }
                        });
                });
            });

            $("#tColors").html("");
            for(var i=0; i<colorsOfKnits.length; i++){  
                if(i === 0){
                    $("#tColors").append("<option value=" + i + ">" + "Select a top color" + "</option>");
                } 
                else{
                    $("#tColors").append("<option value=" + i + ">" + colorsOfKnits[i] + "</option>");
                }
            }
        }

        //get the colors available for other tops
        if(topChosen === "other") {
            $.each(otherTopsAvailable, function()
            {
                var productSkus = this.skus;
                $.each(productSkus, function(){
                    var productAttributes = this.attributes;
                        $.each(productAttributes, function(){
                            if((this.name === "color") && ($.inArray(this.value, colorsOfOtherTops) === -1) && (colorsOfOtherTops.length<10)){
                                colorsOfOtherTops.push( this.value);
                                console.log(this.value);
                            }
                        });
                });
            });

            $("#tColors").html("");
            for(var i=0; i<colorsOfOtherTops.length; i++){  
                if(i === 0){
                    $("#tColors").append("<option value=" + i + ">" + "Select a top color" + "</option>");
                } 
                else{
                    $("#tColors").append("<option value=" + i + ">" + colorsOfOtherTops[i] + "</option>");
                }
            }
        }

    })

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //depending on what shoes are chosen, add them into an array of final shoes
    $("#shoesList").change(function() 
    {
        shoeChosen = $('#shoesList').val();
        //console.log("choices are: " + dressChosen + bottomsChosen + topChosen + shoeChosen);
        if(shoeChosen === "Booties")
        {
          finalShoesList = bootiesAvailable;  

        }
        else if(shoeChosen === "Boots"){
            finalShoesList = bootsAvailable;
        }
        else if(shoeChosen === "Flats"){
            finalShoesList = flatsAvailable;
        }
        else if(shoeChosen === "Loafers"){
            finalShoesList = loafersAvailable;
        }
        else if(shoeChosen === "Other shoes"){
            finalShoesList = otherShoesAvailable;
        }
        else if(shoeChosen === "Oxfords")
        {
            finalShoesList = oxfordsAvailable;
        }
        else if(shoeChosen === "Pumps"){
            finalShoesList = pumpsAvailable;
        }
        else if(shoeChosen === "Sandals"){
            finalShoesList = pumpsAvailable;
        }

        console.log("FINAL SHOES LIST = ", finalShoesList);

        

    })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CHANGE FUNCTIONS FOR COLOR CHOSEN OF BOTTOMS, TOPS, AND DRESSES

$("#dColors").change(function(){
    dressColorChosen = colorsOfDresses[$('#dColors').val()];
})

$("#bColors").change(function(){
        
        console.log(bottomColorChosen);
        if(bottomsChosen === "pants"){
            bottomColorChosen = colorsOfPants[$('#bColors').val()]; //search for the color chosen in the array and set to a var
            console.log(bottomColorChosen);
        }
        else if(bottomsChosen === "shorts"){
            bottomColorChosen = colorsOfShorts[$('#bColors').val()];
            console.log(bottomColorChosen);
        }

        else if(bottomsChosen === "skirts"){
            bottomColorChosen = colorsOfSkirts[$('#bColors').val()];
            console.log(bottomColorChosen);
        }

})

$("#tColors").change(function(){
    if(topChosen === "blouses"){
        topColorChosen = colorsOfBlouses[$('#tColors').val()];
        console.log(topColorChosen);
    }
    else if(topChosen === "knits"){
        topColorChosen = colorsOfKnits[$('#tColors').val()];
        console.log(topColorChosen);
    }
    else if(topChosen === "other"){
        topColorChosen = colorsOfOtherTops[$('#tColors').val()];
        console.log(topColorChosen);
    }
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //USE THE API TO GET CLOTHING AVAILABLE AND ADD TO SEPARATE ARRAYS
    $(document).ready(function() {
        var api = new GiltApi('813d69b14482076a4615e3533e949d0a');
                        api.getProducts(
                          function (products){
                            $.each( products, function() {
                            api.getProductDetail( this, function( product ) {
                                
                                var productCategories = product.categories;
                                //console.log(productCategories);
                                if(($.inArray("Day Dresses", productCategories) > -1) || ($.inArray("Cocktail Dresses", productCategories) > -1) || ($.inArray("Other Dresses", productCategories) > -1) || ($.inArray("Dresses", productCategories) > -1)){
                                    dressesAvailable.push(product);
                                    //console.log(product.name + "-" + product.categories);
                                }

                                if(($.inArray("Pants", productCategories) > -1) || ($.inArray("Other Pants & Shorts", productCategories) > -1) || ($.inArray("Other Pants", productCategories) > -1) || ($.inArray("Dress Pants", productCategories) > -1) || ($.inArray("Pants & Shorts", productCategories) > -1)){
                                    pantsAvailable.push(product); 
                                }

                                if($.inArray("Shorts", productCategories) > -1){
                                    shortsAvailable.push(product);
                                }

                                if($.inArray("Skirts", productCategories) > -1){
                                    skirtsAvailable.push(product);
                                }

                                if(($.inArray("Tops", productCategories) > -1) || ($.inArray("OtherTops", productCategories) > -1)){
                                    otherTopsAvailable.push(product);
                                } 
                                if(($.inArray("Blouses", productCategories) > -1)){
                                    blousesAvailable.push(product);
                                } 

                                if(($.inArray("Knits", productCategories) > -1)){
                                    knitsAvailable.push(product);
                                }

                                if(($.inArray("Booties", productCategories) > -1)){
                                    bootiesAvailable.push(product); 
                                    //console.log(product.name + "-" + product.categories);
                                }

                                if(($.inArray("Boots", productCategories) > -1)){
                                    bootsAvailable.push(product);
                                }

                                if(($.inArray("Flats", productCategories) > -1)){
                                    flatsAvailable.push(product); 
                                }

                                if(($.inArray("Loafers", productCategories) > -1)){
                                    loafersAvailable.push(product);  
                                }

                                if(($.inArray("Other Shoes", productCategories) > -1)){
                                    otherShoesAvailable.push(product);    
                                }

                                if(($.inArray("Oxfords", productCategories) > -1)){
                                    oxfordsAvailable.push(product);  
                                }

                                if(($.inArray("Pumps", productCategories) > -1)){
                                    pumpsAvailable.push(product);    
                                }

                                if(($.inArray("Sandals", productCategories) > -1)){
                                    sandalsAvailable.push(product);
                                }

                                });
                            });                      
                        },
                        'women');


                        //use jquery to add options to empty select
                        //$("#bColors").append('<option value=1>')
    });

    init = function()
    {
    // define selectors
        var
            $ctaNavBtn = $('.cta-nav'), //similar to document.getElementByClass('.cta-nav')
            //$ctaSearchWeatherBtn = $('.cta-search-weather'),
            $ctaNav1Btn = $('.cta-nav1');

            $ctaNav2Btn = $('.cta-nav2');

            $randBtn = $('.rand');
            $randBtn1 = $('.rand1');

            // define previous and next screen
            $prevScreen = $('.question-1');
            $nxtScreen = $('.question-2');

            // EVENT HANDLING
            $ctaNavBtn.on('click', function (ev) 
            {
                events.clickCtaNav(ev, $prevScreen, $nxtScreen) 
                
            });

            //the second next button in the bottoms/tops path
            $ctaNav1Btn.on('click', function(ev) 
            {
                events.clickCtaNav1(ev, $prevScreen, $nxtScreen)
                
                //bColorChosen = $('#bColor').val();
                //tColorChosen = $('#tColor').val();
                /*if($('#bottoms-list') !== 'undefined'){

                console.log('bottom:' + bottoms);
                }*/

                //ADD PRODUCTS OF CHOSEN COLOR TO ARRAY AND DISPLAY ONE AT FIRST

                if(bottomsChosen==="pants"){
                    $.each(pantsAvailable, function()
                    {
                        var productSkus = this.skus;
                        var product=this;
                        console.log(product.name);
                        $.each(productSkus, function(){
                            var productAttributes = this.attributes;
                                $.each(productAttributes, function(){
                                    if((this.name === "color") && (this.value === bottomColorChosen) && ($.inArray(product,finalBottoms) ==-1)){
                                        finalBottoms.push(product);
                                        
                                        for( key in product.image_urls ) {
                                            $('#b').html("<img src= '" + product.image_urls[ key ][ 0 ].url +"'/> "); 
                                            //console.log(product.image_urls[ key ][ 0 ].url);
                                            break;
                                            
                                        }
                                    }
                                  
                                });
                            });
                        });            
                    }


                    if(bottomsChosen==="shorts"){
                    $.each(shortsAvailable, function()
                    {
                        var productSkus = this.skus;
                        var product=this;
                        $.each(productSkus, function(){
                            var productAttributes = this.attributes;
                                $.each(productAttributes, function(){
                                    if((this.name === "color") && (this.value === bottomColorChosen)&& ($.inArray(product,finalBottoms) ==-1)){
                                        finalBottoms.push(product);
                                        for( key in product.image_urls ) {
                                            $('#b').html("<img src= '" + product.image_urls[ key ][ 0 ].url +"'/> "); 
                                            break;
                                            
                                        }
                                    }
                                });
                            });
                        });            
                    }

                    if(bottomsChosen==="skirts"){
                    $.each(skirtsAvailable, function()
                    {
                        var productSkus=this.skus;
                        var product = this;
                        $.each(productSkus, function(){
                            var productAttributes = this.attributes;
                                $.each(productAttributes, function(){
                                    if((this.name === "color") && (this.value === bottomColorChosen)&& ($.inArray(product,finalBottoms) ==-1)){
                                        finalBottoms.push(product);
                                        for( key in product.image_urls ) {
                                            $('#b').html("<img src= '" + product.image_urls[ key ][ 0 ].url +"'/> "); 
                                            break;
                                            
                                        }
                                    }
                                });
                            });
                        });            
                    }

                if(topChosen==="blouses"){
                    $.each(blousesAvailable, function()
                    {
                        var productSkus = this.skus;
                        var product=this;
                        $.each(productSkus, function(){
                            var productAttributes = this.attributes;
                                $.each(productAttributes, function(){
                                    if((this.name === "color") && (this.value === topColorChosen)&& ($.inArray(product,finalTops) ==-1)){
                                        finalTops.push(product);
                                        for( key in product.image_urls ) {
                                            $('#t').html("<img src= '" + product.image_urls[ key ][ 0 ].url +"'/> "); 
                                            break;
                                            
                                            
                                        }
                                    }
                                });
                            });
                        });            
                    }

                    if(topChosen==="knits"){
                    $.each(knitsAvailable, function()
                    {
                        var productSkus = this.skus;
                        var product=this;
                        $.each(productSkus, function(){
                            var productAttributes = this.attributes;
                                $.each(productAttributes, function(){
                                    if((this.name === "color") && (this.value === topColorChosen)&& ($.inArray(product,finalTops) ==-1)){
                                        finalTops.push(product);
                                        for( key in product.image_urls ) {
                                            $('#t').html("<img src= '" + product.image_urls[ key ][ 0 ].url +"'/> "); 
                                            break;
                                            
                                        }
                                    }
                                });
                            });
                        });            
                    }

                    if(topChosen==="other"){
                    $.each(otherTopsAvailable, function()
                    {
                        var productSkus = this.skus;
                        var product=this;
                        $.each(productSkus, function(){
                            var productAttributes = this.attributes;
                                $.each(productAttributes, function(){
                                    if((this.name === "color") && (this.value === topColorChosen)&& ($.inArray(product,finalTops) ==-1)){
                                        finalTops.push(product);
                                        for( key in product.image_urls ) {
                                            $('#t').html("<img src= '" + product.image_urls[ key ][ 0 ].url +"'/> "); 
                                            break;
                                            
                                        }
                                    }
                                });
                            });
                        });            
                    }


                    
                    /*$.each(finalShoesList, function()
                    {
                        var productSkus = this.skus;
                        var product=this;
                        $.each(productSkus, function(){
                            var productAttributes = this.attributes;
                                $.each(productAttributes, function(){
                                    if($.inArray(product,finalShoesList) ==-1){
                                        for( key in product.image_urls ) {
                                            $('.question-3 #s').html("<img src= '" + product.image_urls[ key ][ 0 ].url +"'/> "); 
                                            break;
                                            
                                        }
                                    }
                                });
                            });
                        });
                                    
                    
                    
                    $.each(finalShoesList, function()
                    {
                        var productSkus = this.skus;
                        var product=this;
                        $.each(productSkus, function(){
                            var productAttributes = this.attributes;
                                $.each(productAttributes, function(){
                                    if($.inArray(product,finalShoesList) ==-1){
                                        for( key in product.image_urls ) {
                                            $('.question-3-alt #s1').html("<img src= '" + product.image_urls[ key ][ 0 ].url +"'/> "); 
                                            break;
                                            
                                        }
                                    }
                                });
                            });
                        }); */
                
                                 
                    




            });

            //next button for dresses path
            $ctaNav2Btn.on('click', function(ev) 
            {
                events.clickCtaNav2(ev, $prevScreen, $nxtScreen)

                if(dressChosen==="Yes"){
                    $.each(dressesAvailable, function()
                    {
                        var productSkus = this.skus;
                        var product=this;
                        $.each(productSkus, function(){
                            var productAttributes = this.attributes;
                                $.each(productAttributes, function(){
                                    if((this.name === "color") && (this.value === dressColorChosen)&& ($.inArray(product,finalDresses) ==-1)){ //check to make sure color value === color chosen and add it to final array
                                        finalDresses.push(product);
                                        
                                        for( key in product.image_urls ) {
                                            $('.question-3-alt #d').html("<img src= '" + product.image_urls[ key ][ 0 ].url +"'/> "); //display the image of size in index 0
                                            break;
                                            
                                        }
                                    }
                                });
                            });
                        });            
                    }
                        
            });

            //random button for bottoms/tops path
            $randBtn.on('click', function(ev)
            {
                events.clickRand(ev) 
            });

            //random button for dresses path
            $randBtn1.on('click', function(ev)
            {
                events.clickRand1(ev)
            });


    };

    events = 
    {
        clickCtaNav: function (ev, $prevScreen, $nxtScreen) 
        {
            ev.preventDefault();
            $prevScreen.hide();
            $nxtScreen.show();
        },

        clickCtaNav1: function (ev, $prevScreen, $nxtScreen) 
        {
            ev.preventDefault();
            $prevScreen = $('.question-2');
            $nxtScreen = $('.question-3');
            $prevScreen.hide();
            $nxtScreen.show();

        },

        clickCtaNav2: function (ev, $prevScreen, $nxtScreen) 
        {
            ev.preventDefault();
            $prevScreen = $('.question-2-alt');
            $nxtScreen = $('.question-3-alt');

            $prevScreen.hide();
            $nxtScreen.show();

        },


        //when the user wants another random outfit
        clickRand: function(ev)
        {
            ev.preventDefault();

            //GET RANDOM INDEX FOR EACH ARRAY
            var randTop = Math.floor((Math.random()*finalTops.length-1)+1); 
            var randBottom = Math.floor((Math.random()*finalBottoms.length-1)+1);
            var randShoes = Math.floor((Math.random()*finalShoesList.length-1)+1);
            
            console.log("RAND TOP INDEX = " + randTop);
            console.log("RAND BOTTOM INDEX = " + randBottom);
            console.log("RAND SHOES INDEX = " + randShoes);
            
            console.log("FINALTOPSLENGTH = " + finalTops.length);
            console.log("FINALBOTTOMSLENGTH = " + finalBottoms.length);
            
            //FIND A TOP BASED ON THE RANDOM INDEX
            finalTop = finalTops[randTop];
            finalBottom = finalBottoms[randBottom];
            finalShoes = finalShoesList[randShoes];

            //DISPLAY IMAGES BASED ON RANDOM
            if(bottomsChosen==="pants"){

                  for( key in finalBottom.image_urls ) {
                        $('#b').html("<img src= '" + finalBottom.image_urls[ key ][ 0 ].url +"'/> "); 
                        
                        break;
                    } 
                
                    
                  
            }

            if(bottomsChosen==="shorts"){
                for( key in finalBottom.image_urls ) {
                    $('#b').html("<img src= '" + finalBottom.image_urls[ key ][ 0 ].url +"'/> "); 
                    break;
                }
            }

            if(bottomsChosen==="skirts"){
                for( key in finalBottom.image_urls ) {
                    $('#b').html("<img src= '" + finalBottom.image_urls[ key ][ 0 ].url +"'/> "); 
                    break;
                }
            }

            if(topChosen==="blouses"){
                for( key in finalTop.image_urls ) {
                    $('#t').html("<img src= '" + finalTop.image_urls[ key ][ 0 ].url +"'/> ");  
                    break;
                }

            }

            if(topChosen==="knits"){
                for( key in finalTop.image_urls ) {
                    $('#t').html("<img src= '" + finalTop.image_urls[ key ][ 0 ].url +"'/> "); 
                    break;
                }
            }

            if(topChosen==="other"){
                for( key in finalTop.image_urls ) {
                    $('#t').html("<img src= '" + finalTop.image_urls[ key ][ 0 ].url +"'/> "); 
                    break;
                }        
            }

            for( key in finalShoes.image_urls ) {
                    $('.question-3 #s').html("<img src= '" + finalShoes.image_urls[ key ][ 0 ].url +"'/> "); 

                    break;
                }
        },

        clickRand1: function (ev)
        {
            ev.preventDefault();
            var randDress = Math.floor((Math.random()*finalDresses.length-1)+1);
            var randShoes = Math.floor((Math.random()*finalShoesList.length-1)+1);

            console.log("RAND SHOES INDEX = " + randShoes);
            console.log("RAND DRESS INDEX = " + randDress);
            console.log("FINAL DRESSES LENGTH = " + finalDresses.length);
            console.log("FINAL SHOES LENGTH = " + finalShoesList.length);

            finalDress = finalDresses[randDress];
            finalShoes = finalShoesList[randShoes];
        
                for( key in finalDress.image_urls ) {
                    $('.question-3-alt #d').html("<img src= '" + finalDress.image_urls[ key ][ 0 ].url +"'/> "); 
                    break;
                } 

                for( key in finalShoes.image_urls ) {
                    $('.question-3-alt #s1').html("<img src= '" + finalShoes.image_urls[ key ][ 0 ].url +"'/> "); 

                    break;
                }
            
        }


    };

    return {
    init: init
    };

}());