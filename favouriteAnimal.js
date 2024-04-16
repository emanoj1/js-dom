let animals = [
    "fennec fox",
    "lobster",
    "frog",
    "crocodile",
    "whale shark",
    "lion",
    "turtle",
    "horse",
    "panda",
    "lizard"
]

function createAnimalList(){
    animals.forEach((animal) => {
        console.log("animal: " + animal);

        //1. Create a li element with wnimal value as its text
        let newList = document.createElement("li");
        newList.textContent = animal;
        newList.id = animal;

        //2. Find the ol element that exists in the page and append the li into it
        let root01Node = document.querySelector("ol");
        root01Node.appendChild(newList);

    });
   
}