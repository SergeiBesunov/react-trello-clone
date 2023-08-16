export default function saveDataLocalStorage(data:any, key:string){
    localStorage.setItem(key, JSON.stringify(data))
    }