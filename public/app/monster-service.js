function MonsterService(){
    var baseUrl= 'localhost:8080/monsters'
    var query= '/?'
    // var dataStore = this;
    var myMonsters = [];


    this.getMonsters=function(callWhenDone){
        $.get(baseUrl, function(res){
            callWhenDone(res);
        })
    }

    // this.addMonster=function(monster, callWhenDone){
    //     $.post(baseUrl, monster, function(res){
    //         callWhenDone(res)
    //     })
    // }

    // this.editMonster=function(index, monster, callWhenDone){
    //     $.put(baseUrl + query, function(res){
    //         callWhenDone(res)
    //     })
    // }
    
    // this.deleteMonster=function(callWhenDone){
    //     $.delete(baseUrl + query, function(res){
    //         callWhenDone(res)
    //     })
    // }





}