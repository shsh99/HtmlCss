package chap12.sec01.solution;

import java.util.ArrayList;
import java.util.List;

/**
 * packageName : chap12.sec01.solution
 * fileName : Solution
 * author : GGG
 * date : 2023-09-25
 * description : 프로그래머스 솔루션 함수 예제(샘플)
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-25         GGG          최초 생성
 */
public class Solution {
    /**
     * 배열 만들기 1
     * 정수 n과 k가 주어졌을 때,
     * 1 이상 n이하의 정수 중에서
     * k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
     * @param n
     * @param k
     * @return
     */
    public List<Integer> solution100(int n, int k) {
        List<Integer> answer = new ArrayList<>();

//        k의 배수만 넣기 : add()
        for (int i = 1; i <= n; i++) {
            if(i % k == 0) {
                answer.add(i); // i k의 배수임
            }
        }

        return answer;
    }
}