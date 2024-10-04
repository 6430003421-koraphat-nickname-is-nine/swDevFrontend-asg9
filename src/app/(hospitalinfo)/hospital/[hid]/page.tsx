import Image from "next/image";

export default function hospitalDetailPage({
  params,
}: {
  params: { hid: string };
}) {
  /* { hid: "001", name: "Chulalongkorn Hospital", img: "/img/chula.jpg" },
    { hid: "002", name: "Rajavithi Hospital", img: "/img/rajavithi.jpg" },
    {
      hid: "003",
      name: "Thammasat University Hospital",
      img: "/img/thammasat.jpg",
    },*/

  const mockHospitalRepo = new Map();
  mockHospitalRepo.set("001", {
    name: "Chulalongkorn Hospital",
    image: "/img/chula.jpg",
  });
  mockHospitalRepo.set("002", {
    name: "Rajavithi Hospital",
    image: "/img/rajavithi.jpg",
  });
  mockHospitalRepo.set("003", {
    name: "Thammasat University Hospital",
    image: "/img/thammasat.jpg",
  });
  return (
    <main>
      <div className="flex flex-row">
        <Image
          src={mockHospitalRepo.get(params.hid).image}
          alt={mockHospitalRepo.get(params.hid).name}
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-[48px] w-[30%] bg-black"
        />
        <div className="px-[24px] py-[16px]">
          <h1 className="text-[32px] font-bold">
            {mockHospitalRepo.get(params.hid).name}
          </h1>
        </div>
      </div>
    </main>
  );
}
