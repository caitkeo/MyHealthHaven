 // var name = document.getElementById("name").value;
// var age = document.getElementById("age").value;
// var gender = document.getElementById("genderDropdown").value;
// var weight = document.getElementById("weight").value;
// var goal = document.getElementById("fitnessDropdown").value;
var name;
var age;
var gender;
var weight;
var goal;
var sleepAmount;
var waterIntake;
var calorieIntake;
var exercise1;
var exercise2;
var exercise3;

function getSurveyResults () {
  gender = document.getElementById("genderDropdown").value;
  name = document.getElementById("name").value;
  age = document.getElementById("age").value;
  weight = document.getElementById("weight").value;
  goal = document.getElementById("fitnessDropdown").value;
  getWaterIntake();
  getSleepHours();
  getCalorieIntake();
  getExcercises();

  //if anything is equal to null
  if (name == null|| name == "" || age == null || gender == null || weight == null || goal == null || sleepAmount == null || waterIntake == null || calorieIntake == null || exercise1 == null || exercise2 == null|| exercise3 == null)
  {
    alert("Please input valid values!");
  }
  //if everything is not null
  else {
  document.getElementById("results").style.visibility = "visible";
  document.getElementById("div1").style.visibility = "hidden";

  document.getElementById("description2").innerHTML = "Hi " + name + "! Here's how you can live a healthier lifestyle! </br></br> Disclaimer: These are just estimates based on your given information! Please consult a doctor!"
  document.getElementById("waterIn").innerHTML = "Daily Water Intake: " + waterIntake + " ounces";
  document.getElementById("sleepAmt").innerHTML = "Daily Hours of Sleep: " + sleepAmount;
  document.getElementById("calIn").innerHTML = "Daily Calorie Intake: " + calorieIntake;
  document.getElementById("exs").innerHTML = "Three Recommended Exercise Videos: ";
  
  document.getElementById("l1").href = exercise1;
  document.getElementById("l2").href = exercise2;
  document.getElementById("l3").href = exercise3;

  }
  
  return false;
}

function home() {
  document.getElementById("results").style.visibility = "hidden";
  document.getElementById("div1").style.visibility = "visible";
}

function getWaterIntake () {
  // Water Intake in oz
if ((weight>=60)&&(weight<=79))
{
  waterIntake = 24;
}
else if ((weight>=80)&&(weight<=99))
{
  waterIntake = 32;
}
else if ((weight>=100)&&(weight<=119))
{
  waterIntake = 40;
}
else if ((weight>=120)&&(weight<=139))
{
  waterIntake = 48;
}
else if ((weight>=140)&&(weight<=159))
{
  waterIntake = 54;
}
else if ((weight>=160)&&(weight<=179))
{
  waterIntake = 64;
}
else if ((weight>=180)&&(weight<=199))
{
  waterIntake = 72;
}
else if ((weight>=200)&&(weight<=219))
{
  waterIntake = 80;
}
else if ((weight>=220)&&(weight<=239))
{
  waterIntake = 88;
}
else if ((weight>=240)&&(weight<=259))
{
  waterIntake = 96;
}
else if ((weight>=260)&&(weight<=279))
{
  waterIntake = 104;
}
else if (weight>=280)
{
  waterIntake = 112;
}
else
{
  waterIntake = null;
}

}

// Sleep Amount in hours

function getSleepHours(){
if ((age>=13)&&(age<=17))
{
  sleepAmount = 9;
}
else if ((age>=18)&&(age<=64))
{
  sleepAmount = 8;
}
else if (age>=65)
{
  sleepAmount = 7;
}
else 
{
  sleepAmout = null;
}

  
}

// Calorie Intake
function getCalorieIntake() {
if ((age>=13)&&(age<=18))
{
  if (gender == ("Male"))
  {
    if (goal==("Maintain a Healthy Lifestyle"))
    {
      calorieIntake = 2600;
    }
    if (goal==("Lose Weight"))
    {
      calorieIntake = 2200;
    }
    if (goal==("Build Muscle"))
    {
      calorieIntake = 3000;
    }
  }
  else 
  {
    if (goal==("Maintain a Healthy Lifestyle"))
    {
      calorieIntake = 2000;
    }
    if (goal==("Lose Weight"))
    {
      calorieIntake = 1800;
    }
    if (goal==("Build Muscle"))
    {
      calorieIntake = 2400;
    }
  }
}
else if ((age>=19)&&(age<=30))
{
  if (gender==("Male"))
  {
    if (goal==("Maintain a Healthy Lifestyle"))
    {
      calorieIntake = 2700;
    }
    if (goal==("Lose Weight"))
    {
      calorieIntake = 2500;
    }
    if (goal==("Build Muscle"))
    {
      calorieIntake = 3000;
    }
  }
  else
  {
    if (goal==("Maintain a Healthy Lifestyle"))
    {
      calorieIntake = 2100;
    }
    if (goal==("Lose Weight"))
    {
      calorieIntake = 1900;
    }
    if (goal==("Build Muscle"))
    {
      calorieIntake = 2400;
    }
  }
}
else if ((age>=31)&&(age<=50))
{
  if (gender==("Male"))
  {
    if (goal==("Maintain a Healthy Lifestyle"))
    {
      calorieIntake = 2500;
    }
    if (goal==("Lose Weight"))
    {
      calorieIntake = 2300;
    }
    if (goal==("Build Muscle"))
    {
      calorieIntake = 2900;
    }
  }
  else
  {
    if (goal==("Maintain a Healthy Lifestyle"))
    {
      calorieIntake = 2000;
    }
    if (goal==("Lose Weight"))
    {
      calorieIntake = 1800;
    }
    if (goal==("Build Muscle"))
    {
      calorieIntake = 2200;
    }
  }
}
else if (age>=51)
{
  if (gender==("Male"))
  {
    if (goal==("Maintain a Healthy Lifestyle"))
    {
      calorieIntake = 2300;
    }
    if (goal==("Lose Weight"))
    {
      calorieIntake = 2100;
    }
    if (goal==("Build Muscle"))
    {
      calorieIntake = 2600;
    }
  }
  else
  {
    if (goal==("Maintain a Healthy Lifestyle"))
    {
      calorieIntake = 1800;
    }
    if (goal==("Lose Weight"))
    {
      calorieIntake = 1600;
    }
    if (goal==("Build Muscle"))
    {
      calorieIntake = 2100;
    }
  }
}
else
{
  calorieIntake = null;
}
}

// Exercise Plan
function getExcercises() {
if (age<=60)
{
  if (gender==("Male"))
  {
    if (goal==("Maintain a Healthy Lifestyle"))
    {
      exercise1 = "https://www.youtube.com/watch?v=tveIjnSG_8s&ab_channel=EvolveFunctionalFitnessWorkouts";
      exercise2 = "https://www.youtube.com/watch?v=xFCYPbjyZNc&ab_channel=EvolveFunctionalFitnessWorkouts";
      exercise3 = "https://www.youtube.com/watch?v=s8kt89FhpLc&ab_channel=EvolveFunctionalFitnessWorkouts";
    }
    if (goal==("Lose Weight"))
    {
      exercise1 = "https://www.youtube.com/watch?v=gC_L9qAHVJ8&ab_channel=BodyProject";
      exercise2 = "https://www.youtube.com/watch?v=yplP5cLuyf4&ab_channel=BodyProject";
      exercise3 = "https://www.youtube.com/watch?v=PvEnWsPrL4w&ab_channel=BodyProject";
    }
    if (goal==("Build Muscle"))
    {
      exercise1 = "https://www.youtube.com/watch?v=dJlFmxiL11s&ab_channel=Bodybuilding.com";
      exercise2 = "https://www.youtube.com/watch?v=YdB1HMCldJY&t=1s&ab_channel=Bodybuilding.com";
      exercise3 = "https://www.youtube.com/watch?v=S5kOK3bxfro&ab_channel=Bodybuilding.com";
    }
  }
  else //female
  {
    if (goal==("Maintain a Healthy Lifestyle"))
    {
      exercise1 = "https://www.youtube.com/watch?v=5JUJdb-VDFE&ab_channel=ChloeTing";
      exercise2 = "https://www.youtube.com/watch?v=a0KWT4vIbhQ&ab_channel=ChloeTing";
      exercise3 = "https://www.youtube.com/watch?v=mZM9Fimp2g8&ab_channel=ChloeTing";
    }
    if (goal==("Lose Weight"))
    {
      exercise1 = "https://www.youtube.com/watch?v=T8o6ti9tbFA&ab_channel=ChloeTing";
      exercise2 = "https://www.youtube.com/watch?v=NYczJaNGpoY&ab_channel=ChloeTing";
      exercise3 = "https://www.youtube.com/watch?v=5zbYHZRzTY0&ab_channel=ChloeTing";
    }
    if (goal==("Build Muscle"))
    {
      exercise1 = "https://www.youtube.com/watch?v=9SuTAxJGQuY&ab_channel=ChloeTing";
      exercise2 = "https://www.youtube.com/watch?v=6TmQiugy_qw&ab_channel=ChloeTing";
      exercise3 = "https://www.youtube.com/watch?v=mTgc6gpCEng&ab_channel=ChloeTing";
    }
  }
}
else if (age>=61)
{
    if (goal==("Maintain a Healthy Lifestyle"))
    {
      exercise1 = "https://www.youtube.com/watch?v=8CE4ijWlQ18&ab_channel=HASfit";
      exercise2 = "https://www.youtube.com/watch?v=A2wp8Ipxn9s&ab_channel=TheBodyCoachTV";
      exercise3 = "https://www.youtube.com/watch?v=UztxxUnRWfo&ab_channel=TheBodyCoachTV";
    }
    if (goal==("Lose Weight"))
    {
      exercise1 = "https://www.youtube.com/watch?v=TPjStVCo-8g&ab_channel=SeniorShapeFitness";
      exercise2 = "https://www.youtube.com/watch?v=yRX5GuQBFeM&ab_channel=TheBodyCoachTV";
      exercise3 = "https://www.youtube.com/watch?v=2zswZKgb4pg&ab_channel=SilverSneakers";
    }
    if (goal==("Build Muscle"))
    {
      exercise1 = "https://www.youtube.com/watch?v=ZeqPIyJDs6g&ab_channel=SeniorShapeFitness";
      exercise2 = "https://www.youtube.com/watch?v=NiEvPcZ0Dig&ab_channel=SeniorShapeFitness";
      exercise3 = "https://www.youtube.com/watch?v=0kAGaFrbrrU&ab_channel=SeniorShapeFitness";
    }
  }
else
{
  exercise1 = null;
  exercise2 = null;
  exercise3 = null;
}
}
