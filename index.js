function createPost() {
  var postForm = document.getElementById("post-form");
  var pageTemplate = document.getElementById("page-template").innerHTML;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var postTitle = document.getElementById("postTitle");
  var postContent = document.getElementById("postContent").innerHTML;
}

function postComment() {
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commenterText").value;
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate);
  var commentsDiv = document.getElementById("comments");
  var templateHTML = templateFn({ "comment": comment, "commenter": commenter });
  commentsDiv.innerHTML += templateHTML;
}
