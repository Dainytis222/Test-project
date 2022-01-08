const postsWrapper = document.querySelector(`.post`);
let postHeader = document.querySelector(`.postHeader`);
// let postText = document.querySelector(`.postText`);
let postAuthor = document.querySelector(`.postAuthor`);
let commentHeader = document.querySelector(`.commentHeader`);
let commentText = document.querySelector(`.commentText`);
let commentatorEmail = document.querySelector(`.commentatorEmail`);

postHeader.innerHTML = `Apie bites`;

fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  .then((response) => response.json())
  .then((posts) => {
    posts.map((post) => {
      //   postText.textContent = post.body;
      let postText = document.createElement("p");
      postText.textContent = post.body;

      postHeader.textContent = post.title;
      postsWrapper.append(postText);
      console.log(post.body);

      fetch("https://jsonplaceholder.typicode.com/users/" + post.userId)
        .then((res) => res.json())
        .then((user) => {
          postAuthor.textContent = user.name;
          console.log(user.name);
        });

      fetch(
        "https://jsonplaceholder.typicode.com/posts/" + post.id + "/comments"
      )
        .then((res) => res.json())
        .then((comments) => {
          comments.map((comment) => {
            commentText.textContent = comment.body;
            commentHeader.textContent = comment.name;
            commentatorEmail.textContent = comment.email;
          });
        });
    });
  });
