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
	var croc = Snap.select("#crocodile"),	//get id
        head = croc.select("#upper-head"),	//get id
        jaw = croc.select("#upper-jaw"),	//get id
        symbol = croc.select("#symbol"),	//get id
        timer;								//set timer variable for animation

    // central point for spin
    // left,top
    var pivots = [
                [44, 147],		//pivot [0]
                [92, 126]		//pivot [1]
            ];

    function close() {
                clearTimeout(timer);

                head.animate({ 
                    transform: "r" + [8, pivots[0]]
                }, 500, mina.backin);
                
                jaw.animate({
                    transform: "r" + [37, pivots[1]]
                }, 500, mina.backin);

                timer = setTimeout(function () {
                    symbol.animate({
                        transform: "t-70,40r40"
                    }, 100);
                }, 400);
            }

    function open() {
                clearTimeout(timer);

                head.animate({ 
                    transform: "r" + [0, pivots[0]]
                }, 700, mina.elastic);
                
                jaw.animate({
                    transform: "r" + [0, pivots[1]]
                }, 700, mina.elastic);

                symbol.animate({
                    transform: "t0,0r0"
                }, 500, mina.elastic);
            }

    //======================
    // animation area
    //======================
    
    timer = setTimeout(close, 50);
    // timer = setTimeout(open, 50);

    //now recursive each hover
    croc.hover(open, 
                function () {
                    timer = setTimeout(close, 200);
                }
            );

}