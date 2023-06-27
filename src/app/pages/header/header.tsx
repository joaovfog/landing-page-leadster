import Image from "next/image";

import { Main } from "./styles";

export default function Header() {
    return (
        <Main>
            <Image src="/assets/logo.png" alt={"company logo"} width={"105"} height={"25"} />
        </Main>
    )
}