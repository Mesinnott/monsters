(function () {
    var ms = this;
    var monsterService = new MonsterService();
    var monst = []


    getTheMonsters()
    function getTheMonsters() {
        debugger
        monsterService.getMonsters(function (array) {
            monst = array
            console.log(monst)
        })
    }

    function addNewMonster(monster) {
        debugger
        monsterService.addMonster(monster, function (res) {
            return res
        })
    }

    function deleteThisMonster(index) {
        debugger
        monsterService.deleteMonster(index, function (res) {
            return res
        })
    }


    function publishMonsters(array) {
        debugger
        var monsterElem = $('#monsterCards')
        var myTemplate = ''
        var x=''
        var seen=''
        // var monsterClass=''
        for (var i = 0; i < array.length; i++) {
            var nextM = array[i];

            switch(nextM.type)   {
                case 'vampire':
                monsterClass='red'
                break;
                case 'zombie':
                monsterClass='green'
                break;
                case 'robot':
                monsterClass='grey'
                break;
                case 'witch':
                monsterClass='black'
                break;
                case 'monster':
                monsterClass='yellow'
                break;
                case 'ghost':
                monsterClass ='white'
                break;
                case 'other':
                monsterClass = 'blue'
                break;
                default:
                monsterClass=''
            }
    x=nextM.sightings
    switch(x)   {
                case (x==0):
                seen='never'
                break;
                case 0<x<=10:
                seen='rare'
                break;
                case 10<x<=50:
                seen='uncommon'
                break;
                case 50<x<=100:
                seen='common'
                break;
                case (x>100):
                seen='boring'
                break;
                default:
                seen='rare'
            }


            myTemplate +=
                `<div class='monster-card ${monsterClass} ${seen} col-xs-12 col-sm-4'>
                <img class= 'monster-pic' src='${nextM.url}' alt=''>
                <h4><b>'${nextM.name}'</b> is a ${nextM.description} <b>${nextM.type}</b>. This terror has tormented the world for <b>${nextM.age}</b> years already.<h4> 
                
                <button class= 'btn btn-danger remove-monster' id=${i}> KILL THE MONSTER </button>
                <button class= 'btn btn-primary edit-monster' id=${i}> EDIT THE MONSTER </button>
            </div>`
            
            
        }
        monsterElem.empty()
        monsterElem.append(myTemplate);
    }

    var Monster = function (name, age, description, sightings, url, type) {
        this.name = name
        this.age = age
        this.description = description
        this.sightings = sightings
        this.url = url
        this.type = type

    }

    $('#submit').on('submit', function (e) {
        e.preventDefault();
        debugger
        var monster = new Monster(this.name.value, this.age.value, this.description.value, this.sightings.value, this.photoUrl.value, this.type.value)
        var newMonster = { monster }
        console.log(monster)
        addNewMonster(newMonster)
        monsterService.getMonsters(publishMonsters)
    })

    $('#monsterCards').on('click', '.remove-monster', function (e) {
        e.preventDefault()
        var hello = (this.id)
        console.log('id =' + hello)
        debugger
        deleteThisMonster(hello)
        monsterService.getMonsters(publishMonsters)
    })

    $('#monsterCards').on('click', '.edit-monster', function (e) {
        e.preventDefault()
        debugger
        var hello = this.id
        $('#editForm').removeClass('hidden')
        console.log('hiiiii=' + monst)
        console.log('this one=' + monst[hello])
        var myMonst = monst[hello]
        $('#editName').val(myMonst.name)
        $('#editAge').val(myMonst.age)
        $('#editDesc').val(myMonst.description)
        $('#editSight').val(myMonst.sightings)
        $('#editPhoto').val(myMonst.url)
        $('#editType').val(myMonst.type)
        $('#editId').val(hello)
        // console.log($('#editID'))

    })

    $('#editForm').on('submit', function (e) {
        e.preventDefault()
        debugger
        var monster = new Monster($('#editName').val(), $('#editAge').val(), $('#editDesc').val(), $('#editSight').val(), $('#editPhoto').val(), $('#editType').val())
        var newMonster = { monster }
        var hello = $('#editId').val()
        console.log('id=' + hello)
        console.log(newMonster)
        getTheMonsters()
        monsterService.editMonster(hello, newMonster, function (res) {
            return res
        })

        $('#editForm').addClass('hidden')
        getTheMonsters()
        monsterService.getMonsters(publishMonsters)
    })

    $('#editForm').on('click', '#close', function (e) {
        e.preventDefault()
        debugger
        $('#editForm').addClass('hidden')
    })



    monsterService.getMonsters(publishMonsters)

} ())