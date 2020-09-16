const data = [
  {
    social_network: "facebook",
    account_name: "@victor",
    followers: 1987,
    today: {
      followers: 12,
      views: 87,
      likes: 52,
    },
    icon: "assets/icon-facebook.svg",
  },
  {
    social_network: "twitter",
    account_name: "@victor",
    followers: 1044,
    today: {
      followers: 99,
      retweets: 117,
      likes: 507,
    },
    icon: "../assets/icon-twitter.svg",
  },
  {
    social_network: "instagram",
    account_name: "@victor",
    followers: 11,
    today: {
      followers: 1099,
      views: 52,
      likes: 5462,
    },
    icon: "../assets/icon-instagram.svg",
  },
  {
    social_network: "youtube",
    account_name: "victor",
    followers: 8239,
    today: {
      followers: 144,
      views: 1407,
      likes: 107,
    },
    icon: "../assets/icon-youtube.svg",
  },
];
const test = data.map((data) => ` dude: ${data.account_name}`);
console.log(`${test}`);
/*let html = "";
html += data[0].facebook.account_name;
document.getElementById("account_name").innerHTML =
  data[0].facebook.account_name;
*/
const main = document.getElementById("stats__main");

const content = data.map(
  (data) =>
    `<article class="card__stats ${data.social_network}">
        <div class="stats__header">
            <img class="stats__icon" src="${data.icon}" alt="social network icon" />
            <span class="stats__account">${data.account_name}</span>
        </div>
        <span class="stats__total">${data.followers}</span>
        <span class="stats__description">followers</span>
        <div class="stats__today">
            <img class="stats__icon" src="assets/icon-up.svg" alt="up icon" />
            <span class="text">${data.today.followers} today</span>
        </div>
    </article>`
);
main.innerHTML += content.join("");
console.log(content.join(""));
