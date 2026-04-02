// app/page.js

import { redirect } from "next/navigation";

const isMaintenance = false; // Ganti ke true untuk mode maintenance

export default function Home() {
  if (isMaintenance) {
    redirect("/maintenance");
  } else {
    redirect("/home");
  }
}