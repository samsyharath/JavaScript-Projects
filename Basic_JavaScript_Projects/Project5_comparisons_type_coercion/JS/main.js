document.write(5 + "word");
document.write(typeof "word");

function my_Function1() {
    A = "1";
    B = 1;
    document.getElementById("Test1").innerHTML = "Is A = and > B : " + [A == B && A > B];
}

function my_Function2() {
    A = "1";
    B = 1;
    document.getElementById("Test2").innerHTML = "Is A <= B: " + [A == B || A < B];
}

function my_Function3() {
    A = "1";
    B = 1;
    document.getElementById("Test3").innerHTML = "Is A = B in all ways: " + [A === B];
}

function my_Function4() {
    A = "1";
    B = 1;
    document.getElementById("Test4").innerHTML = "Is A not 1: " + [A == !1];
}

function my_Function5() {
    A = "1";
    B = 1;
    document.getElementById("Test5").innerHTML = "Is A = B: " + [A == B];
}
