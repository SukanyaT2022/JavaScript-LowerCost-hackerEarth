{/* <p>
There is an exam with 2 qs asked in it.
 We need to input how many students attempted qs1 and how many attempted qs2 .
 Now we need to give a balloon as a gift for solving any qs. We have a green and a purple balloon.
  Cost of both balloons is input. We need to decide which color balloon to be given for q1 solvers 
  and which color for q2 keeping in mind to reduce cost

</p> */}
function findOut(){
var q1 = document.getElementById("readQ1").value;
var q2 = document.getElementById("readQ2").value;
var greenBallon = document.getElementById("greenBallon").value;
var purpleBallon = document.getElementById("purpleBallon").value;

//reduce the cost
var expensive = 0
var cheaper = 0

  if (greenBallon>purpleBallon) {
expensive = greenBallon
cheaper = purpleBallon
  }else{
    expensive = purpleBallon
    cheaper = greenBallon
  }
  //2 option 
  //option1 more expensive ballon buy less quantity
  //option cheap ballon buy more


//quantity
var biggerQuantity = 0
var smallerQuantity = 0
if (q1>q2){
    biggerQuantity = q1
    smallerQuantity = q2
}else{
    biggerQuantity = q2
    smallerQuantity = q1
}
//result
var total = biggerQuantity * cheaper + smallerQuantity * expensive
var showResult = document.getElementById('showResult').innerText = "Result: $" + total
}