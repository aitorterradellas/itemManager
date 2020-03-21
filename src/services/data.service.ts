import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // URL is not accessible by localhost. Due to that, we're getting the items from a local json file
  private URL: string = "https://webpublic.s3-eu-west-1.amazonaws.com/tech-test/items.json";
  private LOCAL_ITEMS: string = "./assets/mydata.json";

  constructor(private httpClient: HttpClient) { }
  
  getItems(): Observable<any> {
    return this.getJSON().pipe(data => data);
  }

  getJSON() {
    return this.httpClient.get(this.LOCAL_ITEMS);
  }
}
