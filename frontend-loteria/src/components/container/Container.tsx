/* eslint-disable @typescript-eslint/no-explicit-any */
import style from "./Container.module.css"

function Container({children}: any){
    return (
        <section className={style.container}>
            {children}
        </section>
    )    
}

export default Container