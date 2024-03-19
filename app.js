
document.write("slice" + "<br>")

var num1 = [1 , 2 , 3 , 4, 5, 8 , 9 , 6 , 6 , 9 , 0]

var num2 = num1.slice(1 , 7)
document.write(num1 + "<br>")
document.write(num2 + "<br>"+ "<br>")




document.write("splice" + "<br>")

var fruits = ["apple", "banana", "coconat", "oringe", "stowbarry"]
var fruits2 = fruits.splice(2 , 0, "kiwi", "ananas")

document.write(fruits + "<br>"+ "<br>"+ "<br>")


document.write("shift" + "<br>")

var faimly = ["Abdul Latif", "Asad", "Abdul Hadi", "Yasir"]
var father = faimly.shift()

document.write(faimly + "<br>")
document.write(father + "<br>"+ "<br>"+ "<br>")

document.write("unshift" + "<br>")

var faimly = ["Abdul Latif", "Asad", "Abdul Hadi", "Yasir"]
var friend = faimly.unshift("Anees")
document.write(faimly + "<br>"+ "<br>"+ "<br>")

document.write("push" + "<br>")
var faimly = ["Abdul Latif", "Asad", "Abdul Hadi", "Yasir"]
var friend = faimly.push("Anees")
document.write(faimly + "<br>"+ "<br>"+ "<br>")


document.write("pop" + "<br>")
var faimly = ["Abdul Latif", "Asad", "Abdul Hadi", "Yasir"]
var friend = faimly.pop()
document.write(faimly + "<br>")
document.write(friend + "<br>"+ "<br>"+ "<br>")
 


