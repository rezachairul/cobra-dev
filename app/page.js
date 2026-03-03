// This file is a part of the Next.js application and serves as the main entry point for the home page.
import { redirect } from "next/navigation";

export const metadata = {
  title: "Home | CobraDev",
  description: "CobraDev - Portfolio of Reza Chairul, a GIS and Web Developer",
};

export default function Home() {
  redirect("/maintenance");
}