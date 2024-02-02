var map = L.map('map').setView([31.4787,74.4160], 32);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([31.4787,74.4160]).addTo(map)
		.bindPopup('The Technology Sandbox<br> Your Current Location')
		.openPopup();	