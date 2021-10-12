import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cakes : any = []
  constructor(private http : HttpClient , private loader : NgxUiLoaderService) { 
    this.loader.start()
    var url = "https://apifromashu.herokuapp.com/api/allcakes"
    this.http.get(url).subscribe((response:any)=>{
      console.log(response)
      this.cakes = response.data
      this.loader.stop()
    },(error)=>{
      this.loader.stop()
      console.log("Error: " , error)
    })
  }

  ngOnInit(): void {
  }

}
