import { Injectable } from '@angular/core';
import {Reaction, ReactionType} from "../entity/Reactions"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class ReactionsService {

  private apiUrl = 'http://localhost:8045/Reactions';  // Base URL of your API (adapt accordingly)

  constructor(private http: HttpClient) {}

  createReaction(reaction: Reaction): Observable<Reaction> {
    return this.http.post<Reaction>(`${this.apiUrl}/create`, reaction);
  }

  getReactionsCountForBlog(blogId: number): Observable<Map<string, number>> {
    return this.http.get<Map<string, number>>(`${this.apiUrl}/info/${blogId}`);
  }

  getReactionsOfBlog(blogId: number): Observable<Reaction[]> {
    return this.http.get<Reaction[]>(`${this.apiUrl}/ofblog/${blogId}`);
  }

  getAllReactions(): Observable<Reaction[]> {
    return this.http.get<Reaction[]>(`${this.apiUrl}/all`);
  }

  getAllReactionsByBlogAndType(blogId: number, reactionType: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/${blogId}/${reactionType}`);
  }

  getReactionById(id: number): Observable<Reaction> {
    return this.http.get<Reaction>(`${this.apiUrl}/${id}`);
  }

  deleteReaction(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
  getReactionByBlogAndUser(userId: number, blogId: number): Observable<ReactionType> {
    return this.http.get<ReactionType>(`${this.apiUrl}/blog_user/${userId}/${blogId}`);
  
  }
  deleteReactionByBlogAndUser(iduser: number, idblog: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteByBlogAndUser/${iduser}/${idblog}`);
  }
}