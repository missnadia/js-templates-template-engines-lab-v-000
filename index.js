function createPost() {
  var postForm = document.getElementById("post-form");
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  var postTitle = document.getElementById("postTitle");
  var post = document.getElementById("postContent").innerHTML;
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  var commenterName = document.getElementById("commenterName").value;
  var commentText = document.getElementById("commentText").value;
  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate);
  var commentsDiv = document.getElementById("comments");
  var templateHTML = templateFn({ "comment": comment, "commenter": commenter });
  commentsDiv.innerHTML += templateHTML;
}
