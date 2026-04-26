---
title: Orbis Civitas
subtitle: Creating and managing an active, 30+ member Discord Server.
start: 2022-05-01T00:00:00-06:00
image: "orbcvs.png"
tags:
  - markdown
  - lists
---

## Building Experience
On March 11th, 2020, I was a little 7th grader who couldn't contain her excitement after hearing I would get 2 weeks off from school due to the global pandemic, COVID-19. I would have never realized the impact this event would have on my life. School, extracurriculars, recreation, and even my friendships would be moved online for over a year. During this time, all I could feel was an overwhelming sense of disconnect. 

Throughout 2020-2022, I familiarized myself with the popular social platform *Discord* for school clubs and friend groups. During this time, I acted as a **server moderator** for a public server with over 1000 members. I also experimented with **building servers**: a few practice ones, and one for my school's Anime club. I familiarized myself with bot integrations, role hierarchies, and moderation commands. This would build the foundation I needed for the creation of *Orbis Civitas*.

## The Birth of Orbis Civitas
As the world finally started to return to normal, I entered my freshman year of high school. I made friends that changed my life for the better; however, we wouldn't really speak to each other outside of school. I noticed a need for new ways to interact with each other. Thinking back to my past experiences, I thought that creating a Discord server could help keep us connected.

"Orbis civitas" can be translated from Latin to mean "world city", which could refer to a city-state or major city. To me, Orbis Civitas meant creating a space that my friends and I could always return to, no matter where we were in the world. Rather than a simple group chat, we could have something that could grow with us; something more organized, more customizable. 

## Growth
This is the typical starting point of a Discord server:
![Discord Server Template](/servertemplate.png)

This is Orbis Civitas today:
![Orbis Civitas Sample](/server.png)
Orbis Civitas started with 5 people, and now has over 30 active members from our community!

## Features
When designing Orbis Civitas, I modularly implemented many features.

**Reaction Role Assignment** is commonly implemented in Discord servers, usually for setting username colors or pronoun tags. It involves a bot integration, which will read in set reactions as a trigger event for role assignment. I implemented reaction role assignment in Orbis Civitas using the third-party bot **Carl-bot**. This would involve learning the Carl-bot interface, but would also give me access to tools like custom embeds, customizable assignment behaviors, and sticky roles.
![Carl-bot Dashboard Sample](/carl.png)

Using reaction roles, I implemented **Ping Roles**, which took advantage of the opt-in nature of reaction roles to create optional pings. This was implemented due to the unavoidable nature of Discord's @everyone, which caused members to mute the server and interact less. By creating specific roles, like tutor roles and hobby roles, each user can cater their notifications to their own interests.
![Ping Roles Sample](/pingroles.png)

I also indirectly overrided Discord's @everyone by creating an **opt-in @everyone**, which involved disabling @everyone for users and instead creating a reaction role to use in place of @everyone. This is useful for those who mute general notifications due to fast server activity, but are also okay being summoned for conversations, gaming, calls, etc.
![Opt-In @everyone Sample](/softeveryone.png)

To invite new members but also respect the privacy of older members, I implemented a **role hierarchy** that allows for a split server design with both shared and private channels implemented by roles.
![Role Hierarchy Sample](/hierarchy.png)
Initially, intended access broke due to setting channel permissions individually. By leaving most channel permissions neutral and setting default permissions through roles, I fixed the issue while simultaneously making it easier to keep track of permissions.

Due to Orbis Civitas' small scale, I implemented "rooms," or **custom categories and channels** specifc to each member. By taking advantage of role hierarchies, I made it so members could edit certain non-destructive parts of their own categories and channels. 
![Custom Categories Sample](/custom_2.png)

This is not a scalable feature, and should not be implemented without trust in users. This could possibly be a "ranked" feature in larger servers, which could involve leveling up (usually judged by server activity) to gain reputation and unlock custom spaces. However, this will contribute to channel bloat.

In fact, I experienced channel bloat due to having multiple custom categories. My solution was to combine categories with less than 3 channels into a single category called the "Residence Hall."
![Residence Hall Sample](/custom.png)

To note, I **reduce channel bloat** by regularly monitoring channel use for the whole server and also taking advantage of a **feedback/request channel** to discuss possible changes. The server undergoes regular purging of inactive channels. I have also reduced bloat in the past by implementing more role hierarchies to create opt-in channels.
![Feedback Channel Sample](/feedback.png)

To reduce channel bloat, I considered condensing categories into **forum channels**. A media forum channel could branch videos into specific threads (funny, educational, wholesome) while taking up the space of only one channel. I wanted to **test the feature** before making a change, so I created a separate duplicate channel that I kept available for 3 days so users could experience the possible structure change. After recieving negative feedback, I decided to not undergo the change.




