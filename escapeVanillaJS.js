document.addEventListener("DOMContentLoaded", () => {
    // Fixed: Correct ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json')
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // Fixed: Correct element ID used to display the result in Room 1
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    // Fixed: Corrected JS concepts and reactConcepts sets
    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        // Fixed: Added missing 'async' to JS concepts
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // Fixed: Correct function call to find the intersection of JS and React concepts
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // Fixed: Added async keyword for Room 3 event listener
    document.getElementById("solveRoom3").addEventListener("click", async () => {
        try {
            const response = await fetch('directions.json');
            const directions = await response.json();
            const message = await navigateLabyrinth(directions);
            // Fixed: Used textContent instead of innerHTML for security and proper content handling
            document.getElementById("room3Result").textContent = message;
        } catch (error) {
            console.error("Error in Room 3:", error);
        }
    });
});

// Fixed: Corrected logic to find the most recent book in Room 1
function findMostRecentBook(books) {
    return books.reduce((mostRecent, book) => 
        new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent
    );
}

// Fixed: Correct implementation of set intersection logic in Room 2
function findIntersection(setA, setB) {
    return new Set([...setA].filter(x => setB.has(x)));
}

// Fixed: Added await to simulate asynchronous navigation through the labyrinth in Room 3
async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
