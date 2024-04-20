import Authorization from "@/components/authorization"
import AuthModal from "@/components/modal/authModal"

const Auth = () => {
    return (
        <AuthModal>
            <Authorization mode="signup" />
        </AuthModal>
    )
}

export default Auth