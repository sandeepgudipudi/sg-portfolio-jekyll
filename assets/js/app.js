/*
 Cufon font repleactment code
 * */
Cufon.replace('.logo h1', {fontFamily: 'Inspiration'});

/*Cufon.replace('.logo h2', {fontFamily: 'Museo Slab 100'});

Cufon.replace('.logo h2 span', {fontFamily: 'Abraham Lincoln'});

Cufon.replace('p.big_text, p.small_text', {fontFamily: 'Museo Slab 100'});

Cufon.replace('p.big_text strong, p.small_text strong', {fontFamily: 'Museo Slab 700'});*/


/*
 ON WINDOW RESIZE
 * */
jQuery(window).bind('resize', (function() {
  var timer;
  return function() {
    clearTimeout(timer);
    //refresh cufon fonts with new font-size in css
    timer = setTimeout(function() {
      Cufon.refresh();
    }, 50); 
  };
})());