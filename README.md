# dynamic-chore-rota
A dynamic chore rota, allowing tasks to be marked as completed. This is a fork of my chore-rota project.

https://dynamic-chore-rota.herokuapp.com/ (mobile only - use dev tools if you're on a computer. If it's not working it's probably because my MongoDB Atlas cluster is asleep, as it's only a free-tier cluster)

<img src="https://user-images.githubusercontent.com/90331266/163716282-908ef762-748f-4ef2-93c9-85709a096bc4.png" width="300">

## Rationale
I decided to start learning web development in early 2022, and needed a goal to focus my efforts on. At the time, myself and my partner had been discussing devising a cleaning rota to keep on top of chores, so I decided to create the rota as a web app. Neither glamorous or exciting, but a goal nonetheless, so exactly what I needed.

I originally created a static web page that hosted a chore rota, using standard JavaScript to assign tasks to me and my partner on a rotating weekly basis (in my [chore-rota](https://github.com/beeswhacks/chore-rota) repo). I wanted to add a button to each task so that we could mark them as completed, both for the satisfaction of hitting the button after a gruelling hour spent cleaning the bathroom, and because it seemed like a good challenge. As I researched how I might do this, I realised that this seemingly simple change would require a completely different design, and a static web page would no longer suffice. A this point I decided to fork of the original project into this repo.

## Learning and reflection
I thought it would be good for my development to make a note of what I have learned from each project, and to reflect on my experience of completing it.

- This was my first experience producing a Node app, and my first experience building a web app with Express.
- I learned to use MongoDB to persist data, and to use Mongoose as the interface between Node and MongoDB. Until now I have mainly used SQL Server to store data in my work.
- It's interesting to reflect that my only goal initially was to add a 'complete' button to each task. I didn't foresee how fundamental a change that would require under the surface, and how much more complex it would be compared to the static version of my chore rota. I had no idea! When I'd finished working on the static version, I gazed from the lofty summit of Mount Stupid[^1] (see image below), reflecting on how far I'd come. Going from not knowing a drop of HTML and JavaScript to having produced a neat little static web page had boosted my confidence, and I felt determined - destined - to keep going with the same momentum. This project was the humbling experience that I needed. I realised I had to move the scripting from the client side to the server, which led me to Node and Express. Storing the completion status of tasks led me to MongoDB and Mongoose. The need to make the app available for myself and my partner to see led me to Heroku and MongoDB Atlas. I am glad to see how much there is yet to know.
<img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Dunning%E2%80%93Kruger_Effect_01.svg" width="500">

[^1]: 忍者猫, CC0, via Wikimedia Commons
