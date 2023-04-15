//javascript task#2 


  var wheat = 250;
  var barley = 450;
  var dates= 2100;
  var raisin = 2800;
  var  familyMembers=+prompt("Total number of family members?");

  var fitrahMethod=prompt("Choose the fitrah method \n a) Dates = 2100 \n b) Wheat = 250 \n c) Raisin = 2800 \n d) Barley = 450");

  fitrahMethod=fitrahMethod.toLowerCase();

 if (fitrahMethod == "a" )

{
     totalFitrah=wheat * familyMembers;
}

else if (fitrahMethod == "b" )

{
    var totalFitrah= barley * familyMembers;
}

else if(fitrahMethod == "c" )

{
     var totalFitrah= dates * familyMembers;
}

else if(fitrahMethod == "d" )

{
  var totalFitrah = raisin * familyMembers;
}

else
{
     alert("Invalid Input detected.")
}
 alert ( "Amount of fitrah for this year is "+"" + totalFitrah );