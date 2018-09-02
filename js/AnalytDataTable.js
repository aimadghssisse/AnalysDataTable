(function($){
  $.fn.AnalytData = function(menu){
    var Menu = $.extend({
      tagInside : "thead",
      data : {
        data:[],
        class:null,
        id:null
      }
    },menu);
    return this.each(function(){
      $.each(Menu.data,function(key,value){
        console.log(Menu.tagInside);
        $(Menu.tagInside).append('<th>'+value.name+'</th>').each(function(){
          if(value.class)
            $('th').eq(key).addClass(value.class)

            if(value.id)
            $('th').eq(key).attr('id',value.id)

        })
      });
    });
  }
}(jQuery));
