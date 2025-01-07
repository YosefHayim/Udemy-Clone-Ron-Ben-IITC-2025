import Description from "./Description/Description";
import Requirements from "./Requirements/Requirements";
import Section from "./Section/Section";

const ViewCoursePageInfo = () => {
  return (
    <div>
      <div className="bg-[#1c1d1f] text-white">
        <div className="flex flex-row gap-[1em] text-[#c0c4fc]">
          <b>Teaching & Academics</b>
          <b>Engineering</b>
          <b>Electronics</b>
        </div>
        <div className="text-white font-bold">
          <h1>Electronics : Semiconductor - A thorough understanding</h1>
        </div>
        <div>
          <p>
            Learn the fundamentals of Semiconductors...Join the students over
            3000 across the world..
          </p>
        </div>
        <div className="flex flex-row gap-[0.5em]">
          <b>4.1</b>
          <p>(106 ratings)</p>
          <p>7,511 students</p>
        </div>
        <div>
          <p>Created by Sumanta kumar Pal</p>
        </div>
        <div className="flex flex-row gap-[0.5em]">
          <p>info icon</p>
          <p>Last updated 9/2017</p>
          <p>world icon</p>
          <p>English</p>
        </div>
        <div className="flex items-start justify-start">
          <b>What you'll learn</b>
          <div className="flex-col">
            <ul>
              <li>
                <p>Understand the fundamentals of Semiconductors.</p>
              </li>
              <li>
                <p>Classify materials w.r.t. Energy Band concept.</p>
              </li>
              <li>
                <p>
                  Learn Intrinsic semiconductor : Fundamentals,Theory and
                  Problems.
                </p>
              </li>
              <li>
                <p>Learn the concept of Drift velocity, Free-path, Mobility.</p>
              </li>
            </ul>
          </div>
          <div className="flex-col">
            <ul>
              <li>
                <p>Learn the Energy Band concept.</p>
              </li>
              <li>
                <p>
                  Learn about Direct band gap and Indirect band gap
                  Semiconductors.
                </p>
              </li>
              <li>
                <p>
                  Understand Extrinsic Semiconductor : Fundamentals, Concept of
                  Doping, P-type and N-type Semiconductor.
                </p>
              </li>
              <li>
                <p>
                  Understand the relation among current density, mobility and
                  conductivity.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <b>Explore related topics</b>
          <div className="flex flex-row gap-[0.5em]">
            <b>Electronics</b>
            <b>Engineering</b>
            <b>Teaching & Academics</b>
          </div>
        </div>
        <div className="flex flex-col">
          <b>Course Content</b>
          <div className="flex flex-row gap-[0.5em]">
            <p>2 sections</p>
            <p>15 lectures</p>
            <p>2h 13m total length</p>
          </div>
          <div>
            <Section />
            <Section />
          </div>
          <Requirements />
          <Description />
        </div>
      </div>
    </div>
  );
};

export default ViewCoursePageInfo;
