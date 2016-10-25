import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username='nlabofa';
    private client_id = '9b874289c9b9dde99f5b';
    private client_secret='2987b03e6d96ec909168beca9be0bf0e16e737e0';
    
    constructor(private _http: Http){}
    
    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    updateUsername(username:any){
        this.username = username;
    }
}