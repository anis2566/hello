import Image from "next/image";
import Link from "next/link";

interface LgogProps {
  label?: string;
}

export const Logo = ({ label }: LgogProps) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.svg" alt="logo" width={30} height={30} />
      <span className="hidden sm:flex font-bold text-primary dark:text-accent-foreground">
        {label}
      </span>
    </Link>
  );
};
