import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Alert,
  Button,
  Snackbar,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Link from "next/link";
import ProductSpa from "@/spas/productsSpa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <ProductSpa />;
}
