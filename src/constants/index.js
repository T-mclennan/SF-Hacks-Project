export const TextLoopValues = [
      "CS Students",
      "Bootcamp Grads", 
      "Compassionate Mentors",
      "Hobby Coders",
      "Bored Designers", 
      "Curious Minds", 
      "Leetcode Fanatics",
      "Aspiring Developers", 
    ];

export const colors = {
  projects: {light: '#00B4DB', dark: '#0083B0'}, //blue
  people: {light: '#a71d31', dark: '#3f0d12'}, //red
  paid: {light: '#FFD200', dark: '#F7971E'}, //yellow
  mentorship: {light: '#ed8608', dark: '#fc4a1a'}, //orange
  study: {light: '#03c44d', dark: '#11998e'}, //green
  misc: {light: 'rgb(162, 78, 241)', dark: 'rgb(80, 18, 138)'} //purple
}

export const aboutContent = [
  {
    question: `What is CoLabs and how is it used?`, 
    content: `CoLabs is a project from the SFHacks hackathon 03/2021. It aims to create a bulletin
    board for students and designers to connect and collaborate on projects. Much like a traditional corkboard
    it's used by browsing the posts left by other contributors, or by creating a post yourself!`
  },
  {
    question: `How can I contact someone I find through this service?`, 
    content: `We provide a platform for communicating to your peers, but the means of contacting the other party is left up to you. 
    Each published post should include a contact method as a required field, so an available method should be clearly marked. Feel free to reach out to your peer!`
  },
  {
    question: `Do I have to sign up to use the product?`, 
    content: `CoLabs is open for anyone to use, no account is needed to publush or read posts. We designed the application to also have a sign-in functionality with goolge through firebase, which will allow for a user to track their activity and contribute comments to the posts of others.`
  },
  {
    question: `How can I edit and delete my posts?`, 
    content: `We decided on an open design that does not need users to authenticate as a prerequisite for use of CoLabs services. To compensate for this we added a mechanism for a user to control their posts to the publishing step. When you publish your post, CoLabs will send an Email to the provided address which will contain links to Edit or Delete that post. No signin is necessary.`
  },
]