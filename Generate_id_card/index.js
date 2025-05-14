function details(){
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let course = document.getElementById("course").value;

    document.getElementById("t1").innerText = name;
    document.getElementById("t2").innerText = dob;
    document.getElementById("t3").innerText =  gender;
    document.getElementById("t4").innerText = email;
    document.getElementById("t5").innerText =  phone;
    document.getElementById("t6").innerText =  course;

}