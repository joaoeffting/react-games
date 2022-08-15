export type DeckType = {
  id: number;
  name: string;
  src: any;
};

export type DeckListType = {
  [key: string]: DeckType[];
};
