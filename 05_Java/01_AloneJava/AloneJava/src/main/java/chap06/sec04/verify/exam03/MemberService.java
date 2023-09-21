package chap06.sec04.verify.exam03;

/**
 * packageName : chap06.sec04.verify.exam03
 * fileName : MemberService
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
public class MemberService {
    //    TODO: login 함수 :  id 가  "hong" 이고(&&) password 가 "12345" => true 리턴
//                                                     아니면   => false 리턴
    boolean login(String id, String password) {
//        로직 완성하기
        if(id.equals("hong") && password.equals("12345")) {
            return true;
        } else {
            return false;
        }
    }

    //    TODO: logout 함수 : 매개변수 id(문자열) : "hong이 로그아웃 되었습니다."가 출력
//                    logout("hong")
    void logout(String id){
//        sout : id + "이 로그아웃 되었습니다."
        System.out.println(id + "이 로그아웃 되었습니다.");
    }
}