export interface MockItemsProps {
  id: string;
  difficulty: string;
  question: string;
  answerList?: Array<ItemProps>;
}

export interface ItemProps {
  answer: string;
  content: string;
  question: string;
  id: number;
  value: boolean;
}
