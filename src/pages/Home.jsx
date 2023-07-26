import React from "react";
import {
  Container,
  Grid,
  Button,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AgensSQL from "../images/AgenSQL-Logo.png";
import Diagram from "../images/img_diagram_eng-e1651143428347.png";
import Paragraph from "../components/Paragraph";
import KeyFeatures from "../images/img_key-features_eng-1024x402.png";
import Features from "../components/home/features/Features";
import AHM from "../images/img_AHM_eng-1024x922.png";
import EnterpriseCards from "../components/home/enterprise/EnterpriseCards";
const Home = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Container
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
              An integration of Bitnine’s DB technology and PG expertise
            </Typography>
            <Paragraph>
              AgensSQL is an all-new relational DBMS based on PostgreSQL, with
              years of expertise <br /> and knowledge accumulated through
              database research and development.
            </Paragraph>
            <Paragraph>
              The enterprise package, along with AgensSQL engine, is an
              all-in-one solution that <br /> ensures the efficiency and
              scalability of data management.
            </Paragraph>
            <Paragraph>
              Get AgensSQL now for stable operation and management services at a
              reduced <br />
              maintenance cost.
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
              BROCHURE
            </Button>
            <Button className="slide" sx={{ m: 1 }} variant="contained">
              BLOG
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
            Key features
          </Typography>
          <Paragraph>
            Manage your data with Agens Enterprise Package <br />
            Essential enterprise features such as high availability and sharding
            are provided
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
            AgensSQL DB Engine
          </Typography>
          <Typography variant="h5" sx={{ textDecoration: "underline", my: 3 }}>
            Enhanced Data Security
          </Typography>
          <Paragraph sx={{ py: 2 }}>
            AgensSQL is a PostgreSQL-based DBMS
            <br />
            that guarantees optimal security and stability.
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
          Agens Enterprise Package
        </Typography>
        <Paragraph>
          Agens Enterprise Package comes with a high availability management
          server that <br />
          supports backup and data monitoring dashboard that helps enterprise
          customers manage their data efficiently.
        </Paragraph>

        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography mb={3} variant="h5">Agens HA Manager</Typography>

            <Typography mb={2} variant="h5" sx={{ fontWeight: 400 }}>
              <span style={{ color: "#0082cb" }}>HA Clustering</span> –
              Failover/Failback, Load-balancing
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
            <Grid container >
              <Grid item mb={3} xs={12}>
                <Typography variant="h5">Agens Enterprise Manager</Typography>
              </Grid>
              <EnterpriseCards />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Home;
