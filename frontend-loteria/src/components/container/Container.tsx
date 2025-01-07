<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./Container.module.css"
=======
import "./Container.css";
>>>>>>> f5d880cecba6e9a2fc1a193f5f242006e17a6775

function Container({children}: any){
    return (
        <section className="container">
            {children}
        </section>
    )    
}

export default Container