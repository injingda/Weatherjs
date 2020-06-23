class Weather {
    constructor(city, state) {
        this.apiKey = 'be84216a9657a7ac1d32ee6cd380ba12';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from api
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;

    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city
        this.state = state;
    }
}