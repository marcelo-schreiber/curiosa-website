interface Question {
  input: string;
  output: string;
}

interface Exam {
  question_1?: Question[];
  question_2?: Question[];
  question_3?: Question[];
  question_4?: Question[];
  question_5?: Question[];
  question_6?: Question[];
  question_7?: Question[];
  question_8?: Question[];
  question_9?: Question[];
  question_10?: Question[];
}

const questions: Exam = {
  question_1: [{ input: "1\n2\n1", output: "-1.0 -1.0\n" }],
};

export default questions;
