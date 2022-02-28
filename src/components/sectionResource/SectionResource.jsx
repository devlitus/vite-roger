import "./sectionResource.css";
export const SectionResource = () => {
  return (
    <div className="section-resources ">
      <div className="box-resource">
        <div className="recoure-image resource-video">
          <p className="resource-text resource-video-text">VIDEO</p>
        </div>
        <div className="recoure-image resource-audio">
          <p className="resource-text resource-audio-text">AUDIO</p>
        </div>
        <div className="recoure-image resource-blog">
          <p className="resource-text resource-blog-text">BLOG</p>
        </div>
      </div>
      <div className="box-resource">
        <div className="recoure-image resource-grafic"></div>
        <div className="recoure-image resource-grafic"></div>
        <div className="recoure-image resource-arrowUp"></div>
      </div>
    </div>
  );
};
