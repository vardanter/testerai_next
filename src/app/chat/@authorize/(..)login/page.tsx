import Authorization from "@/components/authorization"
import AuthModal from "@/components/modal/authModal"

const Auth = () => {
    return (
        <AuthModal>
            <Authorization mode="login" />
        </AuthModal>
    )
}

export default Auth