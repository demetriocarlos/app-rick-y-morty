
import styles from './paginacion.module.css'

import { Left } from '../Iconos/Arrows'
import { Right } from '../Iconos/Arrows'
 
 export const Paginacion = ({ page,setPage,numPage}) => {

    

   return (
     <div >
         
            <nav className="d-flex justify-content-between align-items-center mb-4 mt-4">

                {
                    page > 1 && (
                         
                            <a href="#titulo"> 
                            <button className={`${styles.boton} btn text-white btn-sm`} onClick={ () => setPage(page - 1)}>
                                {/**left */}
                                <Left />
                            </button>
                            </a>
                         
                    ) 
                }

                {page  < numPage  && (<p className="text-white">{page}</p>)}

                {
                      page < numPage && (
                            <a href="#titulo">
                             <button className={`${styles.boton} btn text-white  btn-sm`} onClick={ () => setPage(page + 1)}>
                                 
                                <Right/>
                            </button>
                            </a>
                    ) 
                }
            </nav>
         

     </div>
   )
 }
 