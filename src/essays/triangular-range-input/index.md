---
{
	"title": "Why I Built a 3-Way Range Input",
  "categories": [
    "input interfaces"
  ]
}
---

# {{ $page.title }}

## What is it?
Almost exactly what you might expect, the 3-way slider is a triangle, evenly proportioned, with a single moveable dot to select a value between three options. I built it as a single Vue.js component so that it could be used in a variety of applications, while speficially tailoring it to the needs of the [Joystation](/projects/joystation) project.

## Practical Use
A linear range may give you two poles where the center point is neutral
- Good versus Evil

A triangular range is similar in that each of the three points are poles that have a center point of their own, and a shared center. By selecting somewhere between two options, you necessarily negate the third.
- Good, fast, or cheap?

Another scenario is when the user themselves is the determining data point that you are trying to measure-- not the thing in question. Let's use Good versus Evil again. If those are the poles of the spectrum, what is the point that we're plotting? Let's try ... (some sort of XKCD reference could go here. with an existing plot of data, placing your answer can be recorded as a triangulation relative to the nearest three data points. While this isn't as simple as recording the values on the good spectrum and the bad spectrum, it might allow for infinitely changing the dimensionality because the data is recorded in neural graph edges.

## Motivations
I set out to make something that didn't exist because I thought it would be more efficient at capturing relationships between objects.
- With a single item on a linear spectrum, there are two poles already. A user can indecisively point to the center of this spectrum to note that they feelbalanced between the options, but this leaves out the option to specify that they feel neither strongly about both options. A third option, labelled 'neither' would measure this
- Cosine function applied to normalized similarities results in a ratio between objects for the purposes of returning records similar to what the user specifies via weighted attributes. If a single slider could be viewed as an analog to a binary facet, then the triple-slider is logically three times better, be the options orthogonal or not.

## False Assumptions
I expected users to be less extreme with their responses. While there's nothing stopping them from answering with a landslide to a single option, this returns data that is just as binary as if I'd provided them with a much simpler user interface: a radio button.
Ratios are somewhat useful, but the deductive reasoning required to turn those ratios into a global scale are challenging to make use of.

## what i'd do different next time
Character building interfaces like this one from NBA Hangtime allow the user a finite number of points that they can fill up different atributes with. It's impossible to not use up all the points or to stuff one attribute with all of your available points. This system is also much less tedious as more than three options can be weighted simultaneously.
## reality of this project
A linear slider turned out to be a better choice for a variety of reasons, but the biggest of all is that browsers already natively support them. Collecting data in any way took priority over perfecting the method of collecting those data points, and a 1-dimensional spectrum satisfied my desire to capture a value with high precision.
## a video

## Unexpected challenges and how I adapted my process
Limiting a slider to a triangular area is not a trivial task.

Why did this take four-ish days, and help from my friend Stephen? Because linear algebra is hard. Here's a list of things I tried that didn't work:

1. [https://www.shadertoy.com/view/Xl2yDW](https://www.shadertoy.com/view/Xl2yDW)
1. http://mathjs.org/docs/datatypes/matrices.html
1. http://blackpawn.com/texts/pointinpoly/default.html
1. http://thebookofshaders.com/edit.php?log=180118181551
1. https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line#Vector_formulation

I'm sure no one else here cares to know how to make a slider that's tilted √3 or negative √3 depending on which side of the triangle you're closest to, or how to efficiently snap the sliding dot to the nearest corner if you're dragging in the fan-shaped area around that point, and then smoothly transition into sliding along the next edge if you make a 60 degree turn around the corner

But here's how it works:

Warning: everything was rendered to an SVG which means that positive Y goes down, and every math equation you'll find online has positive Y going up. It's confusing.

![The regions outside of the triangle split up into sides and corners](./IMG_1954.jpg)

![for the left side, the slope is 1/sqrt(3). the right side is just the negative of that. In regular math coordinates, these would be reversed, but remember that graphics coordinates are vertically flipped.](./IMG_1955.jpg)

![if the event point is less than either of the red lines, just snap to the apex. This is cheaper than calculating distance.](./IMG_1956.jpg)

![To determine the point along the sloped sides, the new vector (p-a).dot(n).multiply(n) where n is a unit vector of AB (from the apex to the base, with with a length of one) To write it another way, n = B.subtract(A).normalize() which could also be called "the angle" and (p-a).dot(n) could be called "the length from A" the mutiplication of the two results in a point projected onto the line.](./IMG_1957.jpg)

