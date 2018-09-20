function createPost() {
  var postForm = document.getElementById("post-form");
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var postTitle = document.getElementById("postTitle");
  var post = document.getElementById("postContent").innerHTML;
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  var commenter = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate);
  var commentsDiv = document.getElementById("comments");
  var templateHTML = templateFn({ "comment": comment, "commenter": commenter });
  commentsDiv.innerHTML += templateHTML;
}
