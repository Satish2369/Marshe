import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[90px] min-h-screen flex flex-col items-center pb-3 gap-1 bg-black">
      
      {/* Logo Section */}
      <div>
        <Image
          src="/logo_marshee_transparent.png"
          width={96}
          height={70}
          alt="home"
          className="bg-transparent opacity-40"
        />
      </div>

      {/* Menu Items */}
      <div className="bg-[#adc3ff] cursor-pointer">
        
        {/* Home */}
        <Link href="/">
          <div className="w-[96px] h-[84px] flex flex-col justify-center items-center hover:bg-[#95abde] transition-all duration-200">
            <Image src="/home-button1.svg" width={50} height={50} alt="home" />
            <span className="text-[10px] text-white">home</span>
          </div>
        </Link>

        {/* Community */}
        <Link href="/community">
          <div className="w-[96px] h-[84px] flex flex-col justify-center items-center hover:bg-[#95abde] transition-all duration-200">
            <Image src="/community.svg" width={50} height={50} alt="community" />
            <span className="text-[10px] text-white">community</span>
          </div>
        </Link>

        {/* Store */}
        <Link href="/marketplace">
          <div className="w-[96px] h-[84px] flex flex-col justify-center items-center hover:bg-[#95abde] transition-all duration-200">
            <Image src="/marketplace.svg" width={50} height={50} alt="marketplace" />
            <span className="text-[10px] text-white">store</span>
          </div>
        </Link>

        {/* Petcare */}
        <Link href="/services">
          <div className="w-[96px] h-[84px] flex flex-col justify-center items-center hover:bg-[#95abde] transition-all duration-200">
            <Image src="/services.svg" width={50} height={50} alt="petcare" />
            <span className="text-[10px] text-white">petcare</span>
          </div>
        </Link>

        {/* My Pets */}
        <Link href="/mypets">
          <div className="w-[96px] h-[84px] flex flex-col justify-center items-center hover:bg-[#95abde] transition-all duration-200">
            <Image src="/mypets.svg" width={50} height={50} alt="mypets" />
            <span className="text-[10px] text-white">mypets</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;