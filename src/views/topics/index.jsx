import React from "react";
import MenuSistema from "../../menuSistema";
import Sidebar from "../../components/Sidebar";
import './index.css'

export default function Home() {

    return (
        <main>
            <MenuSistema />
            <div style={{ display: 'flex' }}>
                <Sidebar />
            </div>
        </main>
    );
}
