enum Suit {
  DIAMONDS,
  SPADES,
  HEARTS,
  CLUBS,
}

enum Value {
  Q = 1,
  K,
  J,
  A,
  TWO,
  THREE,
  MANHILHA,
}

const cardMapping = {
  [Suit.DIAMONDS]: {
    [Value.Q]: `card-clubs-Q.png`,
    [Value.K]: `card-clubs-K.png`,
    [Value.J]: `card-clubs-J.png`,
    [Value.A]: `card-clubs-1.png`,
    [Value.TWO]: `card-clubs-2.png`,
    [Value.THREE]: `card-clubs-3.png`,
    [Value.MANHILHA]: `card-clubs-7.png`,
  },
  [Suit.SPADES]: {
    [Value.Q]: `card-spades-Q.png`,
    [Value.K]: `card-spades-K.png`,
    [Value.J]: `card-spades-J.png`,
    [Value.A]: "",
    [Value.TWO]: `card-spades-2.png`,
    [Value.THREE]: `card-spades-3.png`,
    [Value.MANHILHA]: `card-spades-1.png`,
  },
  [Suit.HEARTS]: {
    [Value.Q]: `card-hearts-Q.png`,
    [Value.K]: `card-hearts-K.png`,
    [Value.J]: `card-hearts-J.png`,
    [Value.A]: `card-hearts-1.png`,
    [Value.TWO]: `card-hearts-2.png`,
    [Value.THREE]: `card-hearts-3.png`,
    [Value.MANHILHA]: `card-hearts-7.png`,
  },
  [Suit.CLUBS]: {
    [Value.Q]: `card-clubs-Q.png`,
    [Value.K]: `card-clubs-K.png`,
    [Value.J]: `card-clubs-J.png`,
    [Value.A]: `card-clubs-1.png`,
    [Value.TWO]: `card-clubs-2.png`,
    [Value.THREE]: `card-clubs-3.png`,
    [Value.MANHILHA]: `card-clubs-4.png`,
  },
} as const;

export interface Card {
  naipe: Suit;
  rodada: number | null;
  valor: Value;
}

export const getCard = (suit: Suit, value: Value) => cardMapping[suit][value];
