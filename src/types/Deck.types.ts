export type DeckType = {
  id: number;
  name: string;
  image: any;
};

export type DeckListType = {
  [key: string]: DeckType[];
};
