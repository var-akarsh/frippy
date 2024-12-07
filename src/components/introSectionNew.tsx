import React from "react";
import { Grid2, Stack, Typography } from "@mui/material";
import myImage from "../../public/images/check.png";
import flexibleTiming from "../../public/images/happy-hour.png";
import Interaction from "../../public/images/interactive.png";
import yus from "../../public/images/whyUs.png";
import Image from "next/image";
import "./divider.css";

const introSectionNew = () => {
  const items = [
    {
      title: "Same-Day Delivery",
      subtitle:
        "Receive your mobile accessories at your doorstep on the same day for maximum convenience.",
      image: myImage,
    },
    {
      title: "Doorstep Installation",
      subtitle:
        "Our experts will install screen protectors right at your home, ensuring a perfect fit and bubble-free application.",
      image: flexibleTiming,
    },
    {
      title: "Affordable Pricing",
      subtitle:
        "Enjoy top-notch mobile accessories at budget-friendly prices, without compromising on quality.",
      image: Interaction,
    },
  ];

  const leftItem = {
    title: "Premium Quality Products",
    subtitle:
      "Receive your mobile accessories at your doorstep on the same day for maximum convenience.",
    image: yus,
  };

  return (
    <Stack
      direction="column"
      spacing={4}
      justifyContent="center"
      alignItems="center"
      sx={{
        p: 4,
        paddingBottom: 20,
        position: "relative",
      }}
    >
      <div className="custom-shape-divider-bottom-1733568657">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <Stack
        direction={{
          xs: "column",
        }}
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          justifyContent="center"
          alignItems="center"
          spacing={10}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            textAlign: "center",
            width: "100%",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <Image
            src={leftItem.image}
            alt={leftItem.title}
            width={200}
            height={200}
            className="hidden lg:block pt-16"
          />
          <Stack
            direction="column"
            justifyContent={{
              xs: "center",
              sm: "flex-start",
            }}
            alignItems={{
              xs: "center",
              sm: "flex-start",
            }}
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
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
                textAlign: {
                  xs: "center",
                  sm: "left",
                },
                maxWidth: "600px",
                color: "text.secondary",
                fontWeight: "light",
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                letterSpacing: "0.01em",
              }}
            >
              At Fripy, we make protecting and personalizing your smartphone
              simple and hassle-free. Our mission is to provide top-quality
              screen protectors and back cases delivered right to your doorstep,
              saving you time and effort. With Fripy, you get trusted products,
              reliable service, and the convenience of never having to leave
              your home. Choose Fripy for a seamless mobile accessory shopping
              experience!
            </Typography>
          </Stack>
        </Stack>
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
          height: "100%",
          paddingTop: {
            xs: 0,
            sm: 5,
          },
        }}
      >
        {items.map((item, index) => (
          <Grid2
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
              padding: "20px",
              height: "240px",
              width: "100%",
              gap: "10px",
              paddingX: {
                xs: "40px",
                sm: "40px",
              },
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
              className="w-16 h-16"
            />
            <p className="font-bold font-gilroy-bold text-center">
              {item.title}
            </p>
            <p className="text-slate-500 text-sm mt-2 text-center font-gilroy-light">
              {item.subtitle}
            </p>
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
};

export default introSectionNew;
