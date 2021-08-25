// vazifa 1


function about(year, born) {
    return year - born
}

var user_name = prompt("Ismingizni kiriting");
var user_year = prompt("Hozirgi yilni kiriting");
var user_born = prompt("Tug'ilgan yilingizni kiriting");

let user_age = about(user_year,user_born)

console.log("Ism " + user_name + "," + " yoshingiz " + user_age + "da")




// vazifa 2


var masala_miq = prompt("Ishlamoqchi bo'lgan misolingizni miqdorini kiriting")

for (let i = 0; i < masala_miq; i++) {
    function makeid(length) {
        var result           = '';
        var characters       = '+-*/';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));

        }
       return result;
    }


    function misol() {
        return Math.round(Math.random() * (100 - 1) + 1 );  
    }

    let rand1 = misol();
    let rand2 = misol();
    var m = prompt(rand1 + ' ' + makeid(1) + ' ' + rand2 + "=" + "?" ) 


    if (makeid(1) == "+" && m == (rand1 + rand2)) {
        console.log("To'g'ri javob")
    }
    else if (makeid(1) == "+" && m != (rand1 + rand2)) {
        console.log("Noto'g'ri.  To'g'ri javob " + (rand1 + rand2))
    }
    else if (makeid(1) == "-" && m == (rand1 - rand2)) {
        console.log("To'g'ri javob")
    }
    else if (makeid(1) == "-" && m != (rand1 - rand2)) {
        console.log("Noto'g'ri.  To'g'ri javob " + (rand1 - rand2))
    }
    else if (makeid(1) == "*" && m == (rand1 * rand2)) {
        console.log("To'g'ri javob")
    }
    else if (makeid(1) == "*" && m != (rand1 * rand2)) {
        console.log("Noto'g'ri.  To'g'ri javob " + (rand1 * rand2))
    }
    else if (makeid(1) == "/" && m == (rand1 / rand2)) {
        console.log("To'g'ri javob")
    }
    else if (makeid(1) == "/" && m != (rand1 / rand2)) {
        console.log("Noto'g'ri.  To'g'ri javob " + (rand1 / rand2))
    }
}


    
    // function belgi() {
    //     return Math.round(Math.random(toString('+', '-', '*', '/')))  
    // }

    
    // let rand3 = belgi();

    // console.log(rand1 + belgi + rand2 );

    // console.log(rand1 + "+" + rand2 );





    
    
    //  console.log(rand1,makeid(1), rand2);  
    
// function f() {
//     toString("+-*/")
//     return f
// }
//     if(f == '+'){
//         console.log(+)