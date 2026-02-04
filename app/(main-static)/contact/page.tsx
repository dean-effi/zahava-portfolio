import Image from "next/image";
import phone from "../../assets/contact.webp";

export default function page() {
  return (
    <main className="mt-10 flex flex-col items-center justify-center gap-13 px-11 text-lg font-medium md:mt-12 md:mb-12 md:gap-15 md:text-2xl lg:mb-0 lg:ml-[130px] lg:flex-row lg:gap-18 lg:text-[26px] xl:px-20">
      <Image
        width={400}
        className="w-full max-w-[400px]"
        src={phone}
        alt="an illustration of a phone booth"
        priority
      />

      <div className="space-y-2 md:space-y-3">
        <h1 className="font-semibold">Contact Me:</h1>
        <dl className="space-y-2 md:space-y-3">
          <div className="flex gap-2">
            <dt className="font-bold">Email:</dt>{" "}
            <dd>
              <a
                href="mailto:zahava2k3@gmail.com"
                className="underline focus:outline-2 focus:outline-offset-4">
                zahava2k3@gmail.com
              </a>
            </dd>
          </div>
          <div className="flex flex-wrap gap-2">
            <dt className="font-bold">Phone Number:</dt>{" "}
            <dd>
              <a
                href="tel:+972533231344"
                className="underline focus:outline-2 focus:outline-offset-4">
                +972-53-323-1344
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-bold">Based In:</dt>
            <dd> Beit Shemesh, Israel</dd>
          </div>
        </dl>
      </div>
    </main>
  );
}
