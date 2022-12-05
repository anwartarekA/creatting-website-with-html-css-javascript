let array=["images/150.webp","images/400.webp","images/300.webp"];
let counter=0
let count=0;
let inner=document.getElementById("count");
let fun=()=>{
    document.img1.src=array[counter];
 inner.innerHTML=count;
    if(counter<array.length-1&&count<array.length-1 )
    {
        counter++;
        count++;
    }
    else{
        counter=0;
        count=0;
    }
    setTimeout("fun()",2000);
}
fun()