import React, { useEffect, useState } from "react";
import "./TodayQuote.scss";
var quotes = [
  {
    quote: "Education is the key to unlock the golden door of freedom.",
    name: "George Washington Carver",
  },
  {
    quote:
      "The beautiful thing about learning is that no one can take it away from you.",
    name: "B.B. King",
  },
  {
    quote:
      "Education is not the filling of a pail, but the lighting of a fire.",
    name: "William Butler Yeats",
  },
  {
    quote: "Intelligence plus character - that is the goal of true education.",
    name: "Martin Luther King Jr.",
  },
  {
    quote:
      "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    name: "Malcolm X",
  },
  {
    quote:
      "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    name: "Dr. Seuss",
  },
  {
    quote: "Education is not preparation for life; education is life itself.",
    name: "John Dewey",
  },
  {
    quote: "Success is the sum of small efforts, repeated day in and day out.",
    name: "Robert Collier",
  },
  {
    quote: "Believe you can and you're halfway there.",
    name: "Theodore Roosevelt",
  },
  {
    quote:
      "Education is the most powerful weapon which you can use to change the world.",
    name: "Nelson Mandela",
  },
  {
    quote:
      "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.",
    name: "Martin Luther King Jr.",
  },
  {
    quote:
      "Your education is a dress rehearsal for a life that is yours to lead.",
    name: "Nora Ephron",
  },
  {
    quote: "The future of the world is in my classroom today.",
    name: "Ivan Welton Fitzwater",
  },
  {
    quote:
      "Education is not just about going to school; it's about widening your knowledge and absorbing the truth about life.",
    name: "Shakuntala Devi",
  },
  {
    quote:
      "Education is not the learning of facts, but the training of the mind to think.",
    name: "Albert Einstein",
  },
  {
    quote: "Education is the foundation upon which we build our future.",
    name: "Christine Gregoire",
  },
  {
    quote: "Learning is a treasure that will follow its owner everywhere.",
    name: "Chinese Proverb",
  },
  {
    quote: "The roots of education are bitter, but the fruit is sweet.",
    name: "Aristotle",
  },
  {
    quote: "The best way to predict the future is to create it.",
    name: "Peter Drucker",
  },
  {
    quote:
      "Education is the most powerful weapon you can use to change the world.",
    name: "Nelson Mandela",
  },
];

function TodayQuote() {
  const [quote, setQuote] = useState(0);
  function getRandomNumber(min, max) {
    var random_number = Math.floor(Math.random() * (max - min + 1)) + min;
    setQuote(random_number);
  }

  useEffect(() => {
    const interval = setInterval(
      () => getRandomNumber(1, quotes.length - 1),
      100000
    );
    return () => clearInterval(interval);
  }, [quote]);

  return (
    <div className="today-quote">
      <div>
        <p className="quote">"{quotes[quote].quote}"</p>
        <span className="name">-{quotes[quote].name}</span>
      </div>
    </div>
  );
}

export default TodayQuote;
