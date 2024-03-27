// BURGER MENU

let burgerBtn = document.getElementById("burger-btn")
burgerBtn.addEventListener("click", openNavMenu)

function openNavMenu() {
  let navMenu = document.getElementById("mobileMenu");
  navMenu.classList.add("display-block")
}


let closeBtn = document.getElementById("close-btn")
closeBtn.addEventListener("click", closeNavMenu)

function closeNavMenu() {
  let navMenu = document.getElementById("mobileMenu");
  navMenu.classList.remove("display-block")
}


// ABOUT ME DROPDOWN

let aboutMe = document.getElementById("title-about-me")
aboutMe.addEventListener("click", openDropdownAbout)

function openDropdownAbout() {
  let dropdownAbout = document.getElementById("dd-about-me");
  dropdownAbout.classList.add("display-block")
  let dropdownGuides = document.getElementById("dd-guides");
  dropdownGuides.classList.remove("display-block")
  let dropdownTips = document.getElementById("dd-tips");
  dropdownTips.classList.remove("display-block")
  let dropdownContacts = document.getElementById("dd-contacts");
  dropdownContacts.classList.remove("display-block")
}

let closeAboutMe = document.getElementById("close-about")
closeAboutMe.addEventListener("click", closeDropdownAbout)

function closeDropdownAbout() {
  let dropdownAbout = document.getElementById("dd-about-me");
  dropdownAbout.classList.remove("display-block")
}


// GUIDES DROPDOWN

let guides = document.getElementById("title-guides")
guides.addEventListener("click", openDropdownGuides)

function openDropdownGuides() {
  let dropdownGuides = document.getElementById("dd-guides");
  dropdownGuides.classList.add("display-block")
  let dropdownAbout = document.getElementById("dd-about-me");
  dropdownAbout.classList.remove("display-block")
  let dropdownTips = document.getElementById("dd-tips");
  dropdownTips.classList.remove("display-block")
  let dropdownContacts = document.getElementById("dd-contacts");
  dropdownContacts.classList.remove("display-block")
}

let closeGuides = document.getElementById("close-guides")
closeGuides.addEventListener("click", closeDropdownGuides)

function closeDropdownGuides() {
  let dropdownGuides = document.getElementById("dd-guides");
  dropdownGuides.classList.remove("display-block")
}


// TIPS DROPDOWN

let tips = document.getElementById("title-tips")
tips.addEventListener("click", openDropdownTips)

function openDropdownTips() {
  let dropdownTips = document.getElementById("dd-tips");
  dropdownTips.classList.add("display-block")
  let dropdownAbout = document.getElementById("dd-about-me");
  dropdownAbout.classList.remove("display-block")
  let dropdownGuides = document.getElementById("dd-guides");
  dropdownGuides.classList.remove("display-block")
  let dropdownContacts = document.getElementById("dd-contacts");
  dropdownContacts.classList.remove("display-block")
}

let closeTips = document.getElementById("close-tips")
closeTips.addEventListener("click", closeDropdownTips)

function closeDropdownTips() {
  let dropdownTips = document.getElementById("dd-tips");
  dropdownTips.classList.remove("display-block")
}


// CONTACTS DROPDOWN

let contacts = document.getElementById("title-contacts")
contacts.addEventListener("click", openDropdownContacts)

function openDropdownContacts() {
  let dropdownContacts = document.getElementById("dd-contacts");
  dropdownContacts.classList.add("display-block")
  let dropdownAbout = document.getElementById("dd-about-me");
  dropdownAbout.classList.remove("display-block")
  let dropdownGuides = document.getElementById("dd-guides");
  dropdownGuides.classList.remove("display-block")
  let dropdownTips = document.getElementById("dd-tips");
  dropdownTips.classList.remove("display-block")
}

let closeContacts = document.getElementById("close-contacts")
closeContacts.addEventListener("click", closeDropdownContacts)

function closeDropdownContacts() {
  let dropdownContacts = document.getElementById("dd-contacts");
  dropdownContacts.classList.remove("display-block")
}