function changeBackground() {
    const shape = document.getElementsByClassName("square");
    if (shape.length > 0) {
        const currentColor = shape[0].style.backgroundColor;
        if (currentColor === "yellow") {
            shape[0].style.backgroundColor = "pink";
            console.log("Background changed to pink!");
        } else {
            shape[0].style.backgroundColor = "yellow";
            console.log("Background changed to yellow!");
        }
    } else {
        console.log("No element with class 'square' found.");
    }
}