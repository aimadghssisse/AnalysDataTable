(function($){
  $.fn.AnalytData = function(menu,dataAnalys){
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
        $(Menu.tagInside).append('<th>'+value.name+'</th>').each(function(){
          if(value.class)
            $('th').eq(key).addClass(value.class)

            if(value.id)
            $('th').eq(key).attr('id',value.id)

        })
      });
      if(dataAnalys){
        $.each(dataAnalys,function(key,value){
          var objkey =Object.keys(value)
          console.log(objkey.length);
          $('tbody').append('<tr></tr>');
          for(i=0;i<objkey.length;i++){
            $('tbody tr').eq(key).append('<td>'+dataAnalys[key][objkey[i]]+'</td>')
          }
        })
      }
    });
  }
}(jQuery));
