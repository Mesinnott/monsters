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
        monsters[index]= newMonster
        return{message:'you done edit dat monster'}
    }
    return{error:'that monster no existy'}
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
        res.send(
            editMonster(req.params.index, req.body.monster))
    })
    .delete(function(req, res){
        removeMonster(req.params.index)
        res.send({message:"poof.  monster gone"})
    })

    module.exports={
        routes
    }