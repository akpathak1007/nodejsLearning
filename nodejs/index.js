import http from "https";

function getRequest(url, cb) {
  http
    .get(url, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        cb(null, JSON.parse(data));
      });
    })
    .on("error", (err) => {
      cb(err, null);
    });
}

// Process comments of a single post
function processComments(comments, index, done) {
  if (index >= comments.length) {
    return done();
  }

  const comment = comments[index];

  console.log("COMMENT:", comment.id);

  // Move to next comment
  processComments(comments, index + 1, done);
}

// Process posts of a single user
function processPosts(posts, index, done) {
  if (index >= posts.length) {
    return done();
  }

  const post = posts[index];

  console.log("POST:", post.id);

  const commentUrl =
    "https://jsonplaceholder.typicode.com/comments?postId=" + post.id;

  // Fetch comments for current post
  getRequest(commentUrl, (err, comments) => {
    if (err) {
      return done(err);
    }

    console.log("COMMENTS FOR POST:", post.id, comments.length);

    // Process comments before moving to next post
    processComments(comments, 0, () => {
      // Move to next post
      processPosts(posts, index + 1, done);
    });
  });
}

// Process users one by one
function processUsers(users, index, done) {
  if (index >= users.length) {
    return done();
  }

  const user = users[index];

  console.log("USER:", user.id);

  const postUrl =
    "https://jsonplaceholder.typicode.com/posts?userId=" + user.id;

  // Fetch user's posts
  getRequest(postUrl, (err, posts) => {
    if (err) {
      return done(err);
    }

    console.log("POSTS FOR USER:", user.id, posts.length);

    // Process posts before moving to next user
    processPosts(posts, 0, () => {
      processUsers(users, index + 1, done);
    });
  });
}

console.log("start");

getRequest("https://jsonplaceholder.typicode.com/users", (err, users) => {
  if (err) {
    console.log(err);
    return;
  }

  processUsers(users, 0, () => {
    console.log("All users, posts and comments completed");
  });
});

console.log("end");
