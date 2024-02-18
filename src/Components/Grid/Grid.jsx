
 import axios from "axios"
 
import { useState,useCallback,useEffect } from "react"
import { Paginacion } from "../Pajinacion/Paginacion"
import { Spinner } from "../Iconos/Spinner"
export const Grid = () => {
    const [data, setData]=useState([])
    const [page, setPage]=useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const [numPage, setNumPage]=useState(0)

    //const url = 'https://rickandmortyapi.com/api/character/?page=19'

    const fetch = useCallback(async () => {
        try{
          if (data) {
            setIsLoading(true)
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
            setData(response.data.results)
            setNumPage(response.data.info.pages)
            setIsLoading(false)
          }
        }catch (err){
            console.log("err")
        }
    }, [page]);

     

useEffect(() =>{
    fetch();
},[fetch]);


console.log(data)
 
  return (
    <div> 

      <h2 id="titulo" className="text-center mb-4 mt-4 text-white">Rick y Morty</h2>

          

     <div className="container">
     {isLoading ? (
      <Spinner/>
      ) : ( 
        <div className="row">
        <Paginacion   page={page}  setPage={setPage} numPage={numPage}/>
      {
        data.map((datos) => (
            <div key={datos.id} className="col-lg-3  col-sm-12 mb-4">
              <div  className="card"  style={{ minWidth: "200px", borderRadius: "2%" }}> 
                 <img className="card-img-top" style={{ borderRadius: "2%" }}  src={datos.image} alt="" />

                    <div className="card-body" style={{backgroundColor:"#363636"}}>
                      <h4 className="card-title text-white">{datos.name}</h4>
                      <p className="card-text text-white"><strong> species:  </strong>{datos.species}</p>
                      <p className="text-white" ><strong>origin:  </strong>{datos.origin.name}</p>
                      <p className="card-text text-white"><strong>status:  </strong>{datos.status}</p>
                       
                    </div>
              </div>
            </div>
        ))
        }
     <Paginacion   page={page}  setPage={setPage} numPage={numPage}/>
      
  </div>
  )}
</div>
    </div>
  )
}


