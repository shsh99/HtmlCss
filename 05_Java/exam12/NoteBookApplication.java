package chap07.verify.exam12;

/**
 * packageName : chap07.verify.exam0108
 * fileName : NoteBookApplication
 * author : kangtaegyung
 * date : 2023/03/30
 * description :
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023/03/30         kangtaegyung          최초 생성
 */
// 문제 : 아래 실행클래스의 실행결과와 추상 클래스의 Computer 객체를 보고
//      DeskTop , NoteBook 객체를 디자인(코딩) 하세요
public class NoteBookApplication {
    public static void main(String[] args) {
        Computer computer = new DeskTop();

        computer.turnOn();       // "전원을 켭니다."
        computer.display();      // "DeskTop Display()"
        computer.typing();       // "DeskTop Typing()"

        computer = new NoteBook(); // 데스크탑 -> 노트북으로 변경
        computer.display();      // "DeskTop Display()"
        computer.typing();       // NoteBook Typing()

        computer.turnOff();         // "전원을 끕니다."
    }
}
