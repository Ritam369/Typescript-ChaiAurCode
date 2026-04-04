interface ToDo {
    userId: number;
    id : number;
    title: string;
    completed: boolean;
}

const fetchdata = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        if(!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: ToDo = await response.json();
        console.log(data);
    } catch (error: any) {
        console.error("Error fetching data:", error.message);
        // if(error.response) {
        //     console.error("Response data:", error.response.data);
        //     console.error("Response status:", error.response.status);
        //     console.error("Response headers:", error.response.headers);
        // }
    }
}


fetchdata()