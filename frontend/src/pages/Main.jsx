import CredentialLogin from "../components/CredentialLogin"
import React from "react"
import GmailLogin from "../components/GmailLogin"
import Community from "../components/CommunityChat"

export default function Main() {
    return (
        <>
            <Community />
            <GmailLogin />
            <CredentialLogin />
        </>
    )
}




