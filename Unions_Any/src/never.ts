type Role = "admin" | "user" | "superAdmin"

function redirectBasedOnRole(role: Role): void /*void means, it doesn't return anything or it doesn't care what is being returned*/ {
    if (role === "admin") {
        console.log("Redirect to admin panel")
    } else if (role === "user") {
        console.log("Redirect to user dashboard")
    }
    console.log(role)
}

redirectBasedOnRole("superAdmin")


function continuousLoop(): never /* never means, it doesn't return anything*/ {
    while(true) {
        // This loop will run indefinitely
    }
}