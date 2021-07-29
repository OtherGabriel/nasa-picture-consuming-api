// Home page, your dashboard.

import { Nav } from "../components/NavBar";
import { Sub } from "../components/SubBar";
import { Dashboard } from "../components/Dashboard";

export default function Home() {
  return (
    <>
      <Nav />
      <Sub />
      <Dashboard />
    </>
  )
}
