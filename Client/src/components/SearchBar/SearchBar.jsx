import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');
   const handleOnChange = (e) => {
      setId(e.target.value);
   }

   const handleSearch = () => {
      onSearch(id);
      setId('');
   }
   
   return (
      <div
         style={{
            display: 'flex',
            margin: 10,
            width: '100%',
            justifyContent: 'center',
         }}
         >
         <input 
            type='search' 
            placeholder='Busca un personaje'
            style={{
               border: '5px black',
               borderRadius: '10px',
               width: '20%',
               backgroundColor: '#ffffffd7',
               boxShadow: '5px 5px 5px 0px #00C957'
            }}
            onChange={handleOnChange}
            value={id}
         />
         <button 
            style={{
               height: 40, 
               borderRadius: '10px',
               backgroundColor: '#ffffffd7',
               border:'5px black',
               boxShadow: '5px 5px 5px 0px #00C957',
               cursor: 'pointer'
            }}
            onClick={handleSearch}
         >
            Buscar
         </button>
      </div>
   );
}