"use client";

import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { logoutUser } from "../../services/authService";
import { deleteCookie, getCookie } from "../../utils/genericUtils";
import { setUserSessionData } from "../../redux/slices/userSessionDataSlice";

const LogoutPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const userId = JSON.parse(getCookie("session") || "{}")?.userData?.id;
    await logoutUser(userId);
    dispatch(setUserSessionData({ session: {} }));
    deleteCookie("session");
    deleteCookie("authToken");
    router.replace("/login");
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f7fb",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 420,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Stack spacing={2.5} alignItems="center">
            <Box
              sx={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#E3F2FD",
              }}
            >
              <LogoutOutlinedIcon
                sx={{
                  fontSize: 36,
                  color: "#1976D2",
                }}
              />
            </Box>

            <Typography variant="h5" fontWeight={600} textAlign="center">
              Sign Out
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
            >
              Are you sure you want to sign out of your account?
            </Typography>

            <Stack direction="row" spacing={2} width="100%">
              <Button
                fullWidth
                variant="outlined"
                startIcon={<ArrowBackOutlinedIcon />}
                onClick={handleCancel}
              >
                Cancel
              </Button>

              <Button
                fullWidth
                variant="contained"
                color="error"
                startIcon={<LogoutOutlinedIcon />}
                onClick={handleLogout}
              >
                Sign Out
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LogoutPage;
