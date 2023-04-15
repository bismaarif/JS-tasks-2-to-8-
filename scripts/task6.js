//  JS task#6


var product=["neutella shake" , "kitkat shake" , "Hershey's chocolate Milkshake" , "Chilled Chocoholic" , "Oreo shake" ];
 
var item =prompt("Type the postion number of the flavour you desire: \n" +  product);

if(item==0)

{
console.log("Your flavour: "+product.splice(0,1));
}

else if(item==1)

{
    console.log("Your flavour: "+product.splice(1,1));
}

else if(item==2)

{
    console.log("Your flavour: "+product.splice(2,1));
}

else if(item==3)

{
    console.log("Your flavour: "+product.splice(3,1));
}

else if(item==4)

{
    console.log("your flavour: "+product.splice(4,1));
}

else{
    console.log("Your desried favour is not available");
}

alert("Additional flavours: " + product);
alert("Entire Flavours: " + product.length);


