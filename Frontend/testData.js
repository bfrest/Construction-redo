const machines = [
  {
    id: 1,
    model: "299D",
    hours: 9871,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    model: "320D",
    hours: 967,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw46Yff2dNqHxjxiGbvddCfRBC9q2ou5BvnA&usqp=CAU",
  },
  {
    id: 3,
    model: "140H",
    hours: 310,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizENAsz0EOXFnRCx2pioWg2OhHuKGkumGXA&usqp=CAU",
  },
  {
    id: 4,
    model: "D6T",
    hours: 9786,
    image:
      "data:image/jpeg;base64,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",
  },
];

export default machines;