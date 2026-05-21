console.log("ID card generator runs -->")


let fullname = document.getElementById("fullName")
let cnic = document.getElementById("cnic")
let course = document.getElementById("course")
let campus = document.getElementById("campus")
let gender = document.querySelector('input[name="gender"]:checked')
let img = document.getElementById("photo")
let rollnumber = document.getElementById("Roll")
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

    else if (cnic_value == "") {
        alert("CNIC is required")

    }

    else if (course_value == "") {
        alert("Course selection is required")
    }

    else if (campus_value == "") {
        alert("Campus selection is required")

    }

    else if (!genderInput) {
        alert("Select your gender")
    }

    else if (img.files.length == 0) {
        alert("Profile img is required")
    }

    else {

        let fullname = document.getElementById("showName").textContent = full_value
        let cnic = document.getElementById("showCnic").textContent = cnic_value
        let course = document.getElementById("showCourse").textContent = course_value
        let campus = document.getElementById("showCampus").textContent = campus_value
        let gender = document.getElementById("showGender").textContent = gender_value
        let rollnumber = document.getElementById("Roll").textContent = rollno()

        let file = img.files[0]
        let reader = new FileReader
        reader.readAsDataURL(file)
        reader.onload = function (e) {
            document.getElementById("cardimg").src = e.target.result
        }

        alert("Form submitted!")

        Form.style.display = "none";
        card.style.display = "flex";

    }


})

function rollno() {
    let num1 = Math.floor(Math.random() * 8) + 1
    let num2 = Math.floor(Math.random() * 4) + 1
    let num3 = Math.floor(Math.random() * 6) + 1
    let num4 = Math.floor(Math.random() * 9) + 1

    let roll = "S-" + num1 + num2 + num3 + num4
    console.log(roll)
    return roll
}

rollno()