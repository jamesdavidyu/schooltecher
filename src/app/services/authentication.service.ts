import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../model/authentication.type";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(data: Login): Observable<any> {
    const url = "https://ed-api.koyeb.app/login";
    return this.http.post(url, data);
  }
}
