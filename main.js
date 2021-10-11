'use strict'

const searchButton = document.querySelector('.search')

const getInfo = async () => {
  const result = await fetch("https://api.generadordni.es/v2/profiles/person?results=1")
  const data = await result.json()
  const userInfo = data.map((element) => ({
    name: element.fullname,
    gender: element.gender,
    birthDay: element.birthdate,
    province: element.province,
    nif: element.nif,
    number: element.phonenumber
  }));
  //FULLNAME
  document.querySelector('.fullname').innerHTML = `<h4 class="result">${userInfo[0].name}</h4>`
  //GENDER
  document.querySelector('.gender').innerHTML = `<h4 class="result">${userInfo[0].gender}</h4>`
  //BIRTH DATE
  document.querySelector('.birth').innerHTML = `<h4 class="result">${userInfo[0].birthDay}</h4>`
  //PROVINCE
  document.querySelector('.province').innerHTML = `<h4 class="result">Provincia: ${userInfo[0].province}</h4>`
  //NIF
  document.querySelector('.nif').innerHTML = `<h4 class="result">NIF: ${userInfo[0].nif}</h4>`
  //PHONE NUMBER
  document.querySelector('.phoneNumber').innerHTML = `<h4 class="result">Teléfono: ${userInfo[0].number}</h4>`
}

searchButton.addEventListener("click", getInfo); 