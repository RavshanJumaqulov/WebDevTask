import {
  CheckIcon,
  FolderIcon,
  HomeIcon,
  PenIcon,
  RightArrowIcon,
  SettingIcon,
  StarMedalIcon,
  Swallow,
  UserIcon,
} from "../../Icons";
import { Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import AppBarItem from "./AppBarItem";
import useVisiblity from "../../hooks/useVisiblity";

export default function AppBar() {
  const tooggleIcon = useVisiblity();
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        onClick={() => tooggleIcon.show()}
        sx={{
          width: "100%",
          display: {
            xs: tooggleIcon.visiblity ? "block" : "none",
            sm: "none",
          },
          height: "100%",
          background: "#0000003f",
          position: "fixed",
          backdropFilter: "blur(10px) !important",
          zIndex: 199,
        }}
      />
      <Stack
        sx={{
          background: "hsla(0,0%,100%,.05)",
          backdropFilter: "blur(20px)",
          position: "fixed",
          width: "100%",
          top: 0,
          mt: 0,
          zIndex: 199,
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            width: { xs: "100%", sm: "calc(100% - 80px)" },
            ml: { sm: 10 },
            mt: { sm: 2 },
          }}
        >
          <Toolbar sx={{ width: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  py: 1,
                  width: {
                    xs: tooggleIcon.visiblity ? 0 : "auto",
                    sm: "auto",
                    md: tooggleIcon.visiblity ? 0 : "auto",
                  },
                  transition: "0.3s all",
                  overflow: "hidden",
                }}
              >
                <Swallow sx={{ height: 54, width: 50 }} />
                <Typography
                  variant="subtitle2"
                  sx={{
                    whiteSpace: "nowrap",
                    ml: 1,
                    color: "#fff",
                    fontWeight: 700,
                    cursor: "default",
                    "&:hover": { color: "#fff" },
                    "& span": {
                      color: "#FF5C00",
                    },
                  }}
                >
                  <span>Qizil</span> qaldirg'och
                </Typography>
              </Box>
              <IconButton
                onClick={() => tooggleIcon.toggle()}
                sx={{ display: { xs: "flex", sm: "none" } }}
              >
                <SettingIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Stack>
      </Stack>
      <Box
        sx={{
          width: { xs: 264, sm: 64, md: !tooggleIcon.visiblity ? 64 : 264 },
          height: { xs: "100vh", sm: "calc(100vh - 32px)" },
          top: { xs: 0, sm: 16 },
          left: { xs: 0, sm: 8 },
          position: "fixed",
          transition: "0.3s all",
          transform: {
            xs: !tooggleIcon.visiblity ? "translateX(-100%)" : "translateX(0)",
            sm: "none",
          },
          zIndex: 200,
        }}
      >
        <IconButton
          onClick={() => tooggleIcon.hide()}
          size="small"
          sx={{
            display: {
              xs: tooggleIcon.visiblity ? "flex" : "none",
              sm: "none",
            },
            background: "#FF5C00",
            position: "absolute",
            width: 40,
            height: 40,
            borderRadius: 3,
            right: -15,
            top: 10,
            zIndex: 1,
            transition: "0.3s all",
            transform: "rotate(180deg)",
            "&:hover": {
              background: "#ff7434",
            },
          }}
        >
          <RightArrowIcon sx={{ width: 20, height: 20 }} />
        </IconButton>
        <IconButton
          onClick={() => tooggleIcon.toggle()}
          size="small"
          sx={{
            display: { xs: "none", md: "flex" },
            background: "#FF5C00",
            position: "absolute",
            width: 40,
            height: 40,
            right: -20,
            borderRadius: 3,
            top: 50,
            zIndex: 1,
            transition: "0.3s all",
            transform: !tooggleIcon.visiblity
              ? "rotate(360deg)"
              : "rotate(180deg)",
            "&:hover": {
              background: "#ff7434",
            },
          }}
        >
          <RightArrowIcon sx={{ width: 20, height: 20 }} />
        </IconButton>
        <Box
          sx={{
            py: 2,
            width: "100%",
            height: "100%",
            position: "relative !important",
            background: "hsla(0,0%,100%,.05)",
            backdropFilter: "blur(10px)",
            borderRadius: 3,
              overflow: "hidden",
          }}
        >
          <Stack direction={"column"}>
            <Box
              sx={{
                width: "100%",
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                mb: 3,
                px: 1,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Swallow
                sx={{
                  color: "#FF5C00",
                  width: 54,
                  height: 54,
                  transition: "0.3s all",
                  "&:hover": {
                    color: "#FF5C00",
                  },
                }}
              />
              <Typography
                variant="subtitle2"
                sx={{
                  whiteSpace: "nowrap",
                  ml: 1,
                  color: "#fff",
                  fontWeight: 700,
                  cursor: "default",
                  "&:hover": { color: "#fff" },
                  "& span": {
                    color: "#FF5C00",
                  },
                }}
              >
                <span>Qizil</span> qaldirg'och
              </Typography>
            </Box>
            <AppBarItem
              name="Asosiy"
              path="/"
              show={!tooggleIcon.visiblity}
              icon={
                <HomeIcon
                  sx={{
                    color: "hsla(0,0%,100%,.6)",
                    width: "28px",
                    height: "28px",
                    transition: "0.3s all",
                    "&:hover": {
                      color: "#FF5C00",
                    },
                  }}
                />
              }
            />
            <AppBarItem
              name="Barcha postlar"
              path="/posts"
              show={!tooggleIcon.visiblity}
              icon={
                <FolderIcon
                  sx={{
                    color:
                      "hsla(0,0%,100%,.6)",
                    width: "28px",
                    height: "28px",
                    transition: "0.3s all",
                    "&:hover": {
                      color: "#FF5C00",
                    },
                  }}
                />
              }
            />
            <AppBarItem
              name="Barcha rasmlar"
              path="/photos"
              show={!tooggleIcon.visiblity}
              icon={
                <CheckIcon
                  sx={{
                    color:
                      "hsla(0,0%,100%,.6)",
                    width: "28px",
                    height: "28px",
                    transition: "0.3s all",
                    "&:hover": {
                      color: "#FF5C00",
                    },
                  }}
                />
              }
            />
            <AppBarItem
              name="Barcha commentlar"
              path="/comments"
              show={!tooggleIcon.visiblity}
              icon={
                <PenIcon
                  sx={{
                    color:
                      "hsla(0,0%,100%,.6)",
                    width: "28px",
                    height: "28px",
                    transition: "0.3s all",
                    "&:hover": {
                      color: "#FF5C00",
                    },
                  }}
                />
              }
            />
            <AppBarItem
              name="Barcha albumlar"
              path="/albums"
              show={!tooggleIcon.visiblity}
              icon={
                <StarMedalIcon
                  sx={{
                    color:
                      "hsla(0,0%,100%,.6)",
                    width: "28px",
                    height: "28px",
                    transition: "0.3s all",
                    "&:hover": {
                      color: "#FF5C00",
                    },
                  }}
                />
              }
            />
            <AppBarItem
              name="Barcha userlar"
              path="/user"
              show={!tooggleIcon.visiblity}
              icon={
                <UserIcon
                  sx={{
                    color:
                      "hsla(0,0%,100%,.6)",
                    width: "28px",
                    height: "28px",
                    transition: "0.3s all",
                    "&:hover": {
                      color: "#FF5C00",
                    },
                  }}
                />
              }
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
