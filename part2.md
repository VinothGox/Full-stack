
### 5. CODE REPETATION
     In this javascript don't repeat the code,In ES6 Javascript simplifly the code write the code one line. for example:

``Javascript

 don't use:                                                        use:
 
 const getProductDetails= (Product)=>{                //       const getProductDetails=(product)=>{
 const name=Product.name;                            //       const {name,description,price,rating}=Product;
 const description=Product.description;             //        }
 const price=Product.price;
 const rating=Product.rating;
 }


### 6. VARIABLE NAMING
     The camelCase is naming standard used for easy to identify the variable name.camelCase for
     identifiernames (variables and functions).The Good practice for a C style language like Java or JS is
     to use camelCase for all variables and object members (properties & methods), and PascalCase for class names and constructors. Namespaces (or Packages in Java world) are usually in camelCase.for Example

 `` Javascript

 dont't use:                                                         use:

 const camelcase=" ";                              //               const camelCase="";
 let thisisrandomnumber;                          //                let thisIsRandomNumber;
 let getuser;                                    //                 let getUser;


 ### 7. MEANINGFUL NAMES
        It's important to used meaningful names for (function,methods,variable) and need to express exact meaning. If used properly it can really change the way we develop and the way people see our code. It increase quality, readability.For example

 `` Javascript

Good Pratice:

 let userName;      (variable)
 const getUser(){   (function)
     ..../
 }       


 ### 8. MAKE BOOLEAN THAT READ WELL IN IF-THEN STATEMENT
        To need make boolean that read well in if or then statement.you read the code , express the correct meaning for statement.for example you buy the new car and first you check the some facilities.

``Javascript

 Don't use:                                                  //             use:
                                                            //
 let Car={};                                               //            let Car={};
                                                          //
 Datas: airbags, seatbelt, seat, speeker                 //              isAirbags, isSeatbelt, isSeat,       
                                                        //               isSpeeker
                                                       //
 so,  Car.airbags, Car.seatbelt, Car.speeker          //                Car.isAirbags, Car.isSeatbelt,
                                                     //                 Car.isSeat     
                                                    //
  if(airbages){                                    //                  if(isAirbags){
      ../                                         //                       ../
  }                                              //                     }
  
  
  ### 9. USE NOUN CLASSNAME
         The class name should be nouns.If your class is a container for several notes, then you should find a singular noun to describe the whole thing. E.g. Notebook, NoteList,. Class name start letter should be capital and you read the class name got some idea for about class working.for example the class name is Car and method name is break so the class work on car related. E.g

 don't use:                                             //              use:
                                                       //
 class db{                                            //             class Car{
     .../                                            //               ..../
 },                                                 //               },
 class rxxx{                                       //               class Bike{
     .../                                         //                     .../
 }                                               //                   }

                                                                              
