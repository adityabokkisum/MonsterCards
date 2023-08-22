export const getData = async<T>(url:string):Promise<T> => {
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   return await response.json();
}