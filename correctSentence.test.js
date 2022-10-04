/* Created by bar1k4real on 02.10.2022. */

import correctSentence from './correctSentence';

test('returns correct sentence', () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("greetings, friends.")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.")
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.")
  expect(correctSentence("Hello, World.")).toBe("Hello, World.")
  expect(correctSentence("hello, World.")).toBe("Hello, World.")
  expect(correctSentence("Hello, World")).toBe("Hello, World.")
  expect(correctSentence("hello, World")).toBe("Hello, World.")
})
