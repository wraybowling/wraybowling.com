---
{
	"title": "Graph Experience Learning",
	"title_sub" : "How I want to live my life, Part I"
}
---

# New Content
Over in Human Land, we have what I'll call Experiential Learning (EL) and Experieintial Intelligence (EI), and a black box culture. with Machine Learning (the machine learns the stuff) and Artificial Intelligence (now the machine supposedly knows the stuff and can implement it) To put it bluntly, it's man versus machine. I will argue that the two sides, man and machine, are so closely related that they not only complement one another, but are destined to symbiotically merge. The links missing at the time of this writing I believe are largely in the graphical representation and user interfaces we use to manipulate graphy data.
Graphy Data is anything kind of data is this heavily reliant on relationships. The number of samples may be few, but how they are related to each other is very rich and detailed allowing humans to ask a computer questions about how two or more things are connected, or perhaps why.

<graph graphJSON='{
    "nodes": [
        {
            "id": 0,
            "name": "milk",
            "node_type": "food",
            "weight": 2
        },
        {
            "id": 1,
            "name": "bread",
            "node_type": "food",
            "weight": 2
        }
    ],
    "edges": [
        {
            "source": 1,
            "target": 0,
            "caption": "Maintains"
        },
        {
            "source": 2,
            "target": 0,
            "caption": "Maintains"
        },
        {
            "source": 3,
            "target": 0,
            "caption": "Maintains"
        },
        {
            "source": 4,
            "target": 0,
            "caption": "Often Breaks"
        },
        {
            "source": 5,
            "target": 0,
            "caption": "contributes"
        }
    ]
}' />

## A Conceptual Example
Filters. It seems like any web site with A Lot of Stuff provides users with various filters for __ but the flow of information goes one way from machine to human. What about collecting data that lives out of bounds from the filters available? What if collection of that data was built in while using filters on a web site. Every filtered list potentially empty could be an opportunity to collect suggestions. We could encourage users to _keep going_, adding categories that didn't exist in the dataset as necessary, and then allow them to submit that combination of parameters for man and machine to learn from.

### What's a Filter?
Think search engine, or a menu, and you're trying to narrow down your options from A Lot of Stuff.

## A Practical Example
Let's say we're examining a service that makes bubble tea. The factors in this example will be variety of leaf (green or black), firmness of bubbles (hard or soft), and addons (sweetened or spiced). In this example, there are 8 complete permutations:

- green soft sweetened
- black soft sweetened
- green hard sweetened
- black hard sweetened
- green soft spiced
- black soft spiced
- green hard spiced
- black hard spiced


So you're an end user looking at options, playing with the options available harmlessly starting with a black tea, but no bubbles, sugar, or spices. Removing an item is simple enough. Typically not specifying will also return results that include sugar or spice simply because you didn't specify that you wanted either. (this is a classic problem and is related to English having an ambiguous meaning to the word "or")

#### 23:00
Then you think to yourself "But I want lemon" Lemon in this fictional machine's mind does not exist and therefore is not a clickable option. Perhaps you even type in lemon in a freeform text field, but the gold standard of typing in text that does not match any entries is to report just that; no entries found. You're at an impass. The site tried to provide you with a list of results but came back with nothing. What if in place of nothing, you are prompted "What's a lemon?"
- variety of tea
- a way to prepare bubbles
- an addon
- something new
The user may think "Why don't I make this a new category called `fruit`. Sure. But this is strange... why is it asking me?" (copywriting goes a long way. Learning by doing goes farther.) Upon submitting, the service as whole, persons and machine alike, get to learn three things:
1. People may want lemon in their tea
2. This person thought that there should be a new category called `fruit`
3. If someone is ordering black tea, that person might also want lemon

## Example 1 Redux 21:00
Learning is all about drawing connections. "These three points are connected" You can have lemon in your database without presenting it to your end users. You can have everysuggestion every person ever made, someone might suggest dirt at some point. Will you add dirt to the menu? No! But lemon probably will continue to present itself. With enough agreeance that fruit deserves a place in how ingredients are divided, fruit could in this example be added, and while we're at it, let's throw in oranges. (19:44) In a traditional experience, at the point of making no possible combination, you'd leave the site, maybe write the company an email, maybe tweet about it.

Every dead end is an opportunity to teach whoever runs the web site and potentially also a machine that's trying to do some of the thinking for you to figure out what your customers actually want.

## On Bias
In the world of UX, the most common problem is consensus bias: the idea that your users think like you do. That's not necessarily true. (We already know that someone out there wants lemon, and we never thought to put it on the menu!) The only way we're going to combat consensus bias  is with more recorded outliers. If machines are assisting us in collecting our training data, it only makes sense to adjust the strategy of the human-computer symbiote. Methods don't have to change in traditional education before we can rid AI of adopting our biases. AI may be the best tool we have for unlearning biases. Instead of making the machine athoritative, have it ask people; it will never tire of asking the questions.

# Practical Example 2 (15:30)
Used heavily before a product is completed, survey data often acts as training data, informing design. Traditional project timeline might look like this
![surveys -> launch -> 2.0 ->]
but if technoliges are treated more like people, allowed to incrementally learn over time, we might see radical improvement
![sur -> launch -> v -> e -> y -> s -> 6.0]

### Iteration
The idea of iterative design  is not new, but i have yet to see any methods that leverage user interface in a final product as a means of a continual discovery process with graphs. 

![guacamole]()

The same survey question is presented two ways above.

On the left are traditional radio buttons, providing the end user, data analyst, and learning machine with insufficient data. `{selected: "guacamole"}`
On the right is a three way slider. The data from this UI enriches the dataset; we get to learn that this user believes that cake has no relationship with guacamole or campfires. Meanwhile guacamole and camp fire get to split their winnings over the user 70:30

## NExt Day
changes. Creating a system wherein the machine can help us see what we don't know yet. Instead of making the machine athouratative, have it ask the question "what do you want?" "what do you think?" Have it ask a million times, it will never tire. Then you'll have a mountain of data about what people want. Let's examine another use case: Surveys. Used heavily before a product is completed, surveys collect data that is typically used as training data that informs design. Typical timeline might look like: surveys -> launch -> 2.0
If software is treated more like people, with iterations built in to its function, we might see radical improvement. launch -> survey+use -> 6.0 (possibly 3X improvement)

The idea of iterative design is not new but I've yet to see any methods that combine user interface of final products as means of a continual discovery process (13:22)

Here's two interfaces
[radio buttons]
[triangle]

The survey on the left will provide people and machine with insufficient data to make any decisions to change {"selection": "guacamole"}

The interface on the right enriches the dataset. We get to learn that the user believes that cake has no relationship with campfire or guacamole. Meanwhile guar is preferred most still, yet is allowed to mingle roughly 30% with campfire. The resulting visualizations from this one sample are respectively very different as well.

![bar chart]
"guacamole is what they like"

![graphy chart]
"they're in the mood for something savory"

As you're trying to abstract why a bunch of things are connected, you can use categories or tags or groupings of any kind. Metadata drives what surprises and delights users. If this simple example was fed back to the system, later a user filtering or searching for savory flavors may have never considered campfire, and say "whoa!"

We can't do much with the fact that guacamole is popular other than keep making more of the same product.

As more specific groupings are formed by way of curation, we arrive at a dataset that informs the how and why to selections made. What's more, when a database that understands Graphy Data is used (Arango, Neo4j), each connection or "edge" can be a composite of datums that are tied to their creators, timestamped, disabled or promoted.

For example, Jane Doe might be super popular, and your customer base might benefit from her personal curations having more weight than normal.

Those factors are important to record because ideas get stale, people make messes, and we need machine unlearning as a species perhaps more than we need machines to assist us in learning. The most successful models I believe will be ones that expand the fringe, revisit truths as potentially trendy, and constantly invite humans to participate in strengthening or weakening those connections.

I'm aiming someone that's interested in computers maybe, but I definitely want to define all the stuff, because anyone looking at this is likely a manager wanting to know if this is good for their business ideas, someone who is in the traditional learning camp. Right now machine learning and AI look scary, and bad, and will take our jobs. I'm trying to paint a picture where AI is a new tool as revolutionary as the pencil with the eraser on the end. I think it's a misnomer that we'll make that progress while telling people that they won't need to do anything different, and we'll simply figure out how to augment.

There's very specific cases where asking for feedback works, and one should still employ a person to decide where the computer should be asking the questions. 




# {{ $page.title }} (<em>{{ $page.frontmatter.title_sub }}</em>)
I've realized something profound. The facts themselves are fairly sound, it might just be our beliefs and expectations that are delicate. "People are the problem" as they say. The realization is that the following three things are extremely similar in nature

* user experience design
* machine learning
* graph databases

## The Color of Food
One size/flavor does not fit all. Howard Muskowitz made that abundantly clear in the 1970s. If he had been mistaken, we would never have had chunky tomato sauce. Over the years I've come to refer to the color sections of stylesheets as "flavors" There's a lot more flexibility to shift the grade of your particular shades of white when you name your colors after foods.

Working in user experience design for the past <since time="August 11 2015, 9:00am EDT"/> gave me great sobering experiences. It's not just a realization that other people do not necessarily think as I do, but also the sobriety of the fact that a great many actually do think alike. One may assume that there's a massive chaotic impossibility to acruing opinion, but in fact it revealed itself to be a reductive process. It's easiest to start with literally any existing model, and shift the models that "stick" towards agreeing solutions. Great research was done on this by ____ (ux research whitepapaer about iterative card sorts)

## Graph Data
### From Machine to Human
Machine learning techniques use training data (think muskowitz and his 37 tomato sauces) and then repeated through trial and error surveying. Each case can be conceptualized as a "learning experience" that modifies the connections between synapses. Those metaphorical synapses have another term in the computing world: nodes and edges. That's where all three of these disciplines meet. Every attempt to asses user information, reorganize, rethink etc is an operation on a graph of nodes and edges. When one person likes chunky tomato sauce, the weight between person and chunkiness gets a little stronger for the collective of nodes that strongly connect. And just the reverse is opposite. It turns out that machine learning, and graph data is essentially one and the same, and this data is simply being mistreated as too "big" to understand in any meaningful way to mortal humans. Ironically, these graphs are worth reading like literature, charting like geographical maps of our minds. And then, when we ask the computer to "think" for us we won't be so surprised when the result is incorrect.

The process of prediciton is really just one of interpolation and extrapolation. That is to say that if there is no already existing entry for what's supposed to come between A and C, you simply place B somewhere between the two based on any other information you might have, knowing that at a bare minimum A and C have a relationship. Not often thought about unless you are a computer science nerd, but a negative value or over-saturated value in an interpolation function can choose values that are outside of the range, sometimes with surprisingly insightful results.

![some dots](./some-dots.svg)

### From Human to Machine
Data is anything that can be sorted, indexed, grouped, filtered, etc. When data is organized into nodes and edges, it's important to keep in mind that not all information is "graphy" and thus worth making into a graph database. There are services and softwares that make attempts to optimize the querying of that kind of data such as Neo4j, ArangoDB, rethinkDB, and GraphQL.

### Somewhere in the space between
The dance we do in iterative workflows is one that sways back and forth between placing new data on the graph based on interpolating data from the past, and updating the weights in the graph besed on how the new data actually relates to the rest of the ecosystem—perhaps creating new dimensions on which we can measure. 

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




