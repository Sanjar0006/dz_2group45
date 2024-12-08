    var colors = prompt ("Выберите цвет")

    if (colors === "red") {
        alert("Stop")
    }

   else if (colors === "yellow") {
        alert("Wait")
    }
    
   else if (colors === "green") {
        alert("goo");
    } else {
        alert("Надо выводить цвета")
    }

    console.log(colors);

    var arr = [10,20,30,50,235,3000];
    for (var i of arr) {
        var string = String(i)
        if (string[0] == 1|| string[0]== 2 || string[0]== 5){
            console.log(i)
        }
    }

