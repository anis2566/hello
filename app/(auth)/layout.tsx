import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-ful h-screen flex flex-col justify-center items-center space-y-2">
      <div className="w-[100px] h-[100px] bg-slate-200 rounded-full border-2 flex justify-center items-center shadow-md">
        <Image src="/logo.svg" alt="logo" width={80} height={80} priority />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
