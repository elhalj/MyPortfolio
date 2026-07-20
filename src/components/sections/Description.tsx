import React from "react";
import Experience from "./Experience";
import Formation from "./Formation";
import ProfilePro from "./ProfilePro";
import VueEnsemble from "./VueEnsemble";
import ScrollAnimation from "../ui/ScrollAnimation";

function Description() {
    return (
        <ScrollAnimation animation="fade-up">
            <section className="md:mt-[100px]">
                <div className="flex flex-col gap-4 m-4 md:m-4">
                    {/* profil profesionnel */}
                    <ScrollAnimation animation="fade-right">
                        <ProfilePro />
                    </ScrollAnimation>
                    {/* vue d'ensemble */}
                    <ScrollAnimation animation="fade-right">
                        <VueEnsemble />
                    </ScrollAnimation>
                    {/* experience */}
                    {/* <Experience /> */}
                    {/* formation */}
                    <ScrollAnimation animation="fade-right">
                        <Formation />
                    </ScrollAnimation>
                </div>
            </section>
        </ScrollAnimation>
    );
}

export default Description;
