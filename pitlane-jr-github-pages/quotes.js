"use strict";
const dailyQuotes = [
  {
    "text": "Если ты больше не используешь существующий просвет, ты больше не гонщик.",
    "author": "Айртон Сенна",
    "url": "https://www.mclaren.com/racing/heritage/formula-1/drivers/ayrton-senna/10-defining-moments/"
  },
  {
    "text": "Нужно всегда стремиться быть лучшим, но никогда не верить, что ты уже лучший.",
    "author": "Хуан Мануэль Фанхио",
    "url": "https://www.formula1.com/en/latest/article/sunday-conversation-damon-hill-on-the-significance-of-his-maiden-gp-win.2q2vrsV6reg0CoOUywSMWc"
  },
  {
    "text": "Верь в себя и никогда не сдавайся.",
    "author": "Льюис Хэмилтон",
    "url": "https://www.fia.com/news/f1-lhamilton-its-been-strong-weekend-myself-and-team"
  },
  {
    "text": "Я считаю автогонки искусством.",
    "author": "Джим Кларк",
    "url": "https://www.formula1.com/en/latest/article/jim-clark-what-made-him-so-good.6DXkoAanL2yMIyYE8AsauQ"
  },
  {
    "text": "Жизнь измеряется достижениями, а не только годами.",
    "author": "Брюс Макларен",
    "url": "https://www.mclaren.com/racing/heritage/bruce-mclaren/"
  },
  {
    "text": "Я всегда чувствовал, что недостаточно хорош и должен работать над собой.",
    "author": "Михаэль Шумахер",
    "url": "https://www.formula1.com/en/latest/article/schumacher-on-his-most-emotional-title-win-his-most-respected-f1-rival-and.77OkI9AF7GCiSieao0ueyY"
  },
  {
    "text": "Я всегда старался слушать и учиться.",
    "author": "Себастьян Феттель",
    "url": "https://sebastianvettel.de/en/racing-archive/"
  },
  {
    "text": "Обычно свой стиль можно приспособить почти к чему угодно.",
    "author": "Ален Прост",
    "url": "https://www.formula1.com/en/latest/article/full-transcript-read-every-word-from-four-time-world-champion-alain-prosts.24IUj5h536Ih9IwT09FgjG"
  },
  {
    "text": "Я вовсе не сдался, конечно, но результаты всё равно не приходили.",
    "author": "Мика Хаккинен",
    "url": "https://www.mclaren.com/racing/heritage/formula-1/drivers/mika-hakkinen/mikas-american-dream/"
  },
  {
    "text": "Каждый раз, когда я прибавляю, я нахожу что-то ещё — снова и снова.",
    "author": "Айртон Сенна",
    "url": "https://www.formula1.com/en/information/drivers-hall-of-fame-ayrton-senna.FLD7ZtO0nUn7JzLEn5rOJ"
  },
  {
    "text": "Мечтай о невозможном и говори об этом так, чтобы оно стало реальностью.",
    "author": "Льюис Хэмилтон",
    "url": "https://www.formula1.com/en/latest/article/seventh-title-beyond-wildest-dreams-admits-hamilton-who-says-keeping.5IhtoOVVVFOi4LJKvWZ1z7.5IhtoOVVVFOi4LJKvWZ1z7"
  },
  {
    "text": "Никогда ещё не было гонщика, который выиграл бы все Гран-при.",
    "author": "Ронни Петерсон",
    "url": "https://www.formula1.com/en/latest/article/remembering-ronnie-peterson.4Qur1cvec08m2mqAgIuoQE"
  }
];
// One shared editorial day in Moscow; independent of browser timezone and DST.
function quoteDayIndex(date) {
  return Math.floor((date.getTime() + 3 * 60 * 60 * 1000) / 86400000);
}
function quoteForDate(date) {
  const index = quoteDayIndex(date);
  return dailyQuotes[((index % dailyQuotes.length) + dailyQuotes.length) % dailyQuotes.length];
}
let shownDay;
function updateDailyQuote() {
  const date = new Date();
  const day = quoteDayIndex(date);
  if (day === shownDay) return;
  const text = document.getElementById("quote-text");
  const author = document.getElementById("quote-author");
  if (!text || !author) return;
  const quote = quoteForDate(date);
  text.textContent = "«" + quote.text + "»";
  author.textContent = quote.author;
  author.href = quote.url;
  shownDay = day;
}
updateDailyQuote();
setInterval(updateDailyQuote, 1000);
document.addEventListener("visibilitychange", updateDailyQuote);
