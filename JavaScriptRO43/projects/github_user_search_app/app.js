const API = {
  getUserByName: async (name) => {
    const url = `https://api.github.com/users/${name}`;
    console.log(url); // api prefix + the text written by the user

    // Make the HTTP request with GET method to obtain data
    const response = await fetch(url, { method: "GET" });
    console.log(response);

    // Convert the data in ReadableStream format to JSON
    const body = await response.json();
    console.log(body);

    // Return the data received from the server
    return body || null;
  },
};

const updateUI = (tags, user) => {
  console.log(tags);
  tags.image.setAttribute("src", user.avatar_url);
  tags.name.innerText = user.name;

  const formatedCreatedAt = new Date(user.created_at).toLocaleDateString(
    "en-en",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
  tags.created.innerText = `Joined ${formatedCreatedAt}`;
  tags.biography.innerText = user.bio || "This profile has no bio";
  tags.repositories.innerText = user.public_repos;
  tags.followers.innerText = user.followers;
  tags.following.innerText = user.following;
  tags.location.innerText = user.location || "Not Available";
  tags.twitter.innerText = user.twitter_username || "Not Available";
  tags.website.innerText = user.blog || "Not Available";
  tags.website.setAttribute(
    "href",
    user.blog
      ? user.blog.includes("http")
        ? user.blog
        : `https://${user.blog}`
      : "#"
  );
  tags.website.style.opacity = user.blog ? 1 : 0.7;
  tags.company.innerText = user.company || "Not Available";
};

const handleSearch = async (event) => {
  console.log(event);

  // Prevent the browser to refresh the page
  event.preventDefault();

  // Extract the values from the event
  const searchValue = event.target.elements.namedItem("search").value;
  console.log(searchValue);

  // Send the values to the server to receive data
  const user = await API.getUserByName(searchValue);

  // Update the UI elements to display the data available in user variable
  const tags = getAllTags();
  updateUI(tags, user);
};

const getAllTags = () => {
  const form = document.querySelector("form");

  const image = document.querySelector(".profile__image img");
  const name = document.querySelector(".profile__bio__header h1");
  const created = document.querySelector(".profile__bio__header p");
  const username = document.querySelector(".profile__bio__header__name");
  const biography = document.querySelector(
    ".profile__bio__header__description"
  );

  const repositories = document.querySelector(
    ".profile__metrics__card__repositories"
  );
  const followers = document.querySelector(
    ".profile__metrics__card__followers"
  );
  const following = document.querySelector(
    ".profile__metrics__card__following"
  );

  const location = document.querySelector(".profile__details__card__location");
  const twitter = document.querySelector(".profile__details__card__twitter");
  const website = document.querySelector(".profile__details__card__website");
  const company = document.querySelector(".profile__details__card__company");

  return {
    form,
    image,
    name,
    created,
    username,
    biography,
    repositories,
    followers,
    following,
    location,
    twitter,
    website,
    company,
  };
};

const onReady = () => {
  console.log("DOM was loaded.");

  // Find and select all the tags
  const tags = getAllTags();

  tags.form.addEventListener("submit", handleSearch);
  console.log(tags);
};

if (document.readyState !== "loading") {
  onReady();
} else {
  document.addEventListener("DOMContentLoaded", onReady);
}
