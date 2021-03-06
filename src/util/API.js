import axios from "axios";

// Export an object containing methods we'll use for accessing the quotes API

export default {
    //   getRandomDog: function() {
    //     return axios.get("https://dog.ceo/api/breeds/image/random");
    //   },
    //   getDogsOfBreed: function(breed) {
    //     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
    //   },
    //   getBaseBreedsList: function() {
    //     return axios.get("https://dog.ceo/api/breeds/list");
    //   }

    getRandomQuote: function(){
        return axios.get("https://zenquotes.io/api/random")
    }
};
