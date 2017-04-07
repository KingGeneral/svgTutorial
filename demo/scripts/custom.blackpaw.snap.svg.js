// kinggeneral
// 
// crocodile svg test
// with  snap svg 0.5.1
// 
// var s  = Snap("#svg");

//first setup the svg in <svg>
//then apply this move
window.onload = function () {
	//initialize
	var blackpaw  = Snap.select("#blackpaw"),
        pawCenter = blackpaw.select("#pawCenter"),
        paw1      = blackpaw.select("#paw1"),
        paw2      = blackpaw.select("#paw2"),
        paw3      = blackpaw.select("#paw3"),
        paw4      = blackpaw.select("#paw4"),
        timer;

    // var croc = Snap.select("#croc") ,	//get id
    //     head = croc.select("#upper-head"),	//get id
    //     jaw = croc.select("#upper-jaw"),	//get id
    //     symbol = croc.select("#symbol"),	//get id
    //     timer;								//set timer variable for animation

    // central point for spin
    // left,top
    var pivots = [
                [44, 147],		//pivot [0]
                [92, 126]		//pivot [1]
            ];
    // paw1.attr({ stroke: 'red', strokeDasharray: "40 280", fill: 'none', strokeWidth: 20 });
    // paw1.transform('r0,100,100');
    // paw1.animate({ transform: "r360,100,100" }, 1000, mina.linear, anim);
    
    //set test
    paw1.attr({
        fill: "none",
        stroke: 'red',
        strokeWidth: 3,
        strokeDasharray: "50 24 50 24", //(poly , range , .... loop )
        strokeDashoffset: 5
    });
    paw2.attr({
        fill: "none",
        stroke: 'red',
        strokeWidth: 3,
        strokeDasharray: "50 24 50 24", //(poly , range , .... loop )
        strokeDashoffset: 5
    });
    paw3.attr({
        fill: "none",
        stroke: 'red',
        strokeWidth: 3,
        strokeDasharray: "50 24 50 24", //(poly , range , .... loop )
        strokeDashoffset: 5
    });
    paw4.attr({
        fill: "none",
        stroke: 'red',
        strokeWidth: 3,
        strokeDasharray: "50 24 50 24", //(poly , range , .... loop )
        strokeDashoffset: 5
    });
    pawCenter.attr({
        fill: "none",
        stroke: 'red',
        strokeWidth: 3,
        strokeDasharray: "50 24 50 24", //(poly , range , .... loop )
        strokeDashoffset: 5
    });

    function close() {
        clearTimeout(timer);

        Snap.animate(0,1000, function( value ){     //speed clockwise , speed counterclockwise
           pawCenter.attr({ 'strokeDashoffset': value })
           paw1.attr({ 'strokeDashoffset': value })
           paw2.attr({ 'strokeDashoffset': value })
           paw3.attr({ 'strokeDashoffset': value })
           paw4.attr({ 'strokeDashoffset': value })
        },10000 );

        // paw1.animate({ 
        //     transform: "r" + [8, pivots[0]]
        // }, 500, mina.backin);
        // paw1.transform('r0,100,100');

        // paw2.animate({ 
        //     transform: "r" + [8, pivots[0]]
        // }, 500, mina.backin);

        // paw3.animate({ 
        //     transform: "r" + [8, pivots[0]]
        // }, 500, mina.backin);

        // paw4.animate({ 
        //     transform: "r" + [8, pivots[0]]
        // }, 500, mina.backin);
        
        // jaw.animate({
        //     transform: "r" + [37, pivots[1]]
        // }, 500, mina.backin);

        // timer = setTimeout(function () {
        //     symbol.animate({
        //         transform: "t-70,40r40"
        //     }, 100);
        // }, 400);
    }

    // function open() {
    //             clearTimeout(timer);

    //             head.animate({ 
    //                 transform: "r" + [0, pivots[0]]
    //             }, 700, mina.elastic);
                
    //             jaw.animate({
    //                 transform: "r" + [0, pivots[1]]
    //             }, 700, mina.elastic);

    //             symbol.animate({
    //                 transform: "t0,0r0"
    //             }, 500, mina.elastic);
    //         }

    //======================
    // animation area
    //======================
    
    timer = setTimeout(close, 2000);  //start after 2s
    // timer = setTimeout(open, 50);

    //now recursive each hover
    blackpaw.hover(open, 
                function () {
                    timer = setTimeout(close, 3000);  //start after 3s  
                }
            );

}