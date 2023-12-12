import { Component } from '@angular/core';
import { Blog } from "../entity/Blog"
import { Reaction, ReactionType } from "../entity/Reactions"
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReactionsService } from "../services/reactions.service"
import { BlogService } from "../services/blog.service"

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  list_blogs: Blog[] = []; selectedBlog: Blog = {};

  list_reaction: Reaction[] = [];
  selectedFile: File | null = null;

  showDropdown = false;
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  constructor(private blogService: BlogService, private reactionservice: ReactionsService, private route: ActivatedRoute, private fb: FormBuilder) {
  }
  Username:any;
  user_id : any=Number(localStorage.getItem('id'));
  ngOnInit(): void {
    this.selectedBlog.iduser = this.user_id;
    this.Username = localStorage.getItem('username');

    this.loadAllBlogs();
  }
  //******************************* */hashtags
  selectedFruits: string[] = ['Vacation', 'travel'];
  newFruit: string = '';

  addFruit() {
    if (this.newFruit && !this.selectedFruits.includes(this.newFruit)) {
      this.selectedFruits.push(this.newFruit);
    }
  }


  removeFruit(fruit: string) {
    const index = this.selectedFruits.indexOf(fruit);
    if (index > -1) {
      this.selectedFruits.splice(index, 1);
    }
  }

  //****************************** */BLOG
  loadAllBlogs(): void {
    this.blogService.getBlogs().subscribe(
      (data: Blog[]) => {
        this.list_blogs = data;
        console.log(data);
      });
  }


  submitBlog(): void {
    const formData: FormData = new FormData();

    if (this.selectedBlog) {
      if (this.selectedBlog.title) {
        formData.append('title', this.selectedBlog.title);
      }
      if (this.selectedBlog.country) {
        formData.append('country', this.selectedBlog.country);
      }
      if (this.selectedBlog.description) {
        formData.append('description', this.selectedBlog.description);
      }
    }
    formData.append('iduser', this.user_id);
    formData.append('address', 'nchalah google maps');

    if (this.selectedFile) {
      formData.append('pictures', this.selectedFile, this.selectedFile.name);
    }

    this.selectedFruits.forEach(fruit => {
      if (fruit) {
        formData.append('hashtags', fruit);
      }
    });

    this.blogService.addBlog(formData).subscribe(
      response => {
        console.log('Blog created successfully', response);
        this.loadAllBlogs();
        this.selectedBlog = {} as Blog;
        this.selectedFile = null;
      },
      error => {
        console.log('Error occurred:', error);
      }
    );
  }
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  delete(id: any) {
    this.blogService.deleteBlog(id).subscribe((response) => {
      this.loadAllBlogs();
    });
  }

}
