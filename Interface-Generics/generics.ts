//Makes our code more reusable

function wrapInArray<T>(data: T): T[] {
    return [data];
}

//T here represents responsive type (dynamic)
//here: can take any type of data, and will return the array of same type

wrapInArray(25)
wrapInArray(true)
wrapInArray("hello")
wrapInArray({ name: "John" })





function pair<A,B>(a: A,b: B): [A,B]{
    return [a,b]
}

pair(1,"hello")
pair(true, {name: "John"})
pair("hello", [1,2,3])
//And anything else...




//Generic Interface

interface GenericContainer<T> {
    content: T
}

const numberContainer: GenericContainer<number> = { content: 42 };
const stringContainer: GenericContainer<string> = { content: "Hello" }


//Real-world scenario with generics

interface ApiResponse<T>{
    status: number;
    data: T;
}

const res: ApiResponse<{content: string}> = {
    status: 201,
    data: {
        content: "hello"
    }
}