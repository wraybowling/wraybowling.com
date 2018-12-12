---
{
	"title": "JoyStation",
  "repo": "https://github.com/RCPL/JoyStation",
	"http": "http://joystation.RCPL.github.io"
}
---

JoyStation is a standalone kiosk designed to collect arbitrary survey data in low foot trafficked areas at a high resolution.

# Process
## 0.x
Rapid prototyping and iteration drove all of JoyStation's design decisions. The earliest version was nothing more than four crudely drawn faces. This web page was loaded on a tablet, put in a wobbly kiosk stand, and set out for customers to toy with until the battery ran out.

## 1.x
The most obvious problems with v0 were
1. there was no mechanism to stop users from stuffing the ballot. Frustrated customers seemed keen to tap on "bummer" upwards of 10 times.
2. The graphics were crudely drawn

## 2.x


# Development
JoyStation started as a low cost open source solution to installing stand-alone kiosks for surveying customer satisfaction. 

Joystation is a more ambitious project than it may appear to be. The idea came to me during a time when I was doing a lot of UX work for Richland Library, namely card sorts on their site map. Though the goal of Joystation was different from my manager's perspective, I could see it as a base for a great tool that would fascilitate sampling weights for just about any collection of data. As long as the datum entered by the end user was rich and easy to input, it was actually completely fine to let the same user input their answers multiple times. We could in theory catch users contradicting themselves or identifying novel sets of requirements never before considered.
JotStation works in a very simple fashion. A progressive web application runs in Safari on an iPad that has put into accessibility mode to prevent users from exiting. A single prompt is shown on the screen and we wait for a person to walk up to the Joystation resting in a kiosk stand. They answer the question, be it concrete or abstract, real or hypothetical, serious or silly, and the result is recorded in google analytics as an anonymous data point. There are a lot of reasons why I chose to collect data in this way:
1. Privacy: There is no mechanism that attempts to collect the user's information beyond their answer because I felt it wouldn't be ethical.

As of now there is exactly one "module" for the JoyStation and it measures a single variable on a spectrum of integers. In the case of the pilot program, we used the spectrum to measure, you guessed it, joy on a scale of -200 through +200.

##Theory on sample size versus resolution
People are more willing to give precise answers to qualitative questions than we give them credit for as long as the spectrums feel true to reality. That is to say that orthogonal parameters should remain orthogonal while co-modulating parameters should model their co-dependence. Constrains such as these have been difficult to enforce in web user interfaces, but have been commonplace in computer software for many years. The advent of variable-binding in web components had everything to do with my attempt to revisit the lost art, and instead of giving in to the predictable norms of forms, create something that felt alive.

I decided to use an abstraction of a face as the visual feedback for the meaning of the slider. Each person may have different attitudes about an arbitrary spectrum, but there is less difference (a smaller margin of error that I should probably provide a number for to show that I actually did my homework) for a face.

The spectrum wasn't utilized quite how I expected, many users seemed to pick the polar extremes most often leading me to believe that they had no interest in fine tuning their responses. A "push-n-grunt" approach may have been better for these users but would have left out the chance for more specific responses. I wonder what a marriage of the two methods would be like...
- push buttons for pre-defined markers on the spectrum plus a slider for finer tuning
- a fly wheel that must be repeatedly flung to reach extremeties (e.g. inertia scroll)
- push buttons that turn into a slider after the first press

There was briefly a concern about making a user interface that was "too fun" for fear that a lot of users would play around and give us a false sense of participation. this is/was inevitable no matter what.

(surely there are some drawings from the loose leaf book that would be useful here)

Data could then be inspected on the four dimensions that analytics provides for events. This was done so that the application could be deployed easily without the need for registration. The turned out to work quite well-- Joystation was deployed by another public library within a month of it being published on Github. 
Future Plans for JoyStation include more modules for fascilitating card sorts for just about any purpose that could take advantage of a weighted graph database. In the case of presenting these modules solely to customers on a floor, each session could be self-contained. In the case of Amazon mechannical Turk or internal usage, sessions could feed back on themselves allowing every individual to moderate and manipulate the graph as a whole through means of stochasticity.

## Agreement
Agreeance can be formulated in a lot of different ways as described by [John Uebersax](http://john-uebersax.com/stat/agree.html). Any of those methods or some combination could be used to continuously feedback the graph to end users until disagreement dips below a certain threshold. Put simply, the ratio of users who agree must outweigh users who disagree to consider something common sense and thus usable.
