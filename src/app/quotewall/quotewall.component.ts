import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quotewall',
  templateUrl: './quotewall.component.html',
  styleUrls: ['./quotewall.component.css']
})
export class QuotewallComponent {
  quote: string = '';
  author: string = '';
  dialog: string = '';
  movie: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchQuote();
  }

  fetchQuote() {
    const apiUrl = 'http://localhost:3000/api/';
    this.http.get(`${apiUrl}quote`).subscribe((response: any) => {
      this.quote = response.text;
      this.author = response.author;
    }, (error) => {
      console.error('Failed to fetch quote:', error);
    });
    this.http.get(`${apiUrl}dialog`).subscribe((response: any) => {
      this.dialog = response.text;
      this.movie = response.movie;
    }, (error) => {
      console.error('Failed to fetch dialog:', error);
    });
  }
  
}
