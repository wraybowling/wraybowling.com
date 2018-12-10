---
{
	'title': 'Wayfinding Kiosk',
	'repository': 'https://github.com/rcpl/wayfinding',
	
}
---

A wayfinding kiosk. It's a 1080p screen with a list of events and a map on it.
The problems to solve: customers asking basic wayfinding questions is not inherintly a problem. Staff could see people trying to self-navigate and failing however, so  an effort was made to make wayfinding signage more clear. The greater strategy included printed folded maps, vinyl stickers placed on walls and standing columns, and this interactive touchscreen.

(image)

The kiosk went through numerous phases of rapid prototyping. the first version was built with the browser-based tool Noodl.

The final version took advantage of geojson so that the map data could transport to other GIS toolsets. It is hosted on Firebase, but since the data comes from a completely external source, it could have been hosted on any static service, including Github Pages.

Other features include
- Variable Fonts
-- were very useful in the rapid prototyping as it allows me to size up text in any way for the user in realtime.
- Room highlighting with mapbox API
- offline memory of event list & syncing

Problems faced:
Digital Kiosks may have a base operating system on them, and in the case of Viewsonic, that OS was a customized flavor of Android that did not use Chrome as its embedded browser. Avoid the old Android browser at all costs! It's not worth the time and effort.
