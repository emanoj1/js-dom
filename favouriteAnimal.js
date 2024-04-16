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

        // 1b. Add a button to remove the element from the list
        let removeItemButton = document.createElement("button");

        removeItemButton.onclick = () => removeAnimalFromList(animal);

        removeItemButton.textContent = "Remove Animal";

        newList.appendChild(removeItemButton);

        //2. Find the ol element that exists in the page and append the li into it
        let root01Node = document.querySelector("ol");
        root01Node.appendChild(newList);

    });
   
}

function removeAnimalFromList(targetAnimalID){
    //1. Find element in list with matching id
    let targetListItem = document.getElementById(targetAnimalID);
    targetListItem.remove();

    //2. Check if ID is in array of animals
    let isAnimalInList = animals.includes(targetAnimalID);
    if (isAnimalInList){
    } else {
        return;
    }

    //3. Remove the animal from array
    animals = animals.filter(animal  => {
        if (targetAnimalID == animal){
            return false;
        } else {
            return true;
        }
    });

    //4. Update or wipe & rebuild the animal list HTML
}