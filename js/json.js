const user = { id: 1, name: 'Gorib Amir', job: 'Actor'}
// JavaScript Object Nation (JSON)
const stringified = JSON.stringify(user)
// console.log(user);
// console.log(stringified);

/*  output
{ id: 1, name: 'Gorib Amir', job: 'Actor' }
{"id":1,"name":"Gorib Amir","job":"Actor"}
 */

const shop = {
    owner : 'Alia',
    address : {
        street : 'kochukhet voot er goli',
        city : 'Ranbir',
        country : 'BD'
    } ,
    products : ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue : 45000,
    isOpen : true,
    isNew : false
}
console.log(shop);
const shopJSON = JSON.stringify(shop)
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON)
console.log(shopObj);