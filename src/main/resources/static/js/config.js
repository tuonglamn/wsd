requirejs.config({
	baseUrl: 'js/',
	paths: {
        'jquery': 'bower/jquery/jquery',
        'angular': 'bower/angular/angular',
        'googlemaps': 'bower/googlemaps-amd/googlemaps',
        'async': 'bower/requirejs-plugins/async',
        'domReady': 'bower/requirejs-domready/domReady',
        'bootstrap': 'bower/bootstrap/bootstrap',
        'lodash': 'bower/lodash/lodash',
        'map': 'libs/map',
        'app': 'libs/app'
    },
    googlemaps: {
    	params: {
    		key: 'AIzaSyAzIDW9AZseqnR8vcY12OtfQPIV_MODSXQ'
    	}
    },
    shim: {
    	'lodash' : {
    		exports: '_'
    	},
    	'bootstrap' : { 
    		'deps' :['jquery']
    	},
    	'app' : { 
    		'deps': ['bootstrap', 'lodash']
    	}
    }});