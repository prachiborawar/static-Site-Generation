import React, { Children } from "react";
import { Footer } from "@/components/common/Footer";
import NavBar from "@/components/NavBar";

export default function DefaultLayout({ children }) {
    return (
        <>
            <main className='min-h-screen'>
                <NavBar />
                {Children}
            </main>
            <Footer />

        </>

    );
}
