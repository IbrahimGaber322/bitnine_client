import Feature from "./Feature";
import DataReduction from "../../../images/Data-Redaction.png";
import Auditioning from "../../../images/Auditing.png";
import PasswordProfile from "../../../images/Password-Profile.png";

const Features = () => {
  return (
    <>
      <Feature image={PasswordProfile}>
        <ul>
          <li>User password policy reinforces login security</li>
          <li>Excessive failed login attempts lock an account</li>
          <li>Define rules for password complexity</li>
        </ul>
      </Feature>
      <Feature image={DataReduction}>
        <ul>
          <li>enhanced data security of user personal information</li>
          <li>resolve privacy issues in preparation for security audits</li>
          <li>encryption or masking with unidentifiable special characters</li>
        </ul>
      </Feature>
      <Feature image={Auditioning}>
        <ul>
          <li>monitors database activities and collects data</li>
          <li>
            traces object accessed or DDL & DML statements executed by a user
          </li>
          <li>records all actions in logs</li>
        </ul>
      </Feature>
    </>
  );
};

export default Features;
