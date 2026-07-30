import type { ReactNode } from "react";
import Scene3D from "../assets/Scene3D.png";

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-8">
            <div
                className="
          relative
          w-full
          max-w-6xl
          h-[620px]
          overflow-hidden
          rounded-[32px]
          border border-white/10
          shadow-2xl
        "
            >
                {/* Background Image */}
                <img
                    src={Scene3D}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Login Form */}
                <div className="absolute inset-0 flex items-center justify-end px-16">
                    <div className="w-full max-w-md">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}