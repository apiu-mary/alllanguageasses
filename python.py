class Story:
    def __init__(self,Story,morallesson,length):
        self.story=Story
        self.morallesson=morallesson
        self.length=length
    def  story_name(self):
     return f"{self.story} of morallesson {self.morallesson} is {self.length} long"
#    // question1.The story telling requires art in which different stories are inherrited to different people.We shall have three classes which are stories,that will hold the properties for stories(moral lesson,age group and the length).The second class is f Storyteller which shall inherit properties from story but shall have a different attribute called language and it shall return the name of the storyteller.Lastly we have class Translate which shall also inherit from story and returns a statement to translate from one language to another 
class Storyteller (Story) :
   def __init__(self, Story, morallesson, length,person):
      super().__init__(Story, morallesson, length)  
      self.person=person
   def teller_ofstory(self):
         return f"{self.story} with {self.morallesson}, has {self.length} and was told by{self.person}"
class Translate(Story):
   def __init__(self, Story, morallesson, length,language):
      super().__init__(Story, morallesson, length)
      self.language=language
def change_language(self):
        #  language="English"
         if self.language=="English":
            return f"translate to English"
         else:
            return f"language remains as it is"
story1=Story("GredyHyena","shairing","40minutes")   
print(story1.story_name())  
story2=Storyteller("GredyHyena","shairing","40minutes","John") 
print(story2.teller_ofstory())
# story3=Translate("GredyHyena","shairing","40minutes","English")
# //This questions talks about a class recipee that has the following attributes ingredients,cooking method ,nutritionalinformation and preparationtime.All the other classes  shall theerefore inherit from this class since they will also have similar properties
class Recipee:
   def __init__(self,ingredients,preparatipontime,cookingmethod,nutritionalinfo):
        self.ingredients=ingredients
        self.preparatipontime=preparatipontime
        self.cookingmethod=cookingmethod
        self.nutritionalinfo=nutritionalinfo
class   MorocanRecipee(Recipee):
    def morocan_food(self):
       return f"{self.ingredients} are required with a time of{self.preparatipontime} and a method of {self.cookingmethod} and thie information is {self.nutritionalinfo},"
    class   EthiopianRecipee(Recipee):
     def ethipian_food(self):
       return f"{self.ingredients} are required with a time of{self.preparatipontime} and a method of {self.cookingmethod} and thie information is {self.nutritionalinfo},"
class    NigerianRecipee (Recipee):
     def nigearin_food(self):
       return f"{self.ingredients} are required with a time of{self.preparatipontime} and a method of {self.cookingmethod} and thie information is {self.nutritionalinfo},"
     
food1=MorocanRecipee("salt","20 minutes","frying","vitamins")   
print(food1.morocan_food())