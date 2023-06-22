const express = require('express');
const app = express();

const quotes = [
  { "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.", "author": "Nelson Mandela" },
  { "text": "The way to get started is to quit talking and begin doing.", "author": "Walt Disney" },
  { "text": "Your time is limited, don't waste it living someone else's life.", "author": "Steve Jobs" },
  { "text": "If life were predictable it would cease to be life, and be without flavor.", "author": "Eleanor Roosevelt" },
  { "text": "The greatest wealth is to live content with little.", "author": "Plato" },
  { "text": "The only way to do great work is to love what you do.", "author": "Steve Jobs" },
  { "text": "In the end, it's not the years in your life that count. It's the life in your years.", "author": "Abraham Lincoln" },
  { "text": "Life is either a daring adventure or nothing at all.", "author": "Helen Keller" },
  { "text": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt" },
  { "text": "You miss 100% of the shots you don't take.", "author": "Wayne Gretzky" },
  { "text": "The only person you are destined to become is the person you decide to be.", "author": "Ralph Waldo Emerson" },
  { "text": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius" },
  { "text": "Believe you can and you're halfway there.", "author": "Theodore Roosevelt" },
  { "text": "The best way to predict the future is to create it.", "author": "Peter Drucker" },
  { "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill" },
  { "text": "Do not wait for opportunity. Create it.", "author": "George Bernard Shaw" },
  { "text": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt" },
  { "text": "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.", "author": "Mark Zuckerberg" },
  { "text": "If you want to achieve greatness stop asking for permission.", "author": "Anonymous" },
  { "text": "You must be the change you wish to see in the world.", "author": "Mahatma Gandhi" },
];

const dialogs = [
  { "text": "Zindagi jeene ke do hi tarike hote hai ... ek jo ho raha hai hone do, bardaasht karte jao ... ya phir jimmedari uthao usse badalne ki.", "movie": "Zindagi Na Milegi Dobara" },
  { "text": "Kisi ko mukammal jahan nahi milta, kisi ko zameen toh kisi ko aasmaan nahi milta ... zameen aur aasmaan dono ko sirf zameen pe rehne wale hi chuna jata hai.", "movie": "Rockstar" },
  { "text": "Koshish karne walon ki kabhi haar nahi hoti.", "movie": "Lagaan" },
  { "text": "Asli power dil mein hoti hai.", "movie": "Dilwale" },
  { "text": "Tumhare paas kya hai? Mere paas maa hai!", "movie": "Taare Zameen Par" },
  { "text": "Haar kar jeetne wale ko baazigar kehte hai.", "movie": "Baazigar" },
  { "text": "Life mein kuch bhi ho kabhi pyaar nahi karna, ho jaye toh voh ishq nahi zindagi ban jati hai.", "movie": "Yeh Jawaani Hai Deewani" },
  { "text": "Kisi bhi bade kaam ko chhota banane ki himmat rakhne wale hi insaan hai.", "movie": "Kai Po Che!" },
  { "text": "Zindagi lambi nahi, badi honi chahiye.", "movie": "Guru" },
  { "text": "Duniya mein do tarah ke log hote hai ... winners and losers ... lekin zindagi har loser ko woh ek mauka zaroor deti hai ... jis mein voh winner ban sakta hai.", "movie": "Dil Bole Hadippa!" },
  { "text": "Kamyabi aur failure pe jor mat do ... sirf koshish karo ki woh kamyaabi aur failure tumse jude na.", "movie": "Rocket Singh: Salesman of the Year" },
  { "text": "Koshish karne walon ki haar nahi hoti ... sirf thode waqt aur thodi der ki hi toh baat hai.", "movie": "Golmaal 3" },
  { "text": "Kuch bhi ho sakta hai, agar tum sahi raste pe chaloge.", "movie": "Race" },
  { "text": "Kabhi kabhi jeetne ke liye kuch haarna bhi padta hai ... aur haar kar jeetne wale ko baazigar kehte hai.", "movie": "Baazigar" },
  { "text": "Koshish karne waale ki haar nahi hoti, koshish karne waale ki kabhi haar nahi hoti aur joh kabhi nahi haartha woh kya jeet ta hai?", "movie": "Mujhse Shaadi Karogi" },
  { "text": "Success ke baad ka plan sabke paas hai ... lekin agar galti se fail ho gaye ... toh failure se kaise deal karna hai ... koi baat hi nahi karna chahta.", "movie": "3 Idiots" },
  { "text": "Zindagi mein agar kuch banna ho, kuch haasil karna ho, kuch jeetna ho ... toh hamesha dil ki suno.", "movie": "Guru" },
  { "text": "Kamyabi aur failure ke beech jo line hai na, woh line hoti hai ... risk ki line.", "movie": "Risk" },
  { "text": "Jitna bhi try karo, life mein kuch na kuch toh chhootega hi ... isliye jahan ho wahin ka maza lete hain.", "movie": "Yeh Jawaani Hai Deewani" },
  { "text": "Duniya mein do tarah ke log hote hai. Winners aur Losers. Lekin zindagi har loser ko woh ek mauka zaroor deti hai, jis mein woh winner ban sakta hai.", "movie": "Dil Bole Hadippa!" },
]

app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
});

app.get('/api/dialog', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomDialogs = dialogs[randomIndex];
  res.json(randomDialogs);
});

app.listen(3000, () => {
  console.log('API server is running on port 3000');
});
