import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../entity/Blog';
import { Comment } from '../entity/Comment';

import { ForWho, Reaction, ReactionType } from '../entity/Reactions';
import { BlogService } from '../services/blog.service'
import { CommentsService } from '../services/comments.service'
import { ReactionsService } from '../services/reactions.service'
@Component({
  selector: 'app-oneblog',
  templateUrl: './oneblog.component.html',
  styleUrls: ['./oneblog.component.scss']
})
export class OneblogComponent {
  selectedBlog!: Blog;
  idblog!: number;
  iduser: number = 1;
  Username: any;

  selected_reaction: Reaction = new Reaction();
  list_reaction: Reaction[] = [];

  reactionType = ReactionType;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private commentService: CommentsService, private reactionService: ReactionsService) { }

  ngOnInit(): void {
    this.iduser = Number(localStorage.getItem('id'));
    this.Username = localStorage.getItem('username');
    const idStr = this.route.snapshot.paramMap.get('id');
    this.idblog = +idStr!;
    this.loadBlog();// this one is to load the blog 
    this.loadreactions();// this one to load the reactions of the blog 
    this.loadreactionofuser()//this one it to know what blog did the user liked before if he ever did 
    this.loadcomments();
    this.idblog = this.idblog;
  }
  loadBlog(): void {
    this.blogService.getBlog(this.idblog).subscribe(
      (blog: Blog) => {
        this.selectedBlog = blog;
        console.log(blog)
      },
      (error) => {
        console.error('Error loading the blog:', error);
      }
    );
  }
  //******************************* */reactions
  myreaction: any;
  reactionsCount = {
    LOVE: 0,
    SAD: 0,
    DISLIKE: 0,
    EXCITED: 0,
    LIKE: 0,
    ANGRY: 0

  };
  loadreactions(): void {
    this.reactionService.getReactionsCountForBlog(this.idblog).subscribe(
      (response: any) => {
        console.log(response);
        this.reactionsCount = response;
      },
      (error) => {
        console.error('Error loading in load reaction :', error);
      }
    );
  }

  addReaction(reactionType: ReactionType) {
    this.selected_reaction.idUser = this.iduser;
    this.selected_reaction.blogid = this.selectedBlog.id!;
    this.selected_reaction.forwho = ForWho.BLOG;
    this.selected_reaction.reactionType = reactionType;
    console.log(this.selected_reaction);
    this.reactionService.createReaction(this.selected_reaction)
      .subscribe(response => {
        this.loadreactionofuser(); // Refresh the user reaction after adding a new one
      });
  }

  loadreactionofuser() {
    this.reactionService.getReactionByBlogAndUser(this.iduser, this.idblog)
      .subscribe(response => {
        console.log(response);
        this.myreaction = response;
        this.loadreactions();
      });
  }
  handleReaction(reactionType: ReactionType) {
    if (this.myreaction === reactionType) {
      this.deleteReaction();
    } else {
      this.addReaction(reactionType);
    }
  }
  deleteReaction() {
    this.reactionService.deleteReactionByBlogAndUser(this.iduser, this.idblog)
      .subscribe(
        () => {
          console.log('Reaction deleted successfully.');
          this.myreaction = null;
          this.loadreactions();
        },
        error => {
          console.error('Error deleting reaction:', error);
        }
      );
  }
  //******************************* Comment 
  list_comment: Comment[] = [];
  selectedcomment: Comment = {};
  reply: Comment = {}
  showReplyInput: boolean = false;

  toggleReplyInput() {
    this.showReplyInput = !this.showReplyInput;
  }
  loadcomments(): void {
    this.commentService.getCommentsByBlogId(this.idblog).subscribe(
      (response: Comment[]) => {
        console.log(response);
        this.list_comment = response;
      },
      (error) => {
        console.error('Error loading in load Comment :', error);
      }
    );
  }
  addComment() {
    this.selectedcomment.blogId = this.idblog;
    this.selectedcomment.iduser = this.iduser;
    this.commentService.createComment(this.selectedcomment).subscribe(
      (result) => {
        console.log('Comment added successfully:', result);
        this.loadcomments();
      },
      (error) => {
        console.error('There was an error:', error);
      }
    );
  }

  addCommentForComment(id: any) {
    this.reply.parentCommentId = id;
    this.reply.iduser = this.iduser;
    this.commentService.createComment(this.reply).subscribe(
      (result) => {
        console.log('Comment added successfully:', result);
        this.loadcomments();
      },
      (error) => {
        console.error('There was an error:', error);
      }
    );
  }
  loadreplays(id: any): void {
    this.commentService.getRepliesByCommentId(id).subscribe(
      (response: Comment[]) => {
        console.log(response);
        this.list_comment = response;
      },
      (error) => {
        console.error('Error loading in load Comment :', error);
      }
    );
  }
  deletecomment(id: any) {
    this.commentService.deleteComment(id).subscribe(
      (result) => {
        console.log('Comment deleted successfully:', result);
        this.loadcomments();

      },
      (error) => {
        console.error('There was an error:', error);
      }
    );
  }
  updatecomment() {

  }
  //******************************* */reply

  //******************************* 
}