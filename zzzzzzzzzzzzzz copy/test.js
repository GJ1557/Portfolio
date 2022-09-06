$('body').mouseover(function(){
    $(this).css({cursor: 'none'});
  });
  
  $('#text1>a').on('mousemove', function(e){
    $('#cursor').css({
      left:  e.pageX,
      top:   e.pageY,
    });
  });

  $('#text1>a').on('mouseover', function(e){
    $('#cursor').addClass('on')
  });

  $('#text1>a').on('mouseleave', function(e){
    $('#cursor').removeClass('on')
  });