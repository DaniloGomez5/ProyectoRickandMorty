import Card from '../Card/Card';



export default function Cards(props) {
   const { characters } = props;
   
   return (
      <div style={{
         margin: 100,
         display: 'flex',
         maxWidth: '100%',
         flexWrap: 'wrap',
         padding:'10px'
      }}>
         {characters.map((personaje) => {
            const {
               id,
               name,
               status,
               species,
               gender,
               origin,
               image
            } = personaje;

            return (
               <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={props.onClose}
               />
            )
         })}
      </div>
   );
}
