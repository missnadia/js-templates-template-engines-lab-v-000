function createPost() {
  var postForm = document.getElementById("post-form");
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  var postTitle = document.getElementById("postTitle");
  var post = document.getElementById("postContent").innerHTML;
  document.getElementsByTagName("main")[0].innerHTML += pageTemplate();

  var blogSection = postTemplate({ 'title': postTitle, 'content': post });
  var commentsDiv = commentsTemplate();
  var postContent = document.getElementById("post");

  postContent.innerHTML = blogSection;
  postContent.getElementsByTagName("footer")[0].innerHTML = commentsDiv;
  
}

function postComment() {
  var commentTemplate = _.template(document.getElementById("comment-template").innerHTML);
  var commenterName = document.getElementById("commenterName").value;
  var comment = document.getElementById("commentText").value;
  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += commentsDiv({ "comment": comment, "commenter": commenter });
}
