try {
    
} catch (error) {
    if(error instanceof Error) { //This checking is given if the passed error is not an instance of Error class, so to have guaranteed error message, we gave the checking othwise we had to give error type 'any' means error: any
        console.error(error.message);
    }
}