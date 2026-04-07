import { Injectable,signal } from "@angular/core";

@Injectable({
    providedIn:'root',
})
export class UserStore{
    user=signal<User|null>(null);
    login(name:string,role:'user'|'admin'){
        this.user.set({name,role});
    }
    logout(){
        this.user.set(null);
    }
    isAdmin(){
        return this.user()?.role==='admin';
    }
}
interface User{
    name:string;
    role:'user'|'admin';
}