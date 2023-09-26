package chap12.sec01.solution;

import java.util.List;

/**
 * packageName : chap12.sec01.solution
 * fileName : SolutionApplication
 * author : GGG
 * date : 2023-09-25
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-25         GGG          최초 생성
 */
public class SolutionApplication {
    public static void main(String[] args) {

        /**
         * 배열 만들기 1
         * 정수 n과 k가 주어졌을 때,
         * 1 이상 n이하의 정수 중에서
         * k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
         * 입출력 예
         * n	k	result
         * 10	3	[3, 6, 9]
         * 15	5	[5, 10, 15]
         */
//        Solution solution = new Solution();
//        List<Integer> answer = solution.solution100(10, 3);
//        System.out.println(answer);
        class Solution {
            public int solution(int[] num_list) {
                int answer = 0;
                String a = null;
                String b = null;
                for(int i=0; i<num_list.length; i++){
                    if(num_list[i] % 2 ==0){
                        a += "num_list[i]";
                    } else{
                        b += "num_list[i]";
                    }
                    answer = Integer.parseInt(a) + Integer.parseInt(b);
                }
                return answer;
            }
        }
    }
}
