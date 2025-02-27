const fakeRequest = new Promise((resolve) => {
  // Tip: Create static data
  const posts = [
    {
      id: "a47c439a-e3fa-4d76-9527-e4f10a218f32",
      user: {
        name: "Cosmin Amariei",
        avatarUrl:
          "https://images.pexels.com/photos/30915190/pexels-photo-30915190/free-photo-of-stylish-portrait-of-a-young-man-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      imageUrl:
        "https://images.pexels.com/photos/30915191/pexels-photo-30915191/free-photo-of-young-man-on-ladder-in-outdoor-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 200,
      isLiked: false,
    },
    {
      id: "aa5f17fc-dcc7-4655-9427-bfee1ffdd6bd",
      user: {
        name: "Marcus Weberly",
        avatarUrl:
          "https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      imageUrl:
        "https://images.pexels.com/photos/4054069/pexels-photo-4054069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      likes: 200,
      isLiked: false,
    },
  ];
  return setTimeout(() => resolve(posts), 1000);
});

const Service = {
  post: {
    getAll: async () => {
      try {
        const data = await fakeRequest;
        return {
          data: data,
          hasError: false,
          message: "The posts were fetched.",
        };
      } catch (error) {
        console.error("[Service]: Couldn't fetch the posts.", error.message);
        return {
          data: [],
          hasError: true,
          message: "Oops! Something went wrong!",
        };
      }
    },
  },
};

// Tip: The funciton is responsible to load the ui (html / css + static data)
const loadUi = async (response) => {
  // Tip: Select the elements that will be used to manipulate the DOM
  const bodyElement = document.getElementsByTagName("body").item(0);
  const postsElement = document
    .getElementsByClassName("container-posts")
    .item(0);

  if (response.hasError && response.data.length === 0) {
    // Tip: Show an error message on the screen
    const messageElement = document.createElement("p");
    messageElement.innerText = response.message;
    bodyElement.prepend(messageElement);
  } else {
    // Tip: The response.data is an array of objects
    response.data.forEach((post) => {
      const containerElement = document.createElement("div");
      containerElement.setAttribute("class", "container-posts__card");

      const headerElement = document.createElement("div");
      headerElement.setAttribute("class", "card__header");

      const avatarImgElement = document.createElement("img");
      avatarImgElement.setAttribute("src", post.user.avatarUrl);
      avatarImgElement.setAttribute("alt", `Avatar of - ${post.user.name}`);
      const nameElement = document.createElement("p");
      nameElement.innerText = post.user.name;

      headerElement.append(avatarImgElement, nameElement);

      const contentElement = document.createElement("div");
      contentElement.setAttribute("class", "card__content");
      const contentImgElement = document.createElement("img");
      contentImgElement.setAttribute("src", post.imageUrl);
      contentImgElement.setAttribute("alt", "Post description");

      contentElement.append(contentImgElement);

      const footerElement = document.createElement("div");
      footerElement.setAttribute("class", "card__footer");
      const buttonElement = document.createElement("button");
      buttonElement.innerText = "Like";
      buttonElement.setAttribute("class", "footer__button");
      const likesElement = document.createElement("p");
      likesElement.setAttribute("class", "footer__likes");
      likesElement.innerText = post.likes;

      footerElement.append(buttonElement, likesElement);

      // Tip: Add the header, content and footer to the card parent
      containerElement.append(headerElement, contentElement, footerElement);

      // Tip: Add the card to the parent div ("container-posts")
      postsElement.appendChild(containerElement);
    });
  }
};

const setupUiEvents = (response) => {
  const buttonElements = document.getElementsByClassName("footer__button");
  const likeElements = document.getElementsByClassName("footer__likes");

  console.log(buttonElements, likeElements);

  for (let i = 0; i < buttonElements.length; i++) {
    buttonElements[i].onclick = () => {
      const currentLikes = Number(likeElements[i].innerText);
      if (buttonElements[i].getAttribute("data-is-liked") === "1") {
        // Tip: Do a request to dislike
        // await fakeDislike();
        // Tip: Update the button and likes text
        likeElements[i].innerText = currentLikes - 1;
        buttonElements[i].innerText = "Like";
        buttonElements[i].style.background = "#222222";
        buttonElements[i].setAttribute("data-is-liked", "0");
      } else {
        // Tip: Do a request to like
        // await fakeLike();
        // Tip: Update the button and likes text
        likeElements[i].innerText = currentLikes + 1;
        buttonElements[i].innerText = "Unlike";
        buttonElements[i].style.background = "#555555";
        buttonElements[i].setAttribute("data-is-liked", "1");
      }
    };
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  // Tip: Fetch the data that will be displayed on the screen
  const response = await Service.post.getAll();

  console.log(response);

  // Tip: Call the loadUi function to paint the posts
  await loadUi(response);

  // Tip: Add events tot the like buttons
  setupUiEvents(response);
});
