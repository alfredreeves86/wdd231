export async function loadWeather() {

    const container = document.querySelector('#weather-container');
    const template = document.querySelector('#weather-card-template');

    if (!container || !template) return;

    //API call for openweather_api//
    const apiKey = '56b9c0a30b534396d84e1950c2ba88d7';
    const lat = 37.44; // Palo Alto
    const lon = 122.14;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        //current weather//
        const current = data.list[0];
        const currentTemp = Math.round(current.main.temp);
        const currentDesc = current.weather[0].description;
        const currentIcon = current.weather[0].icon;

        //Make a 3-day forecast//
        const forecastByDate = {};
        data.list.forEach(item => {
            const date = new Date(item.dt * 1000).toDateString();
            if (!forecastByDate[date]) forecastByDate[date] = [];
            forecastByDate[date].push(item);
        });

        const forecastDays = Object.keys(forecastByDate).slice(0,3).map(date => {
            const dayItems = forecastByDate[date];
            const noon =dayItems.find(d => new Date(d.dt * 1000).getHours() === 12) || dayItems[dayItems.lenght >> 1];
            return {
                date: new Date(date).toLocaleDateString(undefined, {weekday: 'short', month: 'short', day: 'numeric'}),
                temp: Math.round(noon.main.temp),
                desc: noon.weather[0].description,
                icon: noon.weather[0].icon
            };
        });

        //clear container//
        container.innerHTML = '';

        //fill current weather//
        const clone = template.context.cloneNode(ture);

        clone.querySelector('.weather-temp').textContent = currentTemp + '°F';
        clone.querySelector('.weather-desc').textContent = currentDesc;
        const currentIconEl = clone.querySelector('.weather-icon');
        currentIconEl.src = `https://openweathermap.org/img/wn/${currentIcon}@2x.png`;
        currentIconEl.alt = currentDesc;

        const forecastContainer = clone.querySelector('.weather-forecast');

        forecastDays.forEach(day => {
            const dayClone = dayTemplate.content.cloneNode(true);
            dayClone.querySelector('.forecast-date').textContent = day.date;

            const dayIcon = dayClone.querySelector('img');
            dayIcon.src = `https://openweathermap.org/img/wn/${day.icon}@2x.png`;
            dayIcon.alt = day.desc;

            dayClone.querySelector('.forecast-temp').textContent = day.temp + '°F';
            dayClone.querySelector('.forecast-desc').textContent = day.desc;

            forecastContainer.appendChild(dayClone);
        });

        //append to page//
        container.appendChild(clone);

    } catch (error) {
        console.error('Weather error:', error);
        const errorClone = errorTemplate.content.cloneNode(true);
        container.appendChild(errorClone);
    }
}