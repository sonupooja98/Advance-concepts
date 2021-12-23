const user=[{name:"pooja",email:"poojaing@gmail.com"},
{name:"manu",email:"monu1@gmail.com"}]

function mapKeyWithObject(key){
    return object =>{
        return object[key]

    }
};
const getByName =mapKeyWithObject('name');
const mappedUsers = users.map(getByName);
console.log(mappedUsers);




function multiple(number){
    return numB =>{
        return numB * number;

    }
}
const muitiplyWithFive = mutiple(5);
console.log(multipleWithFive(2));
console.log(multipleWithFive(6));
console.log(multipleWithFive(8));

