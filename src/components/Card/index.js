import React from "react";

function Card(props) {
    return(
        <div class="col s12 m7">
            <h2 class="header">Random Quotes</h2>
            <div class="card horizontal">
                <div class="card-image">
                    <img src="https://lorempixel.com/100/190/nature/6" />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                    <p>Random Quote (work in progress)</p>
                    </div>
                    <div class="card-action">
                        <a href="/">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;