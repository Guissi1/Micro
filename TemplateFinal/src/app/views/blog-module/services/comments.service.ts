import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from "../entity/Comment"

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private apiUrl = 'http://localhost:8050/Comments';  // Base URL of your API (adapt accordingly)

  constructor(private http: HttpClient) { }

  createComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.apiUrl}/add`, comment);
  }

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/all`);
  }

  getCommentsByBlogId(blogId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/byBlogId/${blogId}`);
  }

  getCommentsByUserId(userId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/byUserId/${userId}`);
  }

  getRepliesByCommentId(commentId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/replies/${commentId}`);
  }

  getCommentById(id: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.apiUrl}/info/${id}`);
  }

  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}