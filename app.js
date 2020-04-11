const express = require("express");
const app = express();

let potatoes = 1, eggs = 1, onions = 1;
let balance = 10;
let errorIngredients = false;
let errorBalance = false;
 

app.use(express.static("public"));

app.get('/',function(req,res){
    res.render('index.ejs',{ xpotatoes : potatoes, xeggs : eggs, xonions : onions, xbalance : balance, errorI : errorIngredients, errorB : errorBalance});
    errorIngredients = false;
    errorBalance = false;
});

app.get('/buyPotatoes',function(req,res){
    buyPotatoes();
    res.redirect('/');
});

app.get('/buyEggs',function(req,res){
    buyEggs();
    res.redirect('/');
});

app.get('/buyOnions',function(req,res){
    buyOnions();
    res.redirect('/');
});

app.get('/sellFrenchFries',function(req,res){
    sellFrenchFries();
    res.redirect('/');
});

app.get('/sellOmelettes',function(req,res){
    sellOmelettes();
    res.redirect('/');
});

app.get('*',function(req,res){
    res.send("Page Not Found");
});

app.listen(3000,function(){
    console.log("Server Is Up:");
});

function buyPotatoes(){
    if(balance > 0){
    potatoes = potatoes + 1;
    balance = balance -2;
    }
    else{
        errorBalance = true;
    }
}

function buyEggs(){
    if(balance > 0){
    eggs = eggs + 1;
    balance = balance - 1;
    }
    else{
        errorBalance = true;
    }
}

function buyOnions(){
    if(balance > 0){
    onions = onions + 1;
    balance = balance - 1;
    }
    else{
        errorBalance = true;
    }
}


function sellFrenchFries(){
    if(potatoes >= 3){
        balance = balance + 40;
        potatoes = potatoes - 3;
    }
    else{
        errorIngredients = true;
    }
}

function sellOmelettes(){
    if(eggs >= 4 && onions >= 1){
        eggs = eggs - 4;
        onions = onions - 1;
        balance = balance + 30;   
    }
    else{
        errorIngredients = true;
    }
}