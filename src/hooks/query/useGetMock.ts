import { useQuery } from "@tanstack/react-query";
import { $_get } from "@src/utils/api";
import { MockItemsProps, ItemProps } from "@src/type";
import { shuffle } from "@src/utils/common";

type ResultResponse = {
  category: string;
  correct_answer: string;
  difficulty: "easy" | "medium" | "hard";
  question: string;
  incorrect_answers: Array<string>;
};
type Response = {
  response_code: 0;
  results: Array<ResultResponse>;
};

const parseData = async (data: any) => {
  let { results }: Response = await data;
  const items: Array<MockItemsProps> = results.map(
    (
      { correct_answer, difficulty, question, incorrect_answers },
      index: number
    ) => {
      let correctAnswer: ItemProps = {
        id: 0,
        content: correct_answer,
        value: true,
        answer: correct_answer,
        question,
      };
      let answerItems: Array<ItemProps> = incorrect_answers.map(
        (content: string, idx: number) => ({
          id: idx + 1,
          content,
          value: false,
          answer: correct_answer,
          question,
        })
      );
      answerItems = shuffle(answerItems.concat(correctAnswer));
      return {
        id: `answer-${index}`,
        difficulty: difficulty,
        question: question,
        answerItems,
      };
    }
  );

  return {
    items,
  };
};

const useGetMock = () => {
  return useQuery(
    ["api"],
    () =>
      parseData(
        $_get("https://opentdb.com/api.php", {
          params: {
            amount: 5,
            type: "multiple",
          },
        })
      ),
    { suspense: false }
  );
};

export default useGetMock;
