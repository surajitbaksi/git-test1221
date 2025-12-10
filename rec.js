// function getFactioral(num){
//     if(num===1 || num===0) return 1;

//     let fact=getFactioral(num-1);
//     return num*fact;
// }
// console.log(getFactioral(5));

// let product={
// avg:4.5,
// noOfRating:10,
// ratings:{
// five:2,
// four:3,
// three:6,
// }};
// function show(ratings){
// let tr= ratings.five+ratings.four;
// console.log(tr)}
// show(product.ratings)

// let data={
//     a:2,
//     b:3
// }
// swaping(data.a,data.b);
// console.log(data);
// // console.log(a,b);


// function swaping(p,q){
//     temp=q;
//     q=p;
//     p=temp;
//     console.log('p',p,'q',q);
// }


// let arr=[1,2,3,4,5,6,7,8];
// arr.forEach(function(item){
//     console.log("item",item);
// });
// let abc=arr.map(function(item){
//     return item*item;
// })
// console.log("abc",abc);

// let ab=arr.filter(function(item){
//     return item%2==0;
// })
// console.log("ab",ab);

// let data={
//     name:"jeet",
//     age:31,
//     place:"Bangalore"
// }
// let data1=JSON.stringify(data);
// console.log(data1,"data1");
// let data2=JSON.parse(data1);
// console.log(data2,"data2");

// localStorage.setItem('name',JSON.stringify(data));

// function hello(name){
//     console.log('hello'+ name)
// }
// function capitalize(name){
//     let upper=name.toUpperCase();
//     console.log(upper);
// }
// function processUserInput(process){
//     let studentName='FEFED';
//     process(studentName);
// }
// processUserInput(hello);
// processUserInput(capitalize);

//2nd doubt
function getDataFromInternet(sucessCallback) {
    console.log('getting data from internet');
    setTimeout(() => {
        console.log('got data from internet');
        if(sucessCallback)
        sucessCallback();
    }, 8000);
console.log('Data fetch is set')
}
getDataFromInternet((ret)=>{
    console.log('data is fetched', ret);
});
console.log('-------------------------------------------------------');

//3rd doubt
// function getDataFromInternet(sucessCallback){
//     console.log('getting data from internet');
// setTimeout(()=>{
//     sucessCallback('bakshi code');
// },3000);
// }

// function setDatatoDB(sucessCallback){
//     console.log('sending data to DB');
// setTimeout(()=>{
//     sucessCallback('db_row_25');
// },5000);
// }

// function setResponseToUser(sucessCallback){
//     console.log('sending response to DB');
// setTimeout(()=>{
//     sucessCallback();
// },2000);
// }




// getDataFromInternet((data)=>{
//     console.log(`data is fetched ${data}`);
//     setDatatoDB((id)=>{
//         console.log(`data saved in db with id ${id}`);
//     setResponseToUser(()=>{
//         console.log('response is send to user');
//     });
    
//     })
// });



//4th doubt
// console.log("fetch.js")
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response=>response.json())
// .then(json=>console.log(json));
