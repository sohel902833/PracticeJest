import { Option, Quiz, Question } from "../interfaces/QuestionInterface";

export const quiz: Quiz = {
  questions: [
    {
      question: "A Is Correct",
      hasMultiple: false,
      options: [
        {
          optionTitle: "A",
          correct: true,
          checked: false,
        },
        {
          optionTitle: "B",
          correct: false,
          checked: false,
        },
        {
          optionTitle: "C",
          correct: false,
          checked: false,
        },
        {
          optionTitle: "D",
          correct: false,
          checked: false,
        },
      ],
    },
    {
      question: "B Is Correct",
      hasMultiple: false,
      options: [
        {
          optionTitle: "A",
          correct: false,
          checked: false,
        },
        {
          optionTitle: "B",
          correct: true,
          checked: false,
        },
        {
          optionTitle: "C",
          correct: false,
          checked: false,
        },
        {
          optionTitle: "D",
          correct: false,
          checked: false,
        },
      ],
    },
    {
      question: "C Is Correct",
      hasMultiple: false,
      options: [
        {
          optionTitle: "A",
          correct: false,
          checked: false,
        },
        {
          optionTitle: "B",
          correct: false,
          checked: false,
        },
        {
          optionTitle: "C",
          correct: true,
          checked: false,
        },
        {
          optionTitle: "D",
          correct: false,
          checked: false,
        },
      ],
    },
    {
      question: "D Is Correct",
      hasMultiple: false,
      options: [
        {
          optionTitle: "A",
          correct: false,
          checked: false,
        },
        {
          optionTitle: "B",
          correct: false,
          checked: false,
        },
        {
          optionTitle: "C",
          correct: false,
          checked: false,
        },
        {
          optionTitle: "D",
          correct: true,
          checked: false,
        },
      ],
    },
    {
      question: "E Is Correct",
      hasMultiple: false,
      options: [
        {
          optionTitle: "A",
          correct: false,
          checked: false,
        },
        {
          optionTitle: "B",
          correct: false,
          checked: false,
        },
        {
          optionTitle: "C",
          correct: false,
          checked: false,
        },
        {
          optionTitle: "E",
          correct: true,
          checked: false,
        },
      ],
    },
  ],
};
