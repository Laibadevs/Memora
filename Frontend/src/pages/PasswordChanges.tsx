import { CheckCircle2 } from "lucide-react";
import PlainAuthLayout from "../layout/PlainAuthLayout";
import SuccessCard from "../components/auth/SuccessCard";

export default function PasswordChangedPage() {
    return (
        <PlainAuthLayout>
            <SuccessCard
                icon={<CheckCircle2 size={22} />}
                accentColor="#4ade80"
                title="Password reset"
                message="Your password has been updated. You can now log in with your new password."
                ctaLabel="Log in"
                ctaTo="/login"
            />
        </PlainAuthLayout>
    );
}
