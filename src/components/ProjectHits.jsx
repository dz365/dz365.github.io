import { ASTEROIDS, ECOSQUAD, WEBGALLERY } from "../constants/Projects";
import BubbleList from "./BubbleList";
import SearchHit from "./SearchHit";

const ProjectHits = () => {
  return (
    <div className="flex flex-col gap-10">
      <SearchHit
        image={ECOSQUAD.logo}
        pageTitle={ECOSQUAD.name}
        pageLink={ECOSQUAD.url}
        hitTitle={ECOSQUAD.name}
        date={ECOSQUAD.duration}
        description={ECOSQUAD.description}
        additionalInfo={<BubbleList list={ECOSQUAD.technologies} />}
      />
      <SearchHit
        image={WEBGALLERY.logo}
        pageTitle={WEBGALLERY.name}
        pageLink={WEBGALLERY.url}
        hitTitle={WEBGALLERY.name}
        date={WEBGALLERY.duration}
        description={WEBGALLERY.description}
        additionalInfo={<BubbleList list={WEBGALLERY.technologies} />}
      />
      <SearchHit
        image={ASTEROIDS.logo}
        pageTitle={ASTEROIDS.name}
        pageLink={ASTEROIDS.url}
        hitTitle={ASTEROIDS.name}
        date={ASTEROIDS.duration}
        description={ASTEROIDS.description}
        additionalInfo={<BubbleList list={ASTEROIDS.technologies} />}
      />
    </div>
  );
};

export default ProjectHits;
