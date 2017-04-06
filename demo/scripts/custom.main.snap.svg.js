// alert('called');
// zonetm
// beta test svg with snap svg 0.5.1
// 
// references basic svg:
// https://sarasoueidan.com/blog/svg-coordinate-systems/
// https://sarasoueidan.com/blog/svg-transformations/
// 
// https://sarasoueidan.com/blog/css-svg-clipping/
// 
// http://unicorn-ui.com/blog/svg-for-beginners.html
// https://www.dashingd3js.com/using-the-svg-coordinate-space

//here we go
var s  = Snap("#svg");
var s2 = Snap("#svg2");

//make circle
// left,top,opacity
var bigCircle 	= s.circle(150, 150, 100);
var bigCircle2  = s2.circle(150, 150, 100);

//create outline
bigCircle.attr({
    stroke: "#000",
    strokeWidth: 5
});
bigCircle2.attr({
    stroke: "#FA0A0A",
    strokeWidth: 5
});

//add pattern direct in variable s
var p = s.path("M110,95,95,110M115,100,100,115").attr({
        fill: "none",
        stroke: "#bada55",
        strokeWidth: 4
    });
var p2 = s2.path("M110,95,95,110M115,100,100,115").attr({
        fill: "none",
        stroke: "#bada55",
        strokeWidth: 4
    });
//make a cut in pattern
var cut = s.rect(100, 100, 10, 10).attr({fill: "#fff", opacity: .5})
var cut2 = s2.rect(100, 100, 10, 10).attr({fill: "#fff", opacity: .5})

//to remove after apped
cut.remove();
cut2.remove();

//make it a pattern
var ptrn = p.pattern(100, 100, 10, 10);
var ptrn2 = p2.pattern(100, 100, 10, 10);
//ptrn is an invisible <pattern> element.

//after a patten it can be called as fill
bigCircle.attr({
    fill: ptrn
});
bigCircle2.attr({
    fill: ptrn2
});

//now animate
p.animate({strokeWidth: 1, stroke: "#FF4136"}, 1e3);
p2.animate({strokeWidth: 1, stroke: "#FF4136"}, 1e3);

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////// advance
/// all from phase 1

var s3 = Snap("#svg3");
var bigCircle3 = s3.circle(150, 150, 100).attr({
    fill: "#bada55",
    stroke: "#000",
    strokeWidth: 6
});
var p3 = s3.path("M110,95,95,110M115,100,100,115").attr({
        fill: "none",
        stroke: "#bada55",
        strokeWidth: 4
    });
var ptrn3 = p3.pattern(100, 100, 10, 10);
bigCircle3.attr({
    fill: ptrn3
});

// start
// create mask
var ring = s3.circle(150,150,92).attr({
    fill: "none",
    stroke: "#fff",
    strokeWidth: 10 
});

//insert square
s3.rect(0,150,300,30).attr({fill:"#85144B"}).insertBefore(bigCircle3);

//applying mask
bigCircle3.attr({
    mask:ring
});

//invert the mask that already applied
var mask = s.mask();
//add square again with white color
mask.add(s.rect(0,0,"100%","100%").attr({fill:"#fff"}));
//cover the ring too
mask.add(ring.attr({stroke: "#000"}));
//apply the mask
bigCircle3.attr({
    mask:mask
});

ring.animate({r:10},1e3);

////////////////////////////////////////////
///circle elastic svg4
////////////////////////////////////////////

var s4 = Snap("#svg4");
var bigCircle4 = s4.circle(150,150,100);

//reuse bigCircle4 for pattern
var c4 = bigCircle4.use();

//pattern fill
p4 = s4.path("M110,95,95,110M115,100,100,115").attr({
        fill:"none",
        stroke: "#bada55",
        strokeWidth: 4
    });

var ptrn4 = p4.pattern(100,100,10,10);
c4.attr({
    fill: ptrn4
});

//reuse bigCircle4 again for stroke
var c2 = bigCircle4.use();

c2.attr({
    fill:"none",
    stroke: "#000",
    strokeWidth: 6
});

//reuse bigCircle4 again for mask circle
var ring4 = bigCircle4.use();
ring4.attr({
    fill:"none",
    stroke:"#000",
    strokeWidth:20 //need 10px only ??
});
// Hide bigCircle by moving it to <defs>
bigCircle4.toDefs();

var mask4 = s4.mask();
// Background rect:
mask4.add(s.rect(0,0,"100%","100%").attr({fill:"#fff"}));
//mask the ring
mask4.add(ring4);
//combine mask
c4.attr({
    mask:mask4
});
bigCircle4.animate({r:50},5e3,mina.elastic);

////////////////////////////////////////////
/// text animate svg5
////////////////////////////////////////////

var s5 = Snap("#svg5");
//create background box
var bg = s5.rect(50,50,200,200,10).attr({fill:"#ccc"});
//add some text
var t = s5.text(150,150,"KingGeneral").attr({
    font : "30px Helvetica, sans-serif",
    textAnchor : "middle",
    fill: "#ddd"
});
//now add mask
//reuse object from t
var t2 = t.use().attr({
    stroke: "#000",
    strokeWidth: 10,
    strokeLinecap: "round",
    strokeLinejoin: "round"
})
var mask5 = s5.mask();
//add rect to mask
mask5.add(s.rect(0,0,"100%","100%").attr({fill:"#fff"}));
mask5.add(t2);
//now apply the mask
bg.attr({
    mask: mask5
});

//animate the mask
t2.animate({strokeWidth:2},5e3,mina.bounce);
