var express = require('express');
var app = express(); // app constructor oluşturduk.
var bodyParser=require("body-parser");
var fs = require('fs');

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

todoList =[

]

app.get("/", function (req, res) {
    res.render("index2.ejs",{todoList2: todoList});
    
});

app.post("/ekle",function(req,res){
    console.log("Başarıyla eklendi");
    var item = req.body.item;
    
    todoList.push(item);
    
    res.redirect("/");
});


app.post("/silinecek",function(req,res){
    console.log("Başarıyla silindi");
    var item = req.body.silinecekid;
    console.log(item);
    todoList.splice(item,1);
    res.redirect("/");
});


app.post("/tamamla",function(req,res){
    console.log("Başarıyla tamamlandı");
    var item = req.body.tamamlanacakid;
    todoList[item].style.textDecoration = 'line-through';
    
    res.redirect("/");
});




app.post("/sill",function(req,res){
    console.log("Tümü silindi");
    for(var i=0;i<todoList.length;i++)
    {
        todoList.splice(i,todoList.length);
    }
    res.redirect("/");
});





app.get('*',function(req,res)  //Tanımlı olmayan sayfalarda bu hata yazısını ekrana yazdırdık
{
    res.send('<h1>404 NOT FOUND</h1><br><h3>Geçersiz Sayfa girdiniz</h3>');
    
   
});


var server = app.listen(8003, function () {
    console.log('Sunucu çalışıyor.');

});