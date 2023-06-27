import Card from './Card';

export default function Cards({characters}) {
   return (
   <div>
         {
            characters.map(({id, name, gender, status, species, origin, image}) =>{
      return (
         <Card
         key={id}
         id={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         origin={origin.name}
         status={status}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      )
   })
}
   </div>)
}
