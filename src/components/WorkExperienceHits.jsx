import { CASEWARE, SKATESCRIBE } from "../constants/WorkExperiences";
import BubbleList from "./BubbleList";
import SearchHit from "./SearchHit";

const WorkExperienceHits = () => {
  return (
    <div className="flex flex-col gap-10">
      <SearchHit
        image={CASEWARE.logo}
        pageTitle={CASEWARE.company}
        pageLink={CASEWARE.url}
        hitTitle={CASEWARE.jobTitle}
        date={CASEWARE.duration}
        description={CASEWARE.description}
        additionalInfo={<BubbleList list={CASEWARE.technologies} />}
      />
      <SearchHit
        image={SKATESCRIBE.logo}
        pageTitle={SKATESCRIBE.company}
        pageLink={SKATESCRIBE.url}
        hitTitle={SKATESCRIBE.jobTitle}
        date={SKATESCRIBE.duration}
        description={SKATESCRIBE.description}
        additionalInfo={<BubbleList list={SKATESCRIBE.technologies} />}
      />
    </div>
  );
};

export default WorkExperienceHits;
