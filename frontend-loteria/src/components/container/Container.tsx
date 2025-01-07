/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Container.css";


function Container({children}: any){
    return (
        <section className="container">
            {children}
        </section>
    )    
}

export default Container