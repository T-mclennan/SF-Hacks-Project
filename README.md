Hackathon project from the weekend 3/5/2021-3/7/2021:

Designed, coded and deployed over the course of 1-2 days, I ran out of time before I could finish the UI though! 

deployment at: https://colab-sfhacks-firebase.firebaseapp.com/


___________________________________________________________

## Inspiration: 
Our goal was to create a platform that energizes the CS student community and encourages collaboration and dialog.
The path to becoming a professional programmer can be overwhelming and intimidating at first. Sharing this process with other people makes more enjoyable, and better prepares students for working with others in a professional environments. Our project strives to connect people who can help make the learning process a mutually enjoyable one on the road to becoming better developers. 
 
## What it does:
A model use case is someone who has a great idea for a project, but is seeking help with certain aspects of the implementation. Likewise someone with a specific skillset might be interested in finding a project where those skills could go to use.  This application acts as a bulletin board where anyone interested can share goals, ideas, resources, and make connections. Other use cases could include forming study groups, finding people to practice technical and behavioral interviews, exchanging programming books, finding people to do small paid gigs.  we aimed to create something like a miniature, casual craigslist but centered on the beginner programming community. 

The core functionality consists of either composing or browsing posts. Posts themselves are very static and have low interactivity, but are sortable and by the person browsing based on categories and other information provided. We think of a Post as being almost like an ad in the paper, or a message left on a post-it note. We aim to keep the platform very simple, but hope to have more styling than a standard message board. The main browsing page would have abbreviated version of the posts that would have some colored tagging or picture denoting its category and some high level description of content. When clicked this would navigate to a full page with all the information the user provided displayed in full. 

The application is striving to be stateless as much as possible, and it leaves the methods of communication up the users. That being said if we do use Notivize to offer functionality to users through email. If we were able to finish and had more time, we would use the Auth feature in firebase to allow users to log in with google, and have the ability to comment below a post. When browsing, filters at the top of the page would give the ability to organize which are shown based on categories like 'projects', 'studying', 'mentorship, and subcategories like 'backend dev wanted', or 'seeking designer role'. There are 6 categories and about 6 subcategories for each that populate the dropdown controls. We aimed to create something that was simple with intuitive UI, that did one thing but did it well. 

## How we built it:
The application is built in React and served from Firebase. Material UI and Formik for inputs and form controls. Our data is stored in firestore, and accessed directly with queries using the firebase react library. We used create-react-app so this is an SPA, and internal routing is performed using react-router-dom and the history object. Notivize provides core functionality in email users after they post to provide links for editing / deleting.

The browse page uses filters to compose a database query in the useLayoutEffect hook, and the resulting list of posts are mapped over and conditionally rendered as display cards. The onClick event for the card routes the user to an endpoint that will render the full post page and also contains a query string identifier for the card. 

Users can come to the full post page a number of ways, such as clicking a card, routing to their post after submitting, viewing a page they published from an email link, etc. Because of this we include the needed search id as a URL parameter that can be easily parsed out with a react-router-dom hook. Again, we fetch from the database during the pre-render lifecycle methods and render the full content of the post on the page. We added the ReactMarkdown library to turn the main content paragraph from a string into styled JSX, using markdown syntax. Unfortunately we never got to properly style the page, but this is a high priority piece to finish after the fact. 
 
The form used in the Create Page is also re-used on the Edit Page, the only difference is that it's pre-populated with values from the database, is given a prop that changes it's submit behavior to 'UPDATE' from 'POST', and doesn't trigger the sendEmail function on submit. This is crucial to avoid getting duplicates in the database every time someone edited. After submitting the user is routed to the full post page of that post in question. 

The delete route simply deletes from the database, informs the user of that, and then offers to return to the browse page.

The Landing page and future pages were going to be built using gentle gradient backgrounds, SVG shape dividers, picture assets from upslash and undraw. The site is fully responsive using CSS media queries, grid, flexbox. We added subtle animations and glassification to the mobile sidebar, and glassification was coded for not deployed yet for use cards and form components depending on what the final background will one day be. 

We also designed an about page that would have an FAQ and how to use, and a contact us page with an email form for contacting us, as well as personal blurbs about Harsh and I. Ultimately we didn't get a lot of the later content done, but we did get the app deployed, got a proper dataflow, got the email and post/view/delete portions working. 

The styling for pages was made using gradientmagic.com, unsplash.com, and undraw.com,  and a generator for curved SVG dividers. I want to have a strip at the top of each Card that is browsed and be colored by category, with text relating to the subCategory. We were just about to style the browsing page when we ran out of time. 

## Challenges we ran into:
We really got stuck on some of the cloud infrastructure, and just flat ran out of time. 
My teammate built a Java server with Spring to serve the static app and provide database access, but we struggled until the last minute on configuring it on cloud platforms. Falling behind stressed us out and pushed us right to the wire for submitting, which turns out was a much bigger process than we anticipated. We tried to record a video with 5 minutes left and did a pretty poor job of showing the app off. I was so flustered trying to get as much done as possible, I forgot to switch the database back from test to production. So during the demo when I submitted it was unresponsive, via going to the wrong database. We were really fatigued by the end, and logged in more hours straight on this than I ever have before. So much debugging. 

## Accomplishments that I'm proud of
We built maybe 80% of the functionality, and like 30% of the styling. Considering how difficult debugging some of these issues was, we both feel very accomplished with what we could create in that stretch. I'm proud of the landing page, as someone who is just learning the ropes I'm really proud of how that turned out. I'm proud of Harsh for doing a great job of building the server, connecting java and firestore, and writing all the notivize logic. He was a great sport considering we got hung up on Devops and much of his effort never got successfully integrated in. We worked hard and ended with something at least, even if it wasn't what we planned.

## What I learned
This was my second hackathon and Harsh's first, and we definitely have a much better idea of how to prepare the next time. We will certainly get familiar with the technologies ahead of time, many of our difficulties came from trying tools we had no exposure to.  Submitting early also seems to be key. We were stressed for time because so many things were unfinished, but the neglected the submission process and likely paid a price. We also learned to keep the functionality simple and focus more on the styling. 

We really enjoyed the workshops and learned a fair amount in those too. We learned a lot about GCP, firebase, firestore, Azure, and cloud computing in general. Those were fairly new concepts to both of us. Looking forward to participating and learning from more hackathons in the future!

## What's next for CoLabs
The next step would be finishing the GUI for most of the pages, finishing the browse section, ironing out the kinks with the notivize API, finishing up the remaining crud functionality with the database. I'd love to some day have DMs and Comments too, and give the ability for users to have profiles, include media like pictures and videos in the posts, etc. 
Thanks for the weekend! 
