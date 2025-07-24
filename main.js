// first form

let Name = document.getElementById("name");
let family = document.getElementById("family");
let email = document.getElementById("email");
let job = document.getElementById("job");
let phone = document.getElementById("phone");
let sex = document.getElementById("sex");

// add

let add = document.getElementById("add");
let order = document.getElementById("showOl");

// show form

let f_form = document.getElementById("form");
let show = document.getElementById("show");
let findEmail = document.getElementById("find");
let showForm = document.getElementById("showForm");
let showClose = document.getElementById("showIcon");
let length = 0;

// find form

let findForm = document.getElementById("findForm");
let findClose = document.getElementById("findIcon");
let findButton = document.getElementById("findBtn");
let findTag = document.getElementById("emailH4");
let input = document.getElementById("findInput");

// question form

let olDiv = document.getElementById("olDiv");
let questioForm = document.getElementById("questionForm");
let question = document.getElementById("question");
let questionClose = document.getElementById("questionIcon");
let q_male = document.getElementById("q_male");
let q_job = document.getElementById("q_job");
let ptag = document.getElementById("questionP");
let qjo = document.getElementById("questionJobOL");

let jobList = [];
let gender = [];
let totalList = [];
let fEmail = [];
let phoneList = [];
let jobCount = 0;
let maleCount = 0;

// SHOW FORM

add.addEventListener("click", function () {
  let nameValue = Name.value.trim();
  let familyValue = family.value.trim();
  let emailValue = email.value.trim();
  let jobValue = job.value.trim();
  let phoneValue = phone.value.trim();
  let sexValue = sex.value;

  let phonebool = false;
  let emailbool = false;

  for (let s = 0; s < phoneList.length; s++) {
    if (phoneList[s] === phoneValue) {
      phonebool = true;
    }
  }
  for (let d = 0; d < fEmail.length; d++) {
    if (fEmail[d] === emailValue) {
      emailbool = true;
    }
  }

  if (
    nameValue === "" ||
    familyValue === "" ||
    emailValue === "" ||
    phoneValue === "" ||
    sexValue === ""
  ) {
    alert("please fill all inputs!..");
  } else if (/\d/.test(nameValue)) {
    Name.value = "";
    alert("your name is not correct");
  } else if (/\d/.test(familyValue)) {
    family.value = "";
    alert("your family is not correct");
  } else if (/\d/.test(jobValue)) {
    job.value = "";
    alert("your job is not correct");
  } else if (!emailValue.endsWith("@gmail.com")) {
    email.value = "";
    alert("please enter correct email");
  } else if (phoneValue.length !== 11) {
    phone.value = "";
    alert("enter correct phone number");
  } else if (phonebool === true) {
    alert("this email is used!");
  } else if (emailbool === true) {
    alert("this phone is used!");
  } else {
    if (jobValue === "") {
      jobValue = "none";
      jobList.push(0);
    } else {
      jobList.push(1);
    }

    if (sexValue === "male") {
      gender.push(1);
    } else if (sexValue === "female") {
      gender.push(0);
    }
    fEmail.push(emailValue);
    phoneList.push(phoneValue);

    const newList = document.createElement("li");
    const text = `${nameValue} ${familyValue}- ${emailValue}- ${jobValue}- ${phoneValue}- ${sexValue}`;
    newList.textContent = text;
    order.appendChild(newList);
    totalList.push(text);

    alert("you registered!");

    Name.value = "";
    family.value = "";
    email.value = "";
    job.value = "";
    phone.value = "";
    sex.value = "";
  }
});

// SHOW

show.addEventListener("click", function () {
  f_form.classList.add("Action");
  showForm.classList.remove("Action");
});
showClose.addEventListener("click", function () {
  f_form.classList.remove("Action");
  showForm.classList.add("Action");
});

// FIND BY EMAIL
findEmail.addEventListener("click", function () {
  f_form.classList.add("Action");
  findForm.classList.remove("Action");
});
findClose.addEventListener("click", function () {
  f_form.classList.remove("Action");
  findForm.classList.add("Action");
});

// QUESTION FORM

question.addEventListener("click", function () {
  f_form.classList.add("Action");
  questioForm.classList.remove("Action");
});
questionClose.addEventListener("click", function () {
  f_form.classList.remove("Action");
  questioForm.classList.add("Action");
  ptag.innerHTML = "choose";
});

// QUESTION JOB

q_job.addEventListener("click", function () {
  let jobCount = 0;
  if (!jobList.includes(1)) {
    ptag.innerText =
      ptag.innerText.toLocaleLowerCase() === "nobody has a job"
        ? "choose"
        : "nobody has a job";
  } else {
    const currentHeight = parseInt(window.getComputedStyle(questioForm).height);
    if (currentHeight === 200) {
      q_job.classList.add("backgroundAction")
      questioForm.style.height = "400px";
      ptag.innerText = "who does have a job!....";

      qjo.innerHTML = "";

      for (let i = 0; i < jobList.length; i++) {
        if (jobList[i] === 1) {
          const newText = totalList[i];
          const newLi = document.createElement("li");
          newLi.innerText = newText;
          qjo.appendChild(newLi);
          jobCount++;
        }
      }
      olDiv.style.overflowY = jobCount >= 7 ? "scroll" : "auto";
    } else {
      ptag.innerText = "choose";
      questioForm.style.height = "200px";
      qjo.innerHTML = "";
      q_job.classList.remove("backgroundAction")
    }
  }
});

// QUESTION MALE

q_male.addEventListener("click", function () {
  if (!gender.includes(1)) {
    ptag.innerText =
      ptag.innerText.trim().toLocaleLowerCase() === "choose"
        ? "there is no man!...."
        : "choose";
  } else {
    const currentHeightMale = parseInt(
      window.getComputedStyle(questioForm).height
    );
    if (currentHeightMale === 200) {
      q_male.classList.add("backgroundAction")
      questioForm.style.height = "400px";
      ptag.innerText = "the man users .....";

      qjo.innerText = "";

      for (let x = 0; x < gender.length; x++) {
        if (gender[x] === 1) {
          const genderText = totalList[x];
          const genderList = document.createElement("li");
          genderList.innerText = genderText;
          qjo.appendChild(genderList);
          maleCount++;
        }
      }
      olDiv.style.overflowY = jobCount >= 7 ? "scroll" : "auto";
    } else {
      q_male.classList.remove("backgroundAction")
      questionForm.style.height = "200px";
      ptag.innerText = "choose";
      qjo.innerText = "";
    }
  }
});

// FIND EMAIL

findButton.addEventListener("click", function () {
  let value = input.value.trim();
  if (findButton.innerText.toLowerCase() === "find") {
    if (input.value === "") {
      alert("please enter your email!");
    }
    let found = false;
    let emailtag = "";

    for (let a = 0; a < fEmail.length; a++) {
      if (fEmail[a] === value) {
        emailtag = totalList[a];
        found = true;
      }
    }
    if (found) {
      input.value = "";
      input.setAttribute("disabled", "");
      findForm.style.height = "250px";
      findTag.innerText = emailtag;
      findButton.innerText = "tryagain";
    } else {
      alert("your email doesnt exist!");
    }
  } else {
    input.removeAttribute("disabled");
    findTag.innerText = "";
    findForm.style.height = "200px";
    findButton.innerText = "find";
  }
});
