/* sample 1 - JavaScript file */

/*jslint browser: true*/
/*global $,L*/

var mapboxTiles = 'https://{s}.tiles.mapbox.com/v4/tursics.l7ad5ee8/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidHVyc2ljcyIsImEiOiI1UWlEY3RNIn0.U9sg8F_23xWXLn4QdfZeqg',
	map = null;

// -----------------------------------------------------------------------------

function initMap(elementName, lat, lng, zoom) {
	'use strict';

	if (null === map) {
		var layer = L.tileLayer(mapboxTiles, {
				attribution: '<a href="http://www.openstreetmap.org" target="_blank">OpenStreetMap-Mitwirkende</a>, <a href="https://www.mapbox.com" target="_blank">Mapbox</a>'
			});

		map = L.map(elementName, {zoomControl: false, scrollWheelZoom: true})
			.addLayer(layer)
			.setView([lat, lng], zoom);

		map.addControl(L.control.zoom({ position: 'bottomright'}));
	}
}

// -----------------------------------------------------------------------------

$(document).on("pageshow", "#pageMap", function () {
	'use strict';

	initMap('mapContainer', 51.165, 10.455, 6);
});

// -----------------------------------------------------------------------------
