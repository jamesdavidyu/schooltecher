import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    const url = "http://localhost:8080/api/v1/login";
    return this.http.post(url, data);
  }
}
