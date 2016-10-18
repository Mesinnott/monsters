Monster Registration
====================

<img src="http://www.northwestcrossing.com/wp-content/uploads/2015/10/fca4ce85-0b3b-4b59-b288-0ab3d781338a.jpg" width="500" />

In the spirit of Halloween let's create an application that helps us catalog a list of monsters. Every monster will have some of the same basic attributes such as id, name, type, photoUrl. Monsters can then have any number of other attributes such as attacks, weapons, job, description, backstory ect...

All of the information that you collect on your monsters will be stored on the server sor you are going to need to use node for this. There are a few things that you will want to start off with.

First things create a new directory and cd into it to node project by typing in `npm init` This command will setup your package.json file.

To keep things relatively simple for today lets just save everything into arrays. 

You will need to create a MonsterModel and Routes to handle the passing of data. It is essential that we can create, read, update, and delete information about each monster (CRUD) 

Think about how you want to select a monster and edit its information. Make sure you don't just create new monsters everytime you go to edit one.


***Pro Tip*** 
To hit your server from codefoo you will need to enable [cors](https://www.npmjs.com/package/cors)
