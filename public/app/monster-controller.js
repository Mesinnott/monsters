(function(){
    var ms= this;
    var monsterService= new MonsterService();
    debugger


    function addNewMonster(monster){
        monsterService.addMonster(monster,function(res){
        return res
         })
    }

    function deleteThisMonster(index){
        monsterService.deleteMonster(index, function(res){
            return res
        })
    }

    // function editThisMonster(index, monster){}

    function publishMonsters(array){
        var monsterElem = $('#monsterCards')
        var myTemplate=''
        for (var i=0; i<array.length; i++){
            var nextM = array[i];
            
            myTemplate+=
            `<div class='monster-card col-xs-4'>
                <img class= 'monster-pic' src='${nextM.url}' alt=''>
                <h3> Name: ${nextM.name}</h3>
                <h4>age:${nextM.age}</h4>
                <h4>description:${nextM.description}</h4>
                <h4>type:${nextM.type}</h4>
                <button class= 'btn btn-danger remove-monster' id=${i}> KILL THE MONSTER </button>
            </div>`
        }
        monsterElem.empty()
        monsterElem.append(myTemplate);
    }

var Monster=function(name, age, description, sightings, url, type){
    this.name=name
    this.age=age
    this.description=description
    this.sightings=sightings
    this.url=url
    this.type=type

}

$('#submit').on('submit', function(e){
    e.preventDefault();
    debugger
    var monster = new Monster(this.name.value, this.age.value, this.description.value, this.sightings.value, this.photoUrl.value, this.type.value)
    var newMonster ={monster}
    console.log(monster)
    addNewMonster(newMonster)
    monsterService.getMonsters(publishMonsters)
})

$('#monsterCards').on('click', '.remove-monster', function(e){
    e.preventDefault()
    var hello = this.id
    console.log(hello)
    debugger
    deleteThisMonster(hello)
    monsterService.getMonsters(publishMonsters)
})
 
 
 
 
 
 
 
 monsterService.getMonsters(publishMonsters)

}())