import tom from "../img/tom.jpg"
import trump from "../img/donald.jpg"

export const MoodBoardItem = ({color, image, description}) => {
  return(
    <div className="mood-board-item" style={{backgroundColor: color}}>
      <img className="mood-board-image" src={image} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  )
}

export const MoodBoard = () => {
  const objects = [
    {
      id: 1,
      color: "red",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg", 
      description: "forest"
    },
    {
      id: 2,
      color: "purple",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "water"
    },
    {
      id: 3,
      color: "black",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "grass"
    },
    {
      id: 4,
      color: "gray",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTenXzGl--ue2CIAbWMsscUCeQAU91YEKVr9g&s",
      description: "Tom"
    },
    {
      id: 5,
      color: "blue",
      image: tom,
      description: "Non-chalant"
    },
    {
      id: 6,
      color: "violet",
      image: trump,
      description: "Donald-Trump"
    }
  ]
  return (
    <>
      <div>
        <h1 className="mood-board-heading">Destination Mood Board</h1>
        <div className="mood-board">
        {objects.map(object => (
          <MoodBoardItem key={object.id} color={object.color} image={object.image} description={object.description}/>
        ))}
        </div>
      </div>
    </>
  )
}
