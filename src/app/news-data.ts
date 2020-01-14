export class NewsData {
    public id: number;
    public title: string;
    public content: string;
    public imageUrl: string;

    constructor(title: string) {
        this.title = title;
    }
}