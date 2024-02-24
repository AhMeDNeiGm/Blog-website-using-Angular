import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BlogdetailsService } from '../../services/blogdetails.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [],
  providers:[
    BlogdetailsService
  ],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {
  coverType:string="video";
  video!:string;
  constructor(
    private sanitizer:DomSanitizer,
    private blogDetailsService:BlogdetailsService,
    private _myActivatedRoute:ActivatedRoute,
    ){}

 

    bodyBlog!:string;
    titleBlog!:string;
    selectedCategory!:string;
    coverimageURL!:string;
    coverimage!:string;

  ngOnInit(): void {
    const param = this._myActivatedRoute.snapshot.params['id'];
    this.blogDetailsService.getBlogById(param).subscribe({
      next:(res:any)=>{
        
        if (res) { // Type guard to ensure object
          console.log(res);
          
          this.bodyBlog = res.findById.body;
          this.titleBlog = res.findById.title;
          this.selectedCategory = res.findById.category;
          this.coverimageURL = res.findById.coverfile;
          this.coverType = res.findById.covertype;
          this.video=`<iframe src=${this.coverimageURL} frameborder="0" width="100%" height="400" >
          </iframe>`
        } 
        
        
      },
      error:(er)=>{
        console.log(er);
      },
      complete:()=>{
        //loading condition   
      }
    })
  }
  sanitizeVideoUrl() {
    return this.sanitizer.bypassSecurityTrustHtml(this.video)
  }

  getSanitizedHtml() {
    return this.sanitizer.bypassSecurityTrustHtml(this.bodyBlog);
  }

  // Desrilize()
  // {
  //   return document.body.con
  // }

}
