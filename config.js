/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
													// or add a specific IPv4 of 192.168.1.5 :
													// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
													// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
													// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "MMM-learnlanguage",
			position: "top_left",
			config: {
				language: "spanish",
				nextWordInterval: 10000, 
		                    showpair: "showboth",
		                    wordpaircssclassname: "bright medium",
		                    }
		},
		{
			module: "newsfeed",
			position: "upper_third",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
		  module: "MMM-OClock",
		  position: "top_right",
		  config: {
		    locale: "it-IT", //default is system locale, or use like this. "de-DE"
		    canvasWidth:300,
		    canvasHeight:300,
		    centerColor: "#FFFFFF",
		    centerR: 20,
		    centerTextFormat: "YYYY",
		    centerFont: "bold 20px Roboto",
		    centerTextColor:"#000000",
		    hands: ["month", "date", "day", "hour", "minute", "second"],
		    //available values; "year", "month", "date", "week", "day", "hour", "minute", "second"
		    handType: "round", //"default", "round"
		    handWidth: [10, 10, 10, 10, 10, 10],
		    handTextFormat: ["MMM", "Do", "ddd", "h", "m", "s"],
		    handFont: "bold 12px Roboto",
		    useNail: true,
		    nailSize: 25,
		    nailBgColor: "#000000",
		    nailTextColor: "#FFFFFF", //CSS color or "inherit"
		    space: 3,
		    colorType: "radiation", //availables: "static", "radiation", "transform", "hsv"
		    colorTypeStatic: ["red", "orange", "yellow", "green", "blue", "purple"],
		    colorTypeRadiation: ["#333333", "red"],
		    colorTypeTransform: ["blue", "red"],
		    colorTypeHSV: 0.15, //hsv circle start color : 0~1

		    handConversionMap: { // I think you don't need to modify this.
		      "year": "YYYY",
		      "month": "M",
		      "date": "D",
		      "week": "w", // Local week of year. If you want to use ISO week of year, use "W" instead "w"
		      "day": "e", // Local day of week. If you want to use ISO day of week, use "E" instead "e"
		      "hour": "h", // 12H system. If you want to 24H system, use "H" instead "h"
		      "minute": "m",
		      "second": "s"
		    },
		    scale: 1.2,
		  }
		},
		{
			module: "clock",
			position: "top_center"
		},
		{
		disabled: false,
		module: 'MMM-PLOW',
		position: 'middle_center',
		config: {
		  languages: "en",                          // en, de, es, fr, it, nl, ar, zh, x-pig-latin
		  style: "default",                         // See Style list in readMe
		  latLong: "45.8081,9.0852",               // Your latitude and longitude seperated by a comma
		  title: "Weather",                        // Location seems logical
		  tempUnits: "C",                           // F or C
		  textColor: "ffffff",                      // Hex color codes. No # symbol
		  font: "default",                          // See font list in readMe
		  htColor: "ffffff",                        // high temp color. Hex color codes. No # symbol
		  ltColor: "ffffff",                        // low temp color. Hex color codes. No # symbol
		  displaySum: "yes",                        // Display Summary, yes or no
		  displayHeader: "yes",                     // yes or no
		  timeColor: "ffffff",                      // when style is graph-bar. Hex color codes. No # symbol
		  tempColor: "ffffff",                      // when style is graph-bar. Hex color codes. No # symbol
		  currentDetails: "true",                   // when style is graph-bar. true or false
		  graphType: "precip_graph",                // when style is graph. See readMe
		  lineColor: "ffffff",                      // when style is graph. No # symbol
		  markerColor: "ffffff",                    // when style is graph. No # symbol
		  animationSpeed: 3000,
		  updateInterval: 10 * 60 * 100,
		   }
		},
    	{
    		module: 'MMM-Globe',
    		position: 'lower_third',
    		config: {
        		style: 'geoColor',
        		imageSize: 300,
        		ownImagePath:'',
        		updateInterval: 10*60*1000
    		}
    	},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
