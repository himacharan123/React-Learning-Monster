import { useState } from "react";

function Testimonials() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    quote: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
  },
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
  },
  {
    quote: "This app made my daily workflow incredibly smooth.",
    author: "Aarav Sharma",
  },
  {
    quote: "Clean design, fast performance, and easy to use.",
    author: "Priya Reddy",
  },
  {
    quote: "Exactly what I needed — simple and powerful.",
    author: "Rahul Verma",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    quote: "Great things are done by a series of small things brought together.",
    author: "Vincent Van Gogh",
  },
];


    function handlePrevClick() {
       setCurrentIndex((currentIndex+testimonials.length-1)%testimonials.length);
    }

    function handleNextClick() {
        setCurrentIndex((currentIndex+1)%testimonials.length);
    }


    return <div className="container">
        <div className="testimonial-conatiner">


            <div className="quote">
                {

                    testimonials[currentIndex].quote
                }

            </div>
            <div className="author">
               - {testimonials[currentIndex].author}
            </div>
            <div>
                <button onClick={handlePrevClick} >Prev</button>
                <button onClick={handleNextClick} >Next</button>

            </div>
        </div>
    </div>
}

export default Testimonials;