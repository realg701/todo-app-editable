export default function QnA() {
  const QnA = [
    {
      question: "Largest animal in the world?",
      answers: [
        { text: "Elephant", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Shark", correct: false },
        { text: "Giraffe", correct: false }
      ]
    },
    {
      question: "Upcoming movie of tom cruise?",
      answers: [
        { text: "American Made", correct: false },
        { text: "Mission: Impossible - Fallout", correct: false },
        {
          text: "Mission: Impossible - Dead Reckoning Part One",
          correct: true
        },
        { text: "Oblivion", correct: false }
      ]
    },
    {
      question:
        "If a computer has more than one processor then it is known as__________?",
      answers: [
        { text: "Multi-programming", correct: false },
        { text: "Multi-threaded", correct: false },
        { text: "Uni-process", correct: false },
        { text: "Multiprocessor", correct: true }
      ]
    },
    {
      question: "Which one of them is an Imagine Dragons song?",
      answers: [
        { text: "Radioactive", correct: true },
        { text: "Hometown", correct: false },
        { text: "Hymn for the Weekend", correct: false },
        { text: "Numb", correct: false }
      ]
    }
  ];
  return;
}
