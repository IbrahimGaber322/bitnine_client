import EnterpriseCard from "./EnterpriseCard";

const EnterpriseCards = () => {
  return (
    <>
      <EnterpriseCard
        front={"Backup/Restore"}
        back={
          <ul>
            <li>provides a convenient interface for backup & restore</li>
            <li>provides backup & restore features for DB and table objects</li>
          </ul>
        }
      />
      <EnterpriseCard
        front={"DB Monitoring Dashboard"}
        back={
          <ul>
            <li>monitors real-time session & transaction lock</li>
            <li>provides status for server CPU & memory</li>
          </ul>
        }
      />
      <EnterpriseCard
        front={"Sechedule Managment"}
        back={
          <ul>
            <li>
              provides module for script, SQL job, and scheduling management
            </li>
            <li>provides UX dedicated to scheduling</li>
          </ul>
        }
      />
      <EnterpriseCard
        front={"Database Audit"}
        back={
          <ul>
            <li>enables auditing via user interface</li>
            <li>view audit results via user interface</li>
          </ul>
        }
      />
      <EnterpriseCard
        front={"SQL Monitoring"}
        back={
          <ul>
            <li>collects query statistics required for performance analysis</li>
            <li>extracts monitoring results in query</li>
          </ul>
        }
      />
      <EnterpriseCard
        front={"Performance Managment"}
        back={
          <ul>
            <li>monitors and collects operation status & statistical data</li>
            <li>provides status reports required for improving performance</li>
          </ul>
        }
      />
    </>
  );
};

export default EnterpriseCards;
