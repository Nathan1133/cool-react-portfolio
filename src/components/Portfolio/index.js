import React from "react";

function Portfolio () {
    const items = [

        {
            name: "Run Buddy",
            img: "run-buddy.PNG",
            repo: "https://github.com/Nathan1133/run-buddy"
        },

        {
            name: "Horiseon",
            img: "Horiseon.PNG",
            repo: "https://github.com/Nathan1133/Horiseon111"
        },

        {
            name: "Foo(d)",
            img: "Foo(d).png",
            repo: "https://github.com/Nathan1133/nujj"
        },

        {
            name: "Budget Tracker",
            img: "budget-tracker.PNG",
            repo: "https://github.com/Nathan1133/budget-tracker"
        },

        {
            name: "Tech Blog",
            img: "tech-blog.png",
            repo: "https://github.com/Nathan1133/tech-blog"
        },

        {
            name: "Lord of The Rinks",
            img: "lord-of-the-rinks.png",
            repo: "https://github.com/Nathan1133/lord-of-the-rinks"
        },
    ]

    const renderCard = (card, index) => {
        return (
        <div id="portfolio">
          <section key={index} class="card">
            <img alt={card.name} src={require(`../../assets/images/${card.img}`)} />
            <div class="cardBody">
              <a class="card-git" href={card.repo}> {card.name} </a>
            </div>
          </section>
        </div>
        );
      };

    return (
        <section class="portfolio">    
            <h1 class="portfolioTitle"> Portfolio </h1>
            <div class="cardHolder">
                {items.map(renderCard)}
            </div>
        </section>
    );
}

export default Portfolio;