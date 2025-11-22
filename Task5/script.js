function getPosts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["Post 1", "Post 2", "Post 3"]);
      }, 2000);
    });
  }

  async function loadPosts() {
    document.getElementById("msg").innerText = "Loading posts...";

    const data = await getPosts();

    document.getElementById("msg").innerText = "";
    document.getElementById("posts").innerHTML =
      data.map(p => `<li>${p}</li>`).join("");
  }