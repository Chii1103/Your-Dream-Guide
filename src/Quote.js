import React,{useState} from "react";
import "./Quote.scss";
const api_url = "https://api.quotable.io/random";
const Quote = () => {

  const [quoteData,setQuoteData] = useState({content:"Loading...", author:"Loading..."});

  const fetchNewQuote = async()=> {
    const response = await fetch(api_url);
    const data = await response.json();
    setQuoteData({content:data.content, author:data.author});
  };

  return (
    <div class="quote-box">
    <h2>Quote of the day</h2>
    <blockquote id="quote">{quoteData.content}</blockquote>
    <span id="author">{quoteData.author}</span>
  <div>
    <button onClick={fetchNewQuote}>New Quote</button>
  </div>
</div>
  );
};

export default Quote;
