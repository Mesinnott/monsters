function MonsterService(){
    var baseUrl= 'http://localhost:8080/monsters'
    var query= '/?'
    // var dataStore = this;
    var myMonsters = [];


    this.getMonsters=function(callWhenDone){
        $.get(baseUrl, function(res){
            callWhenDone(res);
        })
    }

    this.addMonster=function(monster, callWhenDone){
        $.post(baseUrl, monster, function(res){
            callWhenDone(res)
        })
    }

    jQuery.each( [ "put", "delete" ], function( i, method ) {
  jQuery[ method ] = function( url, data, callback, type ) {
    if ( jQuery.isFunction( data ) ) {
      type = type || callback;
      callback = data;
      data = undefined;
    }
 
    return jQuery.ajax({
      url: url,
      type: method,
      dataType: type,
      data: data,
      success: callback
    });
  };
});

    this.editMonster=function(index, monster, callWhenDone){
        $.put(baseUrl + query, function(res){
            callWhenDone(res)
        })
    }

    
    this.deleteMonster=function(index, callWhenDone){
        $.delete(baseUrl + query, index, function(res){
            callWhenDone(res)
        })
    }





}