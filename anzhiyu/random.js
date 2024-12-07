var posts=["2024/08/09/hello-world/","2024/08/23/关于我用-Hexo-GitHub-Pages-建了个新博客……/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };