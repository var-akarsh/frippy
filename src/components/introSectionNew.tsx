import React from "react";
import { Grid2, Stack, Typography } from "@mui/material";
import myImage from "../../public/images/check.png";
import flexibleTiming from "../../public/images/happy-hour.png";
import Interaction from "../../public/images/interactive.png";
import Image from "next/image";

const introSectionNew = () => {
  const items = [
    {
      title: "Seamless Onboarding",
      subtitle:
        "Effortlessly become a mentor in just a few straightforward steps. Our simple process ensures you can get started quickly and easily.",
      image: myImage,
    },
    {
      title: "Flexible Scheduling",
      subtitle:
        "Choose convenient times to mentor students. Our platform fits your availability, making mentoring easy to schedule.",
      image: flexibleTiming,
    },
    {
      title: "Direct Interaction",
      subtitle:
        "Engage with your future peers through one-on-one interactions. Build meaningful relationships and provide tailored guidance.",
      image: Interaction,
    },
  ];

  return (
    <Stack
      direction="column"
      spacing={4}
      justifyContent="center"
      alignItems="center"
      sx={{ p: 4 }}
    >
      <Stack
        direction={{
          xs: "column",
        }}
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            color: "text.primary",
            fontWeight: "bold",
            fontSize: "2.5rem",
            lineHeight: "3rem",
            letterSpacing: "0.01em",
          }}
        >
          Why Frippy?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            maxWidth: "600px",
            color: "text.secondary",
            fontWeight: "light",
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            letterSpacing: "0.01em",
          }}
        >
          At Fripy, we make protecting and personalizing your smartphone simple
          and hassle-free. Our mission is to provide top-quality screen
          protectors and back cases delivered right to your doorstep, saving you
          time and effort. With Fripy, you get trusted products, reliable
          service, and the convenience of never having to leave your home.
          Choose Fripy for a seamless mobile accessory shopping experience!
        </Typography>
      </Stack>
      <Grid2
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{
          width: "100%",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {items.map((item, index) => (
          <Grid2
            key={index}
            size={{
              xs: 12,
              sm: 4,
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              height: "100%",
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
              className="w-16 h-16"
            />
            <p className="font-bold mt-2 font-gilroy-bold text-center">
              {item.title}
            </p>
            <p className="text-slate-500 text-sm mt-1 text-center font-gilroy-light">
              {item.subtitle}
            </p>
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
};

export default introSectionNew;
