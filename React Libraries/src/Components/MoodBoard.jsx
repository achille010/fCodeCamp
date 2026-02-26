import tom from "../img/tom.jpg"
import trump from "../img/donald.jpg"
import chaste from "../img/chaste.png"

export const MoodBoardItem = ({color, image, description}) => {
  return(
    <div 
      className="mood-board-item rounded-lg p-2.5 flex flex-col items-center justify-center text-white shadow-lg text-center h-[250px]"
      style={{backgroundColor: color}}
    >
      <img 
        className="rounded w-[180px] h-[150px] object-cover"
        src={image}
        alt={description}
      />
      <h3 className="mt-5 text-xl">
        {description}
      </h3>
    </div>
  )
}

export const MoodBoard = () => {
  const objects = [
    {
      id: 1,
      color: "red",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "forest",
    },
    {
      id: 2,
      color: "purple",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "water",
    },
    {
      id: 3,
      color: "black",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "grass",
    },
    {
      id: 4,
      color: "gray",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTenXzGl--ue2CIAbWMsscUCeQAU91YEKVr9g&s",
      description: "Tom",
    },
    {
      id: 5,
      color: "blue",
      image: tom,
      description: "Non-chalant",
    },
    {
      id: 6,
      color: "violet",
      image: trump,
      description: "Donald-Trump",
    },
    {
      id: 7,
      color: "beige",
      image: chaste,
      description: "rock-star",
    },
  ];

  return (
    <div className="min-h-screen bg-[#ffffcc]">
      <h1 className="mood-board-heading text-center text-4xl text-gray-800 mt-5">
        Destination Mood Board
      </h1>

      <div className="mood-board grid grid-cols-3 gap-5 p-5 max-w-[900px] mx-auto">
        {objects.map((object) => (
          <MoodBoardItem
            key={object.id}
            color={object.color}
            image={object.image}
            description={object.description}
          />
        ))}
      </div>
    </div>
  );
};