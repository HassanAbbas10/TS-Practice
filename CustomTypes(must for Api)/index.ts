type Person = {
    name: string
    age: number
    isStudent: boolean
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true
}
 
let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false
}


//Practice ===> Will be used for the data coming from the apis in the projects <===== 


type ApiData ={
    heading : string,
    description: string,
    inStock : boolean,
    images : string,
    Rating: number,

}
 
let data : ApiData = {
    heading : "Car",
    description : "This is the best car",
    inStock: true,
    images:"https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    Rating: 5.0
}

let data2 : ApiData = {
    heading:"Phone",
    description:"Best Phone bois",
    inStock:false,
    images:"https://images.pexels.com/photos/214487/pexels-photo-214487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Rating:4.7,
}