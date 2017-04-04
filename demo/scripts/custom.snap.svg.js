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