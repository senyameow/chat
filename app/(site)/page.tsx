import Image from "next/image";
import { AuthForm } from "./_components/AuthForm";

export default function Home() {
  return (
    <div className="flex h-full bg-white w-full flex-col justify-center items-center">
      <div className="sm:w-full sm:max-w-md mx-auto flex justify-center flex-col items-center gap-4">
        <Image src={'/images/ameameame.jpg'} alt="" width={80} height={80} className="rounded-full aspect-square" />
        <h3 className="text-3xl font-bold text-gray-900">Sign in into your account</h3>
        <AuthForm />
      </div>
    </div>
  )
}
