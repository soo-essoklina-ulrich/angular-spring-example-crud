export interface ArticleSave {
  title: string;
  content: string;
  rating: number;
  prix: number;
}

export interface Article extends ArticleSave {
  id: number;
}
