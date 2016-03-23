var content = {
  unvo: {
    tab: {title: "Unvo", text: "anonymous friend convo with Node.js and Socket.io", color: "#7e57c2"},
    gif: "./assets/images/unvo.gif",
    text: "Unvo was my first full stack project, and I created it in order to gain experience with websockets. It's a chatroom in which groups can chat in private rooms with their friends, but each person's identity is anonymous. The idea is that you know the people in your room are your friends, but you don't know exactly who's saying what. The primary technologies I used in the site were Node.JS, Express, Socket.io, and PostgreSQL.",
    links: ["unvo.co", "http://www.unvo.co", "github.com/AraLawrence/unvo", "https://github.com/AraLawrence/unvo"]
  },
  lost: {
    tab: {title: "Get Lost", text: "404 redirects for fun with Django", color: "#FF1CC9"},
    gif: "./assets/images/get-lost.gif",
    text: "Get Lost is a Django app that redirects people to random 404 pages. It's primary technologies are Django, jQuery, Bower, Postgres, and SASS. When a user clicks the 'safely' button, the site randomly selects from one of the 500 most popular sites in the U.S., then appends a string to the url to draw a 404 error. Same with the 'dangerously' button (possibly NSFW), with the difference being it selects randomly from sites ranked 501-50000.",
    links: ["not-found.herokuapp.com", "https://not-found.herokuapp.com/", "github.com/AraLawrence/get_lost", "https://github.com/AraLawrence/get_lost"]
  },
  story: {
    tab: {title: "Story Engine", text: "storytelling engine powered by React and jQuery animations", color: "white"},
    gif: "./assets/images/story.gif",
    text: "Story Engine was the first site I created with React, and I continue to work on it. I intended it to be a site that helps a user tell a story publicly. As the user types the site responds to certain words and changes the display based on the word, such as turning the background grey on 'rain', or printing 'stress' several times across the top of the screen when the user types 'stress'. It is entirely frontend, and built using React, ES6, and jQuery animations.",
    links: ["aralawrence.github.io/story_engine", "http://aralawrence.github.io/story_engine", "github.com/AraLawrence/story_engine", "https://github.com/AraLawrence/story_engine"]
  },
  clowder: {
    tab: {title: "Clowder", text: "Rails/React multi location event tracker", color: "#911146;"},
    gif: "./assets/images/clowder.png",
    text: "Clowder is an app I worked on with a team of three other people at Facebook Seattle's Women Student Hackathon. It's an app intened to track multi location social events, like bar crawls or field trips, and allow people to remain updated on where their group is. We created it as a Rails webapp over 16 hours, and won 'Most Technical' for the project. In an effort to gain experience with React Native and Rails 5, I am now continuing to build it out as a React Native app, utilizing an api built from Rails 5.",
    links: ["coming soon(ish)", "https://github.com/AraLawrence/clowder", "github.com/AraLawrence/clowder", "https://github.com/AraLawrence/clowder"]
  }
};

module.exports = content;
