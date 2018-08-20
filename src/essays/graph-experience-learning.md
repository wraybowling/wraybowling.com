---
{
	"title": "Graph Experience Learning"
}
---

## Or "How I want to live my life, part I"
I've realized something profound. The facts themselves are fairly sound, it might just be our beliefs and expectations that are delicate. "People are the problem" as they say. The realization is that the following three things are extremely similar in nature

* user experience design
* machine learning
* graph databases

## The Color of Food
One size/flavor does not fit all. Howard Muskowitz made that abundantly clear in the 1970s. If he had been mistaken, we would never have had chunky tomato sauce. Over the years I've come to refer to the color sections of stylesheets as "flavors" There's a lot more flexibility to shift the grade of your particular shades of white when you name your colors after foods.

## 
Working in user experience design for the past <since datetime="August 11 2015, 9:00am EDT"/> gave me great sobering experiences. It's not just a realization that other people do not necessarily think as I do, but also the sobriety of the fact that a great many actually do think alike. One may assume that there's a massive chaotic impossibility to acruing opinion, but in fact it revealed itself to be a reductive process. It's easiest to start with literally any existing model, and shift the models that "stick" towards agreeing solutions. Great research was done on this by ____ (ux research whitepapaer about iterative card sorts)

##
Machine learning techniques use training data (think muskowitz and his 37 tomato sauces) and then repeated through trial and error surveying. Each case can be conceptualized as a "learning experience" that modifies the connections between synapses. Those metaphorical synapses have another term in the computing world: nodes and edges. That's where all three of these disciplines meet. Every attempt to asses user information, reorganize, rethink etc is an operation on a graph of nodes and edges. When one person likes chunky tomato sauce, the weight between person and chunkiness gets a little stronger for the collective of nodes that strongly connect. And just the reverse is opposite. It turns out that machine learning, and graph data is essentially one and the same, and this data is simply being mistreated as too "big" to understand in any meaningful way to mortal humans. Ironically, these graphs are worth reading like literature, charting like geographical maps of our minds. And then, when we ask the computer to "think" for us we won't be so surprised when the result is incorrect.

The process of prediciton is really just one of interpolation and extrapolation. That is to say that if there is no already existing entry for what's supposed to come between A and C, you simply place B somewhere between the two based on any other information you might have, knowing that at a bare minimum A and C have a relationship. Not often thought about unless you are a computer science nerd, but a negative value or over-saturated value in an interpolation function can choose values that are outside of the range, sometimes with surprisingly insightful results.

## Graph Data
Data is anything that can be sorted, indexed, grouped, filtered, etc. When data is organized into nodes and edges, it's important to keep in mind that not all information is "graphy" and thus worth making into a graph database. There are services and softwares that make attempts to optimize the querying of that kind of data such as Neo4j, ArangoDB, rethinkDB, and GraphQL.

## Plot Everything That You Used to use Checkboxes For
A great way to get started is to toss away state. Let's use movies as an example. IMDb boasts a near complete catalog of data about films, but there are questions a user may have that are difficult to answer with the data that is collected. Using no more memory on the part of the computers that run the service, these questions could be easily answered for any end user, not just the priviledged few that have direct access to IMDb's SQL databases. For example, let's say I saw a very frightening film and wanted to know what films are less frightening than? Presently IMDb uses genres and topics to track what categories to sort films into. In addition, it would be more human to track each genre association not as a simple boolean, but as a percentage or some other normalized value. This is called parameterization, and it's becoming rather popular in fields like computer graphics and audio engineering, but is taking some time to spill over into other sectors. For movies, these parameters would align into the core five elements of any story:

* setting
* plot
* characters
* conflict
* theme

Graph theory is one of multi-dimensional parameter space. Machine learning is interpolation through multi-dimensional parameter space. Understanding which movies should be recommended to your individual end user that thinks that some such movie was too frightening is nothing more than a limit drawn in multi-dimensional parameter space. As soon as you introduce a "selector," you lose resolution in the result.

## How Much Time to Spend on Organizing
Do the set-up. Do your homework. Do surveying if you must. But I'll argue that a lot less time could be spent on up-front user experience research. A lot less time could be spent wondering how to model your data. A lot less time could be spent engineering your data's API. All these things are parts of a similar effort: finding the uncertain in-betweens to knowns from putting your content in the field. Ultimately, what should be top priority always is the content itself.
