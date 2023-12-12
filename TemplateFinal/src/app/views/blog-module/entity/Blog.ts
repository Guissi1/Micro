export class Blog {
    id?: number;
    iduser?: number;
    title?: string;
    date?: Date;
    description?: string;
    country?: string;
    address?: string;
    pictures?: any;  

    hashtags?: string[]; 
    reactions_id?: number[]; 
    comments_id?: number[];

}
