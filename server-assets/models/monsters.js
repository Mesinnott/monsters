let routes = require('express').Router();

let monsters = [];

function addMonster(monster){
    monsters.push(monster);
}

function removeMonster(index){
    monsters.splice(index, 1)
}

function editMonster(index, newMonster){
    if(index<monsters.length){
        monsters[index]=newMonsterreturn
        return{message:'you done edit dat monster'}
    }
    return{error:'dat monSTAR no existy'}
}

routes.route('/monsters/:index?')
    .get(function(req, res){
        res.send(monsters)
    })
    .post(function(req, res){
        addMonster(req.body.monster)
        res.send({message:'Success! More monsters!'})
    })
    .put(function(req, res){
        removeMonster(req.params.index)
        res.send({message:"poof.  monster gone"})
    })

    module.exports={
        routes
    }