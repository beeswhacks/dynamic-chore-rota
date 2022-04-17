# dynamic-chore-rota
A dynamic chore rota, allowing tasks to be marked as completed for everyone using the app to see. This is a fork of my chore-rota project.

<img src="https://user-images.githubusercontent.com/90331266/163716282-908ef762-748f-4ef2-93c9-85709a096bc4.png" width="300">

## Rationale
This project was an exercise in making a dynamic web application. Before this, I had experimented with building static web pages using HTML and JavaScript, and had built a static chore rota (in my [chore-rota](https://github.com/beeswhacks/chore-rota) repo). I asked myself while I was building the static rota, "How do I make it so that each task can be marked complete? How can I do this so that the same information is available to all users of the page?". This is what led me to producing the dynamic version.

## Learning and reflection
I thought it would be good for my development to make a note of what I have learned from each project, and to reflect on my experience of completing it.

- This was my first experience producing a Node app, and my first experience building a web app with Express.
- I learned to use MongoDB to persist data, and to use Mongoose as the interface between Node and MongoDB. Until now I have mainly used SQL Server to store data in my work.
- It's interesting to reflect that my only goal starting out with this was to add a 'complete' button to each task. I didn't foresee at the time how fundamental a change that would be under the surface, and the step up in complexity that it would require compared to the static version of my chore rota. I had no idea! When I'd finished working on the static version, I gazed from the lofty summit of Mount Stupid[^1] (see image below), reflecting on how far I'd come. Going from not knowing a drop of HTML and JavaScript to having produced a neat little web page had boosted my confidence, and I felt determined - destined - to keep going with the same momentum. Moving on to this project was the humbling experience that I needed. I am glad to see how much there is yet to know.
<img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Dunning%E2%80%93Kruger_Effect_01.svg" width="500">

[^1]: 忍者猫, CC0, via Wikimedia Commons

## TODO
- [ ] Deploy to Heroku
- [ ] Tighten up styling of header
