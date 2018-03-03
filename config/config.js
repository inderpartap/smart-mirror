
var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},

		{
    module: 'Facial-Recognition',
    config: {
    	threshold: 80,
        // force the use of a usb webcam on raspberry pi (on other platforms this is always true automatically)
        useUSBCam: true,
        // Path to your training xml
        trainingFile: '/home/inderpartap/Desktop/start/mirror/SmartMirror/modules/Facial-Recognition/training.xml',
        // recognition intervall in seconds (smaller number = faster but CPU intens!)
        interval: 2,
        // Logout delay after last recognition so that a user does not get instantly logged out if he turns away from the mirror for a few seconds
        logoutDelay: 15,
        // Array with usernames (copy and paste from training script)
        users: ['inderpartap'],
        //Module set used for strangers and if no user is detected
        defaultClass: "default",
        //Set of modules which should be shown for every user
        everyoneClass: "everyone",
        // Boolean to toggle welcomeMessage
        welcomeMessage: true
    }
},

		
		{
			module: "clock",
			position: "top_left",
			classes: 'default everyone'
		},
		{
			module: "calendar",
			header: "Indian Holidays",
			classes: 'default everyone',
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "https://www.calendarlabs.com/ical-calendar/ics/33/India_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			classes: 'default everyone'
		},
		// {
		// 	module: "currentweather",
		// 	position: "top_right",
		// 	classes: 'default everyone',
		// 	config: {
		// 		location: "Chandigarh",
		// 		locationID: "1274746",  //1264527 - chennai ID from http://www.openweathermap.org/help/city_list.txt
		// 		appid: "4868c9e50425c34729466158a776e4fc"
		// 	}
		// },
		{
			module: "weatherforecast",
			position: "top_right",
			classes: 'default everyone',
			header: "Weather Forecast",
			config: {
				location: "Chandigarh",
				locationID: "1274746",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "4868c9e50425c34729466158a776e4fc"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			classes: 'inderpartap',
			config: {
				feeds: [
					{
						title: "Headlines",
						url: "https://news.google.com/news/rss/?ned=in&gl=IN&hl=en-IN"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},




	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}