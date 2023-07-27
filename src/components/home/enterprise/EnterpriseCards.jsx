import EnterpriseCard from "./EnterpriseCard";

const engCards = [{front:"Backup/Restore",back:["provides a convenient interface for backup & restore", "provides backup & restore features for DB and table objects"]}
,{front:"DB Monitoring Dashboard", back:["monitors real-time session & transaction lock", "provides status for server CPU & memory"]},
{front:"Sechedule Managment", back:["provides module for script, SQL job, and scheduling management", "provides UX dedicated to scheduling"]}
,{front:"Database Audit", back:["enables auditing via user interface", "view audit results via user interface"]}
,{front:"SQL Monitoring", back:["collects query statistics required for performance analysis", "extracts monitoring results in query"]}
,{front:"Performance Managment", back:["monitors and collects operation status & statistical data", "provides status reports required for improving performance"]}]

const korCards =[{front:"백업 / 복원",back:["백업 및 복원을 위한 편리한 인터페이스 제공", "DB 및 테이블 객체에 대한 백업 및 복원 기능 제공"]}
,{front:"DB 모니터링 대시보드", back:["실시간 세션 및 트랜잭션 잠금 모니터링", "서버 CPU 및 메모리에 대한 상태 제공"]},
{front:"일정 관리", back:["스크립트, SQL 작업 및 스케줄링 관리를 위한 모듈 제공", "스케줄링 전용 UX 제공"]}
,{front:"데이터베이스 감사", back:["사용자 인터페이스를 통한 감사 활성화", "사용자 인터페이스를 통해 감사 결과 보기"]}
,{front:"SQL 모니터링", back:["성능 분석에 필요한 쿼리 통계 수집", "쿼리에서 모니터링 결과 추출"]}
,{front:"성과 관리 시스템", back:["운영현황 및 통계자료 모니터링 및 수집", "성능 향상에 필요한 상태 보고서 제공"]}];

const EnterpriseCards = ({kor}) => {
  const cards = (kor?korCards:engCards);
  return (
    <>
    {cards.map((card)=>{
      return(
        <EnterpriseCard
        front={card.front}
        back={
          <ul>
            <li>{card.back[0]}</li>
            <li>{card.back[1]}</li>
          </ul>
        }
      />
      )
    })}
      
    </>
  );
};

export default EnterpriseCards;
