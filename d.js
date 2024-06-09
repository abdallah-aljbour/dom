///Q1//////////////////////////////////////////////////
// let arr = document.querySelectorAll("li");
// let image1 = document.createElement("img");
// image1.src = "download.jpg";
// console.log(image1);
// image1.style.width = "50px";
// arr[0].appendChild(image1);
// let image2 = document.createElement("img");
// image2.src = "panana.jpg";
// image2.style.width = "50px";
// arr[1].appendChild(image2);
// let image3 = document.createElement("img");
// image3.src = "grapes.jpg";
// image3.style.width = "50px";
// arr[2].appendChild(image3);
// let image4 = document.createElement("img");
// image4.src = "Strawberry.jpg";
// image4.style.width = "50px";
// arr[3].appendChild(image4);
// let image5 = document.createElement("img");
// image5.src = "orange.jpg";
// image5.style.width = "50px";
// arr[4].appendChild(image5);
//Q2/////////////////////////////////////////////////////////
function MyFunction(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (num == arr[i]) {
      return arr.indexOf(arr[i]);
    }
  }
  return -1;
}
let result = MyFunction(["Saab", "Volvo", "BMW"], "BMW");
let fun = document.getElementById("fun");
result1 = document.createTextNode(result);
fun.appendChild(result1);
