// JS task#7

var nationality = prompt("Enter your nationality");

        var gender = prompt("Enter your gender");

        var age = +prompt("Enter your age");

        if (nationality == 'Pakistani' || nationality == 'Indian') 

        {
            if (gender == "male" && age > 18) 

            {
                alert("You are eligible to vote")
            }
            else if (gender == 'female' && age > 18)
            {
                var marriage = prompt("Marital Status")
                if (marriage == "Married") 
                {
                    alert("You are eligible to vote")
                }
                else 
                {
                    alert("Sorry, You are not eligible to vote")
                }
            }
            else
            {
                alert("You are not eligible to vote")
            }

        }
        else 
        {
            alert("Sorry, You are not eligible to vote")
        }