import { Observable, observable } from "rxjs";

var Lalla= new Observable((observer)=>{
    observer.next("lala")
    observer.error("error occured")
}
);