(function(){
    var ms= this;
    var monsterService= new MonsterService();


    function publishMonsters(array){
        var monsterElem = $('#monsterCards')
        for (var i=0; i<array.length; i++){
            var nextM = array[i];
            myTemplate+=
            `<div class='monster-card col-xs-4'>
                <img class= 'monster-pic' src=${nextM.url}' alt=''>
                <h3> Name: ${nextM.name}</h3>
                <h4>age:${nextM.age}</h4>
                <h4>description:${nextM.description}</h4>
                <h4>type:${nextM.type}</h4>
                <button class= 'btn btn-danger remove-monster' id=${i}> Remove From Team </button>
            </div>`
        }
        monsterElem.empty()
        monsterElem.append(myTemplate);
    }



        monsterService.getMonsters(publishMonsters)





}())