console.log("ID card generator runs -->")


let fullname = document.getElementById("fullName")
let cnic = document.getElementById("cnic")
let course = document.getElementById("course")
let campus = document.getElementById("campus")
let gender = document.querySelector('input[name="gender"]:checked')
let Form = document.querySelector(".container")
let card = document.querySelector(".id-card")

document.getElementById("cardForm").addEventListener("submit", function (e) {
    e.preventDefault()
    let full_value = fullname.value;
    let cnic_value = cnic.value;
    let course_value = course.value;
    let campus_value = campus.value;
    let genderInput = document.querySelector('input[name="gender"]:checked')
    if (genderInput) {
        gender_value = genderInput.value
    } else {
        gender_value = "Not selected"
    }

    console.log(full_value, cnic_value, course_value, campus_value, gender_value)

    if (full_value == "") {
        alert("Full name is required")
    }

   else if  (cnic_value == "") {
        alert("CNIC is required")

    }
        
   else if  (course_value == "") {
        alert("Course selection is required")
    }

   else if (campus_value == "") {
        alert("Campus selection is required")

    }

  else if (!genderInput){
    alert("Select your gender")
   }

   else{
    alert("Form submitted!")

    Form.style.display = "none";
    card.style.display = "flex";
   
   }
 
   
})