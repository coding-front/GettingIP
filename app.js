let text = document.querySelector(".text");
let countryCity = document.querySelector(".country-city");
let loading = document.querySelector(".loading");

// Get Ip

const apiIp = 'https://api64.ipify.org?format=json';
fetch(apiIp)
  .then(response => response.json())
  .then(data => {

    const ip = data.ip;
    text.innerText = ip;

    // Get Country and City From IP

    const apiCuntry_city = `https://ipinfo.io/${ip}?token=451a1f79f9a1a1`;
    fetch(apiCuntry_city)
    .then(response => response.json())
    .then(data => {
        const {city , country} = data;
        countryCity.innerText = `${country}.${city}`;

        loading.style.animation = 'hide 0.5s';
        setInterval(() => {
          loading.remove();
        },500);
    })
  })
  .catch ( error =>{
    text.innerText = "Not Found";
    countryCity.innerText = "-.-"
  })