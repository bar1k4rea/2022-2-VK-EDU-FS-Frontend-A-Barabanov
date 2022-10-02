/* Created by bar1k4real on 02.10.2022. */

export default function correctSentence(text) {
  return text[0].toUpperCase() + text.slice(1) + (text.slice(-1) === '.' ? '' : '.');
}
