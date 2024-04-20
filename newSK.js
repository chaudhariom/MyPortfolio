let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.95,
    fill: {gradient: ['#ff014f', '#ff014f']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".c .bar").circleProgress({
    value: 0.90
  });
  $(".com .bar").circleProgress({
    value: 0.99
  });
  
  $(".node .bar").circleProgress({
    value: 1.0
  });      
  $(".react .bar").circleProgress({
    value: 0.99
  });