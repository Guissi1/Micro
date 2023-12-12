export class Comment {
    id?: number;
    iduser?: number; 
    blogId?: number;
    content?: string;
    commentedAt?: Date;
    parentCommentId?: number; 
}
