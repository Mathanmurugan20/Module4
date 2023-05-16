// Example JavaScript code for fetching and displaying posts

// Simulating posts data

const posts = [

  {

    id: 1,

    title: "Hello World",

    content: "This is my first post on the social media page!"

  },

  {

    id: 2,

    title: "Exciting News",

    content: "Just received some exciting news. Stay tuned for updates!"

  }

];

// Function to display posts

function displayPosts() {

  const postsContainer = document.getElementById('posts');

  

  posts.forEach(post => {

    const postElement = document.createElement('div');

    postElement.classList.add('post');

    

    const titleElement = document.createElement('h2');

    titleElement.textContent = post.title;

    

    const contentElement = document.createElement('p');

    contentElement.textContent = post.content;

    

    postElement.appendChild(titleElement);

    postElement.appendChild(contentElement);

    

    postsContainer.appendChild(postElement);

  });

}

// Call the displayPosts function when the page loads

window.addEventListener('load', displayPosts);
