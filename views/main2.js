var j=0;
function Ekle()
{

    var input_icerigi = document.getElementById("input_text").value;
    console.log(input_icerigi);
    if(input_icerigi=="")
    {
        alert("Bir şey yazmayı unuttunuz :) ");
}
else{
   var olustur= document.createElement("li");
   document.getElementById("list_id").appendChild(olustur);
   olustur.innerHTML=input_icerigi;
   document.getElementById("input_text").value=" ";
    olustur.setAttribute("id","li_id"+j);





j++;
   var resim=document.createElement("img");
   resim.setAttribute("src","https://images.clipartlogo.com/files/images/38/383687/green-checkmark-clip-art_f.jpg");
   resim.setAttribute("width","15");
   resim.setAttribute("class","tik_carpi");
   resim.addEventListener("click",Cizik_At);
   olustur.appendChild(resim);

   var resim2=document.createElement("img");
   resim2.setAttribute("src","https://w7.pngwing.com/pngs/661/976/png-transparent-check-mark-x-mark-scalable-graphics-mistake-s-text-trademark-logo.png");
   resim2.setAttribute("width","15");
   resim2.setAttribute("class","tik_carpi");
   resim2.setAttribute("id","resim2_id");
   resim2.addEventListener("click", Sil);
   olustur.appendChild(resim2);
/*
   var resim3=document.createElement("img");
   resim3.setAttribute("src","https://e7.pngegg.com/pngimages/246/1010/png-clipart-template-typeform-update-icon-template-text.png");
   resim3.setAttribute("width","15");
   resim3.setAttribute("class","tik_carpi");
   resim3.setAttribute("id","resim3_id");
   
   resim3.addEventListener("click", Guncelle);
   olustur.appendChild(resim3);
*/
}

document.getElementById('list_id').style.listStyleType='none';
document.getElementById('list_id').style.lineHeight=1.7;
}
function Sil()
{
    tıklanan=event.currentTarget.parentNode;
    tıklanan.remove();
}  

var i=0;
function Cizik_At()
{

    if(i%2==0)
    {
        tıklanan=event.currentTarget.parentNode;
        tıklanan.style.textDecoration='line-through';
        
        
    }
    else{tıklanan2=event.currentTarget.parentNode;
        tıklanan2.style.textDecoration='';
            
        }
        i++;
    
}

/*
function Guncelle()
{
    var id_deger= event.currentTarget.parentNode.id; 
    var v_deger= document.getElementById("id_deger").textContent;
   console.log(id_deger);
   console.log(v_deger);
    document.getElementById("input_text").innerHTML=v_deger;

}*/


function TumunuSil()
{
    for(var i=0; i<j;i++)
    {
        document.getElementById("li_id"+i).remove();
       
    } j=0;
  
}


