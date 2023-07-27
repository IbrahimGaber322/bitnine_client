import React from "react";
import { Container, Grid, Button, Typography, Box } from "@mui/material";
import AgensSQL from "../images/AgenSQL-Logo.png";
import Diagram from "../images/img_diagram_eng-e1651143428347.png";
import Paragraph from "../components/Paragraph";
import KeyFeatures from "../images/img_key-features_eng-1024x402.png";
import Features from "../components/home/features/Features";
import AHM from "../images/img_AHM_eng-1024x922.png";
import EnterpriseCards from "../components/home/enterprise/EnterpriseCards";
const Home = ({ kor }) => {
  return (
    <Container maxWidth={false} disableGutters>
      <Container
        id="home"
        maxWidth={false}
        disableGutters
        sx={{
          px: {
            xs: "15px",
            md: "25px",
          },
          py: "80px",
        }}
      >
        <Grid
          container
          sx={{
            py: {
              xs: "25px",
              sm: "32.5px",
              md: "40px",
              lg: "60px",
            },
          }}
        >
          <Grid
            item
            xs={12}
            sx={{ mb: "1.5rem", display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{ maxWidth: "100%", height: "auto" }}
              component={"img"}
              src={AgensSQL}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h3"
              sx={{ mx: "auto", mt: 0, mb: "10px", width: "fit-content" }}
            >
              {kor
                ? "비트나인의 DB 기술과 PG 전문성의 융합"
                : "An integration of Bitnine’s DB technology and PG expertise"}
            </Typography>
            <Paragraph>
              {kor
                ? "AgensSQL은 수년간의 전문성을 갖춘 PostgreSQL 기반의 완전히 새로운 관계형 DBMS입니다.\n" +
                  "데이터베이스 연구 개발을 통해 축적된 지식."
                : "AgensSQL is an all-new relational DBMS based on PostgreSQL, with years of expertise \n and knowledge accumulated through database research and development."}
            </Paragraph>
            <Paragraph>
              {kor
                ? "엔터프라이즈 패키지는 AgensSQL 엔진과 함께 \n" +
                  "데이터 관리의 효율성과 확장성."
                : "The enterprise package, along with AgensSQL engine, is an" +
                  "all-in-one solution that \n ensures the efficiency and" +
                  "scalability of data management."}
            </Paragraph>
            <Paragraph>
              {kor
                ? "저렴한 비용으로 안정적인 운영 및 관리 서비스를 위해 지금 AgensSQL을 받으세요. \n" +
                  "유지 보수 비용."
                : "Get AgensSQL now for stable operation and management services at a" +
                  "reduced \n maintenance cost."}
            </Paragraph>
          </Grid>
        </Grid>
        <Grid container display={"flex"} justifyContent={"center"}>
          <Grid
            item
            sx={{
              width: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <Button className="slide" sx={{ m: 1 }} variant="contained">
              CONTACT
            </Button>
            <Button className="slide" sx={{ m: 1 }} variant="contained">
              {kor ? "브로슈어" : "BROCHURE"}
            </Button>
            <Button className="slide" sx={{ m: 1 }} variant="contained">
              {kor ? "블로그" : "BLOG"}
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "rgb(243, 246, 251)",
          py: 10,
          px: 3,
        }}
        maxWidth={false}
        disableGutters
      >
        <Box
          sx={{ maxWidth: "100%", height: "auto" }}
          component={"img"}
          src={Diagram}
        />
      </Container>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          py: "80px",
          px: "2.5rem",
          textAlign: "center",
        }}
      >
        <Grid item mb={2} xs={12}>
          <Typography
            variant="h2"
            sx={{ mx: "auto", mt: 0, mb: "15px", width: "fit-content" }}
          >
            {kor ? "주요 기능" : "Key features"}
          </Typography>
          <Paragraph>
            {kor
              ? "Agens Enterprise Package로 데이터 관리 \n" +
                "고가용성 및 샤딩과 같은 필수 엔터프라이즈 기능 제공"
              : "Manage your data with Agens Enterprise Package \n" +
                "Essential enterprise features such as high availability and sharding" +
                "are provided"}
          </Paragraph>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{ maxWidth: "100%", height: "auto" }}
            component={"img"}
            src={KeyFeatures}
          />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          py: "80px",
          px: "2.5rem",
          bgcolor: "rgb(243, 246, 251)",
          textAlign: "center",
        }}
      >
        <Grid item mb={2} xs={12}>
          <Typography
            variant="h2"
            sx={{ mx: "auto", mt: 0, mb: "15px", width: "fit-content" }}
          >
            {kor ? "AgensSQL DB 엔진" : "AgensSQL DB Engine"}
          </Typography>
          <Typography variant="h5" sx={{ textDecoration: "underline", my: 3 }}>
            {kor ? "향상된 데이터 보안" : "Enhanced Data Security"}
          </Typography>
          <Paragraph sx={{ py: 2 }}>
            {kor
              ? "AgensSQL은 PostgreSQL 기반 DBMS입니다. \n 최적의 보안과 안정성을 보장합니다."
              : "AgensSQL is a PostgreSQL-based DBMS \n that guarantees optimal security and stability."}
          </Paragraph>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container sx={{ maxWidth: "1100px" }}>
            <Features />
          </Grid>
        </Grid>
      </Grid>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          py: "80px",
          px: "2.5rem",
          textAlign: "center",
          maxWidth: "1100px",
        }}
      >
        <Typography variant="h2" mb={2}>
          {kor ? "에이젠스 엔터프라이즈 패키지" : "Agens Enterprise Package"}
        </Typography>
        <Paragraph>
          {kor
            ? "Agens Enterprise Package는 고가용성 관리 서버와 함께 제공됩니다. \n 기업 고객이 데이터를 효율적으로 관리할 수 있도록 백업 및 데이터 모니터링 대시보드를 지원합니다."
            : "Agens Enterprise Package comes with a high availability management server that \n supports backup and data monitoring dashboard that helps enterprise customers manage their data efficiently."}
        </Paragraph>

        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography mb={3} variant="h5">
              {kor ? "에이젠스 HA 매니저" : "Agens HA Manager"}
            </Typography>

            <Typography mb={2} variant="h5" sx={{ fontWeight: 400 }}>
              {kor ? (
                <>
                  <span style={{ color: "#0082cb" }}>HA 클러스터링</span> –
                  Failover/Failback, 로드밸런싱
                </>
              ) : (
                <>
                  <span style={{ color: "#0082cb" }}>HA Clustering</span> –
                  Failover/Failback, Load-balancing
                </>
              )}
            </Typography>

            <Box
              sx={{
                mb: "1.5rem",
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {" "}
              <Box
                sx={{ maxWidth: "100%", height: "auto" }}
                component={"img"}
                src={AHM}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item mb={3} xs={12}>
                <Typography variant="h5">
                  {kor ? (
                    <>에이젠스 엔터프라이즈 매니저</>
                  ) : (
                    <>Agens Enterprise Manager</>
                  )}
                </Typography>
              </Grid>
              <EnterpriseCards kor={kor} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Home;
