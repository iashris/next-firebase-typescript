import dynamic from "next/dynamic";

const Auth = dynamic(() => import("./Auth"), { ssr: false });

export default Auth;
