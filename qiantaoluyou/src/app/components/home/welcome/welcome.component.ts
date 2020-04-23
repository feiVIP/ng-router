import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public list: any[] = [];
  public list1: any[] = [];
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getData();
    this.postData();
  }

  getData(){
    const api = 'https://www.imooc.com/search/hotwords';

    this.http.get(api).subscribe((response: any) => {
      this.list = response.result;
      console.log(this.list);
    });
  }


  postData(){
    const api = 'https://www.imooc.com/search/hotwords';

    this.http.get(api).subscribe((response: any) => {
      this.list1 = response.data;
      console.log(this.list1);
    });
  }


  // doLogin(){
  //
  //
  //
  //   // 手动设置请求的类型
  //   const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
  //

  //   const api = '';
  //
  //   this.http.post(api, {username: '张三', age: 20}, httpOptions).subscribe((response) => {
  //
  //     console.log(response);
  //
  //   });
  //
  // }
  //
  //
  // getJsonpData(){
  //
  //
  //
  //   /*
  //    http://a.itying.com/api/productlist?callback=xxx
  //
  //    http://a.itying.com/api/productlist?cb=xxx
  //
  //
  //   */
  //
  //   const api = '';
  //
  //   this.http.jsonp(api, 'callback').subscribe((response) => {
  //     console.log(response);
  //   });
  //
  //
  // }



}
