export enum ReactionType {
    LIKE = 'LIKE',
    DISLIKE = 'DISLIKE',
    LOVE = 'LOVE',
    ANGRY='ANGRY',
    SAD='SAD',
    EXCITED='EXCITED',

}

export enum ForWho {
    BLOG = 'BLOG',
    COMMENT = 'COMMENT',
}

export class Reaction {
    id!: number;
    idUser!: number;
    reactionType!: ReactionType;
    forwho!: ForWho;
    blogid!: number;
}
