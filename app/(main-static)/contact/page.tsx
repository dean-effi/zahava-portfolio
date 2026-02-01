import Image from "next/image";
import phone from "../../assets/contact.webp";

export default function page() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-13 px-11 text-lg font-medium md:mt-12 md:mb-12 md:gap-15 md:text-2xl lg:mb-0 lg:ml-[130px] lg:flex-row lg:gap-18 lg:text-[26px] xl:px-20">
      <Image
        width={400}
        className="w-full max-w-[400px]"
        src={phone}
        alt=""
        priority
      />

      <div className="space-y-2 md:space-y-3">
        <h2 className="font-semibold">Contact Me:</h2>
        <div className="space-y-2 md:space-y-3">
          <p>
            <span className="font-bold">Email:</span>{" "}
            zahava2k3@gmail.com
          </p>
          <p>
            <span className="font-bold">Phone Number:</span>{" "}
            +972-53-323-1344
          </p>
          <p>
            <span className="font-bold">Based In:</span> Beit Shemesh,
            Israel
          </p>
        </div>
      </div>
    </div>
  );
}
