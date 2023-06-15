// question1.The story telling requires art in which different stories are inherrited to different people.We shall have three classes which are stories,that will hold the properties for stories(moral lesson,age group and the length).The second class is f Storyteller which shall inherit properties from story but shall have a different attribute called language and it shall return the name of the storyteller.Lastly we have class Translate which shall also inherit from story and returns a statement to translate from one language to another

class Story{
    constructor(Story,morallesson,length){
        this.Story=Story
        this.morallesson=morallesson
        this.length=length
    }
    printStrory(){
        return `${this.Story} with ${this.morallesson} is ${this.length}`
    }
}
class Storyteller extends Story{
    constructor(Story,morallesson,length,person){
        super(Story,morallesson,length);
        this.person=person
    }
        printStoryteller(){
            return  ` The Story ${this.Story} of  morallesson ${this.morallesson} wich is   ${this.length}long  was narrated by ${this.person}`
        }
}
class Translate extends Story{
    constructor(Story,morallesson,length,language){
        super(Story,morallesson,length);
        this.language=language
    }
    translate(){
        let language="Kiswahili"
        if (this.language ==="Kiswahili"){
            return `translate to english `
        }
        else{
            `remains in the same language`
        } 
    }
}
let story1=new Story("The Greedy Hyena","40minuteslong","teaches on importance of being selfless")
console.log(story1.printStrory())
let story2= new Translate("Greedyhyena","shairing","30minutes","English")
console.log(story2.translate())
let story3=new Storyteller("Greedyhyena","shairing","40minutes","John")
console.log(story3.printStoryteller())
//This questions talks about a class recipee that has the following attributes ingredients,cooking method ,nutritionalinformation and preparationtime.All the other classes  shall theerefore inherit from this class since they will also have similar properties
class Recipee{
    constructor(ingredients,preparatipontime,cookingmethod,nutritionalinfo){
        this.ingredients=ingredients
        this.preparatipontime=preparatipontime
        this.cookingmethod=cookingmethod
        this.nutritionalinfo=nutritionalinfo
    }

}
class MorocanRecipee extends Recipee{
    getMorocanrecipee(){
        return `The recipe requires ${this.ingredients} and ${this.preparatipontime} time and cooking method is ${this.cookingmethod} and has the following nutritionalinfo ${this.nutritionalinfo}`
    }
}
class EthiopianRecipee extends Recipee{
    getethiopianrecipee(){
        return `The recipe requires ${this.ingredients} and ${this.preparatipontime} time and cooking method is ${this.cookingmethod} and has the following nutritionalinfo ${this.nutritionalinfo}`
    }
}
class NigerianRecipee extends Recipee{
    getnigerainRecipee(){
        return `The recipe requires ${this.ingredients} and ${this.preparatipontime} time and cooking method is ${this.cookingmethod} and has the following nutritionalinfo ${this.nutritionalinfo}`
    }
}
let morocan=new MorocanRecipee("salt","20 minutes","frying","vitamins")
console.log(morocan.getMorocanrecipee())
let ethipian=new EthiopianRecipee("salt","20 minutes","frying","vitamins")
console.log(ethipian.getethiopianrecipee())
let nigerian=new NigerianRecipee("salt","20 minutes","frying","vitamins")
console.log(nigerian.getnigerainRecipee())
class Animals{
    constructor(diet,lifespan,migrationpatterns){
        this.diet=diet
        this.lifespan=lifespan
        this.migrationpatterns=migrationpatterns
    }
}
class Predator extends Animals{
     return `feeds `
}

