
window.onload = () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
}
let generateExcuse = () =>{

var who = ['the cop','my 4geeks academy teacher','his turtle','my bird'];
var what = ['eat','pissed','crushed','broked'];
var when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
var where = ['on the street', 'in the park', 'at the office', 'in the train'];

var whoIndex = Math.floor(Math.random() * who.length);
var whatIndex = Math.floor(Math.random() * what.length);
var whenIndex = Math.floor(Math.random() * when.length);
var whereIndex = Math.floor(Math.random() * where.length);

    return (who[whoIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex] + ' ' + where[whereIndex]);

}
