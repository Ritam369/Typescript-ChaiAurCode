let response: any = "56";

// let numericLength: number = response.length;
// Ei case e kaaj kore jacche but string er different properties ba methods er suggestion kno asche nah??
// Karon response deoa ache 'any', so variable taake string bhebe seta niye kaaj korar kono upay neii...Ei case (forcefully type assertion) korte hbe

let numericLength: number = (response as string).length; //Forcefully type assertion
// (response as string) bolte bojhacche user guarantee diye bolche je response ta string tomake eta niye beshi r bhabte hbe nah

console.log(numericLength);

type book = {
  name: string;
};

let bookString: string = '{"name":"ABCD"}';
let bookObject: book = JSON.parse(bookString) as book; //Forcefully type assertion as there is no guarantee that the parsed object will be of type book

console.log(bookObject);

// const inputElement = document.getElementById("input") as HTMLInputElement; //Onksomoy DOM er different methods khuje paay nah je karone forceful type assertion korte hbe

// https://www.bing.com/ck/a?!&&p=7cee40acceaf74d919f7b2157d7bd928e02735cf765771683b2d0db29a3f4e03JmltdHM9MTc2NTIzODQwMA&ptn=3&ver=2&hsh=4&fclid=2b2ecfca-ed57-62f8-16ee-d990ecaf630f&psq=forcefully+type+assertion+in+typescript&u=a1aHR0cHM6Ly9tZWRpdW0uY29tL0BBbGV4YW5kZXJPYnJlZ29uL3doZW4tdHlwZXNjcmlwdHMtdHlwZS1hc3NlcnRpb25zLXdvcmstYW5kLXdoZW4tdGhleS1qdXN0LXNpbGVuY2UtdGhlLWNvbXBpbGVyLThkYjdhMTcxZDc3Mg

let value:number = Number("45")
console.log(value)


const data: unknown = "chai aur code"
const newData: string = data as string //forceful type assertion korte hocche as there is no guarantee that data value is string as it's 'unknown'