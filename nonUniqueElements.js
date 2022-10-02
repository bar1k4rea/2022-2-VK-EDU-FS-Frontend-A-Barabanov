/* Created by bar1k4real on 02.10.2022. */

export default function nonUniqueElements(data) {
  return data.filter(x => data.indexOf(x) !== data.lastIndexOf(x));
}