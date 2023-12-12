import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Blog} from "../entity/Blog"
@Injectable({
  providedIn: 'root'
})
export class BlogService {


  private apiUrl = 'http://localhost:8065/Blog'; 

  constructor(private http: HttpClient) {}

  getAll(): Observable<string[]> {// get all blogs with comments 
    return this.http.get<string[]>(`${this.apiUrl}/`);
  }
  
  getBlogs(): Observable<Blog[]> {//get all blogs 
    return this.http.get<Blog[]>(`${this.apiUrl}/list-blogs`);
  }

  getAllAndComments(): Observable<Blog[]> {// ? 
    return this.http.get<Blog[]>(`${this.apiUrl}/withcomments`);
  }

  getBlogsByHashtag(hashtag: string): Observable<Blog[]> {//get blog by hashtag
    return this.http.get<Blog[]>(`${this.apiUrl}/byhashtag/${hashtag}`);
  }

  addBlog(blogData: FormData): Observable<any> {
    return this.http.post<Blog>(`${this.apiUrl}/add`, blogData);
}


  //addBlog(blogData: Blog): Observable<any> {
   // return this.http.post<Blog>(`${this.apiUrl}/add`, blogData);
  //}

  getBlog(id: number): Observable<Blog> {//get blog by id 
    return this.http.get<Blog>(`${this.apiUrl}/info/${id}`);
  }

  getMyBlogs(userId: number): Observable<Blog[]> {// get my blogs
    return this.http.get<Blog[]>(`${this.apiUrl}/myblogs/${userId}`);
  }

  updateBlog(id: number, blog: Blog): Observable<Blog> {
    return this.http.put<Blog>(`${this.apiUrl}/update/${id}`, blog);
  }

  deleteBlog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}