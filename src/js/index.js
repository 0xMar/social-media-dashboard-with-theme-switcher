const data = [
  {
    social_network: 'facebook',
    account_name: '@Vic',
    followers: 1987,
    today: {
      followers: 12,
      views: 87,
      likes: 52,
      likes_percentage: '2%',
      views_percentage: '3%',
    },
    icon: 'assets/icon-facebook.svg',
  },
  {
    social_network: 'twitter',
    account_name: '@Vic',
    followers: 1044,
    today: {
      followers: 99,
      retweets: 117,
      likes: 507,
      likes_percentage: '553%',
      retweets_percentage: '303%',
    },
    icon: 'assets/icon-twitter.svg',
  },
  {
    social_network: 'instagram',
    account_name: '@Vic',
    followers: 11,
    today: {
      followers: 1099,
      views: 52,
      likes: 5462,
      likes_percentage: '2257%',
      views_percentage: '1375%',
    },
    icon: 'assets/icon-instagram.svg',
  },
  {
    social_network: 'youtube',
    account_name: 'Vic',
    followers: 8239,
    today: {
      followers: 144,
      views: 1407,
      likes: 107,
      likes_percentage: '19%',
      views_percentage: '12%',
    },
    icon: 'assets/icon-youtube.svg',
  },
];

const data_icons = {
  icon_up: 'assets/icon-up.svg',
  icon_down: 'assets/icon-down.svg',
};

const main_content = document.getElementById('stats__main');

const main_card_content = data.map(
  (data) =>
    `<article class="card__stats ${data.social_network}">
        <div class="stats__header">
            <img class="stats__icon" src="${
              data.icon
            }" alt="social network icon" />
            <span class="stats__account">${data.account_name}</span>
        </div>
        <span class="stats__total">${data.followers}</span>
        <span class="stats__description">${
          data.social_network === 'youtube' ? 'subscribers' : 'followers'
        }</span>
        <div class="stats__today">
            <img class="stats__icon" src="${
              data.social_network === 'youtube'
                ? data_icons.icon_down
                : data_icons.icon_up
            }" alt="arrow icon" />
            <span class="text ${
              data.social_network === 'youtube' ? 'arrow--down' : 'arrow--up'
            }">${data.today.followers} today</span>
        </div>
    </article>`
);
main_content.innerHTML += main_card_content.join('');

const overview_content = document.getElementById('stats__overview');
const overview_card_content = data.map(
  (data) =>
    `<article class="card__stats" id="stats--overview">
        <span class="stats__description">${
          data.social_network === 'facebook'
            ? 'page views'
            : data.social_network === 'instagram'
            ? 'profile views'
            : data.social_network === 'youtube'
            ? 'total views'
            : 'retweets'
        }</span>
        <img class="stats__icon" src="${data.icon}" alt="social network icon" />
        <span class="stats__total">${
          data.today.views === undefined
            ? data.today.retweets
            : data.today.views
        }</span>
        <div class="stats__today">
           <img class="stats__icon" src="${
             data.social_network === 'youtube'
               ? data_icons.icon_down
               : data_icons.icon_up
           }" alt="arrow icon" />
           <span class="text ${
             data.social_network === 'youtube' ? 'arrow--down' : 'arrow--up'
           }">${
      data.today.views_percentage === undefined
        ? data.today.retweets_percentage
        : data.today.views_percentage
    }</span>
        </div>
     </article>
     <article class="card__stats" id="stats--overview">
        <span class="stats__description">Likes</span>
        <img class="stats__icon" src="${data.icon}" alt="social network icon" />
        <span class="stats__total">${data.today.likes}</span>
        <div class="stats__today">
           <img class="stats__icon" src="${
             data.social_network === 'youtube'
               ? data_icons.icon_down
               : data.today.likes === 52
               ? data_icons.icon_down
               : data_icons.icon_up
           }" alt="arrow icon" />
           <span class="text ${
             data.social_network === 'youtube'
               ? 'arrow--down'
               : data.today.likes === 52
               ? 'arrow--down'
               : 'arrow--up'
           }">${data.today.likes_percentage}</span>
        </div>
     </article>`
);

overview_content.innerHTML += overview_card_content.join('');

const checkbox = document.getElementById('checkbox');

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  checkbox.setAttribute('checked', true);
}

const theme_dark = document.getElementById('theme-dark');
const theme_light = document.getElementById('theme-light');

checkbox.addEventListener('change', function (event) {
  if (event.target.checked) {
    theme_light.href = 'styles/dark.css';
    checkbox.setAttribute('checked', false);
    theme_dark.href = 'styles/dark.css';
  } else {
    theme_light.href = 'styles/light.css';
    checkbox.setAttribute('checked', true);
    theme_dark.href = 'styles/light.css';
  }
});
