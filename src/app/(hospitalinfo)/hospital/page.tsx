import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/lib/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default async function hospitalInfo() {
  const hospitals = await getHospitals();
  return (
    <main>
      {/* <CardPanel /> */}

      <Suspense
        fallback={
          <p>
            Loading...
            <LinearProgress />
          </p>
        }
      >
        <HospitalCatalog hospitalsJson={hospitals} />
      </Suspense>
    </main>
  );
}
