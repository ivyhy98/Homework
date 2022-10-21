let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

//Part 1
const mainTitleEl = document.querySelector('#main-title');
mainTitleEl.textContent = "Hi, I'm Dom. Family > Everything";

//Part 2
const bodyEl = document.querySelector('body');
bodyEl.style.backgroundColor = '#b44010';

//Part 3
const favoriteThingsEl = document.querySelector('#favorite-things');
favoriteThingsEl.removeChild(favoriteThingsEl.lastElementChild);

//Part 4
const specialEl = document.querySelectorAll('.special-title');

specialEl.forEach((element)=>{
  element.style.fontSize = '2rem';
})

//Part 5
const pastEl = document.querySelector('#past-races');
pastEl.removeChild(pastEl.lastElementChild);

//===== CREATING NEW DOM ELEMENTS =====
//Part 6
const newLi = document.createElement('li');
newLi.textContent = 'AZERBAIJAN';
pastEl.append(newLi);

//Part 7
const newBlog = document.createElement('div');
newBlog.classList.add('blog-post');
newBlog.classList.add('purple');

const mainEl = document.querySelector('.main');
mainEl.append(newBlog);

const headerBlog = document.createElement('h1');
headerBlog.textContent = 'AZERBAIJAN';
newBlog.append(headerBlog);

const pBlog = document.createElement('p');
pBlog.textContent = 'I COMPLETED A TOP SECRET MISSION HERE!';
newBlog.append(pBlog);

//===== EVENT HANDLERS =====
//Part 8
const randomQuote = function() {
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};

const quoteT = document.querySelector('#quote-title');

quoteT.addEventListener('click', randomQuote);

//Part 8
const blogPost = document.querySelectorAll('.blog-post');
blogPost.forEach((element)=>{
  element.addEventListener('mouseenter', (evt)=>{
      evt.preventDefault();
      evt.target.classList.toggle('purple');
      evt.target.classList.toggle('red');
  })

  element.addEventListener('mouseout', (evt)=>{
      evt.preventDefault();
      evt.target.classList.toggle('purple');
      evt.target.classList.toggle('red');
  })

})

