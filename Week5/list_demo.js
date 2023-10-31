
 let people = []
    //ADD ONE MORE
    people.push({name: "kevin", age: 25});
    people.push({name: "Destiny", age: 23});
    people.push({name: "Gertrude", age: 34});
      
    
    people[2].name = "Diva";//update the last person
    people[0].name = "Geek";//update the first person
    
    // for(START, STOP, HOW)
    for(let index = 0; index < people.length; index++){
        console.log(people[index].name, people[index].age);
    }
