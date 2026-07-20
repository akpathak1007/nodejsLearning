/** Async control flow to solve the problem of callback hell will functions */
/** I want to to fetch each user's post, then each post's comment */
/** The issue in this example we are using for loop which which calling call request concurrently */
/** the solution for this is to not to use for loop insted use recursive method
    - fetch users get array of users recursive on users
    - in process user recursive function get request for post and use that post array and process recursively
    - each post will call get request api for comments. */

import https from "https";

const users = "https://jsonplaceholder.typicode.com/users";
const comments = "https://jsonplaceholder.typicode.com/comments?postId=";
const posts = "https://jsonplaceholder.typicode.com/posts?userId=";

getUsers(users);

function makeRequest(url, cb) {
  let body = "";
  https
    .get(url, (res) => {
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        const result = JSON.parse(body);
        cb(null, result);
      });
    })
    .on("error", (error) => {
      cb(error);
    });
}

function processUsers(users, index, data, cb) {
  //  console.log("PROCESS USERS ARGUMENTS", arguments);
  try {
    const temp = users[index];
    const user = {
      id: temp.id,
      name: temp.name,
      email: temp.email,
    };
    if (index < users.length - 1) {
      // fetching posts
      makeRequest(posts + temp.id, (err, posts) => {
        //        console.log(posts);
        processPosts(posts, 0, [], (finalPosts) => {
          data.push({
            user,
            posts: finalPosts,
          });
          return processUsers(users, index + 1, data, cb);
        });
      });
    } else {
      //      console.log("@@@@@@", index, users.length);
      return cb({ count: data.length, users: data });
    }
    //  console.log("#####", data);
  } catch (err) {
    console.log(err);
    cb(err);
  }
}
function processPosts(posts, index, data, cb) {
  // console.log(posts);
  const temp = posts[index];
  const post = {
    userId: temp.userId,
    id: temp.id,
    title: temp.title?.slice(0, 30),
  };

  // fetching comment for each post
  const url = comments + temp.id;
  console.log("URL", url);
  makeRequest(url, (error, finalComments) => {
    finalComments = finalComments.map((i) => {
      return {
        postId: i.postId,
        name: i.name.slice(0, 10),
        comment: i.body.slice(0, 20) + "...",
      };
    });
    post.comment = finalComments;
    data.push(post);
    if (index < posts.length - 1) {
      return processPosts(posts, index + 1, data, cb);
    } else cb({ count: data.length, posts: data });

    processComments(comments, 0, [], (finalComments) => {});
  });
}
function processComments(comments, index, data, cb) {}

function getUsers(url) {
  makeRequest(users, (err, result) => {
    processUsers(result, 0, [], (users) => {
      console.log("USERS hello", JSON.stringify(users));
    });
  });
