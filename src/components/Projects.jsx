import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

const Projects = () => {
  const images = [project1, project2, project3];

  return (
    <div className="w-[80%] mx-auto mt-20">
      <div className="flex gap-5 justify-center flex-wrap">
        {images.map((image, index) => {
          return <img key={index} src={image} className="object-cover" />;
        })}
      </div>
      <div className="flex justify-center mt-10">
        <button className="font-semibold text-sm h-12 w-32 border border-gray-600 text-gray-600 border-solid rounded-lg shadow-sm hover:bg-gray-800 hover:text-gray-50 duration-150">
          View All Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
