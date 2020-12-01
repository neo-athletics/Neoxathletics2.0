export function calorieCalculations(
  gender,
  weight,
  weightType,
  height,
  age,
  activity
) {
  //convert kilograms to pounds for calculations
  if (weightType === "kg") {
    weight *= 2.2;
  }

  //determine basal metabolic rate based on gender
  let bmr;

  if (gender === "male") {
    bmr = 66 + 6.23 * weight + 12.7 * height - 6.8 * age;
  } else {
    bmr = 655 + 4.35 * weight + 4.7 * height - 4.7 * age;
  }

  //Total Daily Energy Expenditure
  let harris;
  //get total calories
  //(little or no exercise) //(light exercise/sports 1-3 days/week) //(moderate exercise/sports 3-5 days/week)// (hard exercise/sports 6-7 days a week)//(very hard exercise/sports & physical job or 2x training)
  switch (activity) {
    case "sedentary":
      harris = bmr * 1.2;
      break;
    case "physically":
      harris = bmr * 1.375;
      break;
    case "moderate":
      harris = bmr * 1.55;
      break;
    case "active":
      harris = bmr * 1.725;
      break;
    case "vigorous":
      harris = bmr * 1.9;
      break;
    default:
      harris = bmr * 1.2;
  }
  return harris;
}

//get caloric percentages values and evaluate for custom macros
export function caloriesForMacroNutrient(calories, arr) {
  //tell the difference between custom and default values.

  let caloriesPerMacroNutrient = arr.map((value) => {
    if (value[1] < 1) {
      return [value[0], calories * value[1], value[2]];
    } else if (value[1] >= 1) {
      return [value[0], calories * (value[1] / 100), value[2]];
    } else {
      return value;
    }
  });

  return caloriesPerMacroNutrient;
}

//filter zero based values in custom macros
export function filterZeros(arr) {
  let macroLabels = [];
  let grams = [];
  let colors = [];
  arr.forEach((val) => {
    if (val[1] > 0) {
      macroLabels.push(val[0]);

      //converts calories to grams for both default and custom values
      if (val[0] === "fats") {
        grams.push((val[1] / 9).toFixed());
      } else {
        grams.push((val[1] / 4).toFixed());
      }

      colors.push(val[2]);
    }
  });
  let filteredValues = [macroLabels, grams, colors];
  return filteredValues;
}

export function switchActivity(activity) {
  let percentages;
  switch (activity) {
    case "sedentary":
      percentages = [0.58, 0.12, 0.3];
      break;
    case "physically":
      percentages = [0.6, 0.15, 0.25];
      break;
    case "moderate":
      percentages = [0.6, 0.2, 0.2];
      break;
    case "active":
      percentages = [0.55, 0.25, 0.2];
      break;
    case "vigorous":
      percentages = [0.55, 0.3, 0.15];
      break;
    default:
      percentages = [0.58, 0.12, 0.3];
  }

  return percentages;
}

export function goal(goal, pounds, calories) {
  let lbs = parseInt(pounds);
  let totalCalories;
  switch (goal) {
    case "loose":
      totalCalories = -500 * lbs + calories;
      break;
    case "equilibrium":
      totalCalories = calories;
      break;
    case "gain":
      totalCalories = 500 * lbs + calories;
      break;
    default:
      totalCalories = calories;
  }
  return totalCalories;
}
/*
*default caloric percentages for calories based on macro nutrient [carbohydrates,protein.fats]
*based on activity there is a need of certain percentages of macro nutrients
*these value would be used for chart referencing
* get total calories
* used the percentages to get calories for each macro nutrient
* from those calories convert them into grams 4kcal per gram of carbohydrate and protein, but 9kcal per gram of fat

var sedentary  = [.58,.12,.30];
var physically = [.60,.15,.25];
var moderate = [.60,.20,.20];
var active = [.55,.25,.20];
var vigorous = [.55,.30,.15];





*/
