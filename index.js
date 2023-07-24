                            
                                                                                           
var celsiusValue = document.getElementById("celTem");                                        //getting hold onto the elements
var fahrenheitValue = document.getElementById("fahTem");   
var kelvinValue = document.getElementById("kelTem");
var rankineValue = document.getElementById("ranTem");


                                                                                            // MAIN-MATTER i.e-
                                                                                            // adding event whenever input changes occurs
                                                                                            // whenever celsius input get changes,we change value in other block too!

                                                                                             //adding event on celsius input
celsiusValue.addEventListener("input", function(){
    let ans1 = parseFloat(this.value);                                                        //this-is used to tap into the valueofobj
                                                                                              //parseFloat- for float
    let ans2 = (ans1*(9/5)+32)
    fahrenheitValue.value = ans2;

    let ans3 = ((ans1)+ 273.15)
    kelvinValue.value = ans3;

    let ans4 = (ans1 * (9/5) + 491.67);
    rankineValue.value = ans4;
});


                                                                                            

fahrenheitValue.addEventListener("input", function(){                                           
                                                           
    let ans1 =  parseFloat(this.value);

    let ans2 = (ans1-32) * 5/9;
    celsiusValue.value = ans2;

    let ans3 = (ans1-32) * (5/9) + 273.15;
    kelvinValue.value = ans3;

    let ans4 = (ans1 + 459.67);
    rankineValue.value = ans4;
});

kelvinValue.addEventListener("input", function(){
    let ans1 =  parseFloat(this.value);

    let ans2 = (ans1-273.15);
    celsiusValue.value = ans2;

    let ans3 = (ans1 - 273.15) * 9/5 + 32;
    fahrenheitValue.value = ans3;

    let ans4 = ans1 * 9/5;
    rankineValue.value = ans4;
});

rankineValue.addEventListener("input", function(){

    let ans1 =  parseFloat(this.value);

    let ans2 = (ans1-491.67) * 5/9; 
    celsiusValue.value = ans2;

    let ans3 = ans1-459.67;
    fahrenheitValue.value = ans3;

    let ans4 = ans1 * (5/9);
    kelvinValue.value = ans4;
});

/*BY PRADUMN JADLI */                      












