package chap06.sec02.verify;

/**
 * packageName : chap06.sec02.verify
 * fileName : MemberApplication
 * author : GGG
 * date : 2023-09-20
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-09-20         GGG          최초 생성
 */
public class MemberApplication {
    /**
     * Member 객체를 생성하고 속성에 아래의 값으로 저장한 후 속성의 값을 출력하세요.
     * 결과 :
     *     이름 : 최하얀
     *     id : 23
     * @param args
     */
    public static void main(String[] args) {
        Member member = new Member();
        member.name = "최하얀";
        member.id = "23";
        member.password = "";
        member.age = 23;

        System.out.println(member.name);
        System.out.println(member.id);
    }

}
