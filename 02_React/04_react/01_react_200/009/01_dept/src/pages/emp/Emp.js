// Emp.js : 사원 상세조회 페이지
// rfce
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmpService from "../../services/EmpService";

function Emp() {
  // TODO: 1) 상세조회 함수 작성하기
  // TODO: 변수명 : customer(객체), message
  // TODO: EmpService.js (공통js 함수 : http.get(`/customer/${id}`) : )

  // TODO: 변수정의
  // TODO: 이전 페이지에서 변수의(id) 값을(사원번호) 전송 : 받기
  const { id } = useParams(); // 전송된 값 받기 함수 호출
  let navigate = useNavigate(); // 페이지 강제 이동시키는 함수

  // 임시 객체(초기화)
  const initialCustomer = {
    id: "", // 번호(자동 생성)
    cname: "", // 사원명
    email: "", // 이메일
    phone: "", // 폰번호
  };
  let [customer, setCustomer] = useState(initialCustomer); // 벡엔드로 전송할 변수(insert 요청)
  let [message, setMessage] = useState(""); // 수정버튼 클릭후 성공여부 메세지 변수

  // TODO: 함수정의
  // 상세조회 함수
  const getCustomer = (id) => {
    EmpService.get(id) // 상세조회 요청(id)
      .then((response) => {
        // 성공시 자동실행
        setCustomer(response.data); // 벡엔드에서 보내준 결과 저장
        // 로그 찍기
        console.log(response.data);
      })
      .catch((e) => {
        // 실패시 자동실행
        console.log(e); // 에러메세지 출력
      });
  };

  // 화면이 뜰때 실행되는 함수 + id 값 변경시도 실행됨
  useEffect(() => {
    if (id) {
      getCustomer(id); // 상세조회(id) 실행
    }
  }, [id]);

  // 역바인딩 함수
  const handleInputChange = (event) => {
    let attrValue = event.target.value; // 화면 입력값(객체의 속성값)
    let attrName = event.target.name; // 화면의 태그 이름(===객체의 속성명)
    // 스프레드 연산자로 속성의 값을 수정
    setCustomer({ ...customer, [attrName]: attrValue });
  };

  // 수정함수 : 클릭
  // TODO: 연습3) 수정함수를 완성하세요(부서수정페이지 참고)
  // TODO: (힌트) EmpService.js (공통함수 : update() 함수정의)
  const updateCustomer = () => {
    // 수정요청(사원번호(id), 사원객체(customer))
    EmpService.update(customer.id, customer)
      .then((response) => {
        // 성공시 자동실행
        // 로그 찍기
        console.log(response.data);
        // 화면에 수정 성공 메세지를 출력
        setMessage("사원 수정이 성공하였습니다.");
      })
      .catch((e) => {
        // 실패시 자동실행
        console.log(e); // 에러 메세지 출력
      });
  };

  // 삭제함수 : 클릭
  // TODO: 연습2) 삭제함수 완성하세요
  // 강제 페이지 이동 url(전체 조회페이지) : /emp
  const deleteCustomer = () => {
    EmpService.remove(customer.id) // 삭제 요청(id)
      .then((response) => {
        // 로그 찍기
        console.log(response.data);
        // 삭제성공 후 자동으로 1st 페이지로 이동(전체 조회페이지)
        // 사용법 : navigate("이동될페이지주소")
        navigate("/emp"); // 강제페이지 이동 함수 실행
      })
      .catch((e) => {
        // 실패시 자동실행
        console.log(e); // 에러메세지 출력
      });
  };

  return (
    //TODO: 여기
    <>
      {/* 제목 start */}
      <div className="row">
        {/* 제목 시작 */}
        <div className="col-md-6 mb-5 mt-5">
          <h1>Emp Detail</h1>
        </div>
        {/* 제목 끝 */}
      </div>
      {/* 제목 end */}

      <>
        {customer ? (
          <div className="col-6 mx-auto">
            <form>
              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="cname" className="col-form-label">
                    Cname
                  </label>
                </div>

                <div className="col-9">
                  <input
                    type="text"
                    id="cname"
                    required
                    className="form-control"
                    value={customer.cname}
                    onChange={handleInputChange}
                    placeholder="cname"
                    name="cname"
                  />
                </div>
              </div>

              <div className="row g-3 align-items-center mb-3">
                <div className="col-3">
                  <label htmlFor="email" className="col-form-label">
                    email
                  </label>
                </div>

                <div className="col-9">
                  <input
                    type="text"
                    id="email"
                    required
                    className="form-control"
                    value={customer.email}
                    onChange={handleInputChange}
                    placeholder="email"
                    name="email"
                  />
                </div>

                <div className="row g-3 align-items-center mb-3">
                  <div className="col-3">
                    <label htmlFor="phone" className="col-form-label">
                      phone
                    </label>
                  </div>
                  <div className="col-9">
                    <input
                      type="text"
                      id="phone"
                      required
                      className="form-control"
                      value={customer.phone}
                      onChange={handleInputChange}
                      placeholder="phone"
                      name="phone"
                    />
                  </div>
                </div>
              </div>
            </form>

            <div className="row g-3 mt-3 mb-3">
              <button
                onClick={deleteCustomer}
                className="btn btn-outline-danger ms-3 col"
              >
                Delete
              </button>

              <button
                type="submit"
                onClick={updateCustomer}
                className="btn btn-outline-success ms-2 col"
              >
                Update
              </button>
            </div>

            <p>{message}</p>
          </div>
        ) : (
          <div className="col-6 mx-auto">
            <br />
            <p>Please click on a Customer...</p>
          </div>
        )}
      </>
    </>
  );
}

export default Emp;
