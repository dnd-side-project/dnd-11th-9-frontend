/**
 * totalItems를 categories 수만큼의 카테고리로 분배하는 함수
 * @param totalItems
 * @param categories
 * @example
 * distributeItems(10, 3); // [3, 4, 3]
 */
export function distributeItems(totalItems: number, categories: number): number[] {
  const result = Array(categories).fill(0); // 각 카테고리에 배정될 숫자를 저장할 배열
  const baseCount = Math.floor(totalItems / categories); // 각 카테고리에 배정할 기본 수
  const remainder = totalItems % categories; // 나머지 아이템 수

  // 각 카테고리에 기본 수를 배정
  for (let i = 0; i < categories; i++) {
    result[i] = baseCount;
  }

  // 나머지 아이템을 앞에서부터 하나씩 추가
  for (let i = 0; i < remainder; i++) {
    result[i]++;
  }

  // 결과 배열을 랜덤하게 섞어서 반환
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]; // 배열을 섞음
  }

  return result;
}
