function isPrime(number) {
    // If your browser doesn't support the method Number.isInteger of ECMAScript 6,
    // you can implement your own pretty easily
    if (typeof number !== 'number') {
        // Alternatively you can throw an error.
        return false;
    }

    if (number < 2) {
        return false;
    }

    if (number === 2) {
        return true;
    } else if (!(number&1)) {
        return false;
    }

    var squareRoot = Math.sqrt(number);
    for(var i = 3; i <= squareRoot; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(49));



/*(function(){

    var a=b=20;
})();

//console.log(b);
//console.log(a);

function closure(){
    var a=20;

    return function(){
        return a++;
    }
}

var b=closure();
//console.log(b());
//console.log(b());

function getStudents(){
    var students=[];
    for(var i=0;i<10;i++){
        var student=(function(x){
            return function(){
                console.log(x);
            }
        })(i);
        students.push(student);
    }
    return students;
}

var s=getStudents();*/
//console.log(s[0]());
//console.log(s[1]());

/*

function sum(l){
    var sum=l;

    return function f(m){

        return function g(n) {
            return sum+=m+n;
        }

    }
}

console.log(sum(5)(4)(3));

var a={
    name:"mallu"
    ,age:"24"
    ,getInfo:function(){
     console.log(this.name+" "+this.age);
    }
}
var ag= a.getInfo();

var b={
    name:"Manoj"
    ,age:"4"
}

var bg= a.getInfo.bind(b)();
*/









