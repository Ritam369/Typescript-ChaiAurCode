import axios, {isAxiosError} from "axios";
import type {AxiosResponse} from "axios"

interface ToDo {
    userId: number;
    id : number;
    title: string;
    completed: boolean;
}

const fetchdata = async () => {
    try {
        const response: AxiosResponse<ToDo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(response.data);
    } catch (error: any) {
        if(axios.isAxiosError(error)) {
            console.error("Error fetching data:", error.message);
            if(error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            }
        }
    }
}


fetchdata()