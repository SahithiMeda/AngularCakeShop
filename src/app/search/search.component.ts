import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cakes:any = []
  constructor(private http : HttpClient, private loader : NgxUiLoaderService, private route : ActivatedRoute) {
    this.loader.start()
    var url  = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + this.route.snapshot.queryParams.q
    this.http.get(url).subscribe((response:any)=>{
      console.log(response)
      this.cakes= response.data
      this.loader.stop()
    } , (error)=>{
      this.loader.stop()
      console.log("search failed " , error)
    })
 }

  ngOnInit(): void {
  }

}
