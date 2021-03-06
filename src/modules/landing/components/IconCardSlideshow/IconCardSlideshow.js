import "./IconCardSlideshow.css";
import IconCard from "../IconCard";

const IconCardSlideshow = ({ cards }) => (
  <>
    <ul className="icon-card-slideshow-wrapper">
      {/* we use the same array with items duplicated because otherwise in big resolutions there is a space that makes the animation looks bad */}
      {cards.concat(cards).concat(cards).map((card, index) =>
        <li
          key={`${card.id}-${index}`}
          className="icon-card-slideshow-item"
        >
          <IconCard
            {...card}
          />
        </li>)
      }
    </ul>
  </>
);

export default IconCardSlideshow;