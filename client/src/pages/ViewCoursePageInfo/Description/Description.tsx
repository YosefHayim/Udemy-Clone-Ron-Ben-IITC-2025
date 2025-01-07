import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Description = () => {
  return (
    <div>
      <h2>Description</h2>
      <p>
        Learn the fundamentals of Semiconductors and take the first leap to the
        world of Electronics. This course will be very helpful for students with
        great interest towards science and especially electronics. Finally ,the
        course is so designed that if anyone goes from lecture 1 to last lecture
        the entire subject can be thoroughly understood easily. So lets have a
        highlight of the entire course quickly-
      </p>
      <li>Learn the basics of Semiconductors.</li>
      <ul>
        <li>Which materials are used as Semiconductors.</li>
        <li>
          Energy Band concept and classification of materials w.r.t. this
          concept.
        </li>
        <li>Thorough discussion on Intrinsic and Extrinsic semiconductors.</li>
        <li>
          Detailed discussion on Fermi-Dirac distribution and Fermi level. It is
          a very important concept and helps students to further clarify the
          understanding of semiconductors.
        </li>
        <li>
          Thorough discussion on electron concentration with mathematical
          expressions.
        </li>
        <li>
          Thorough discussion on hole concentration with mathematical
          expressions.
        </li>
        <li>Quiz questions have also been included for clarifying concepts.</li>
        <li>
          Discussion on thermal equilibrium and Mass Action Law for intrinsic
          semiconductors.
        </li>
        <li>
          Concept of intrinsic carrier concentration and derivation of its
          mathematical expression.
        </li>
        <li>Identification of Fermi level for an intrinsic semiconductor.</li>
        <li>
          Relation among drift velocity, current density, and conductivity for a
          semiconductor material.
        </li>
        <li>
          Discussion on frequently asked questions regarding Semiconductors.
        </li>
        <li>
          Detailed discussion on the topic will help students to crack different
          competitive examinations.
        </li>
      </ul>
      <div>
        <h2 className="font-bold">Who is this course for?:</h2>
        <ul>
          <li>
            The course is for those who love electronics and love to explore the
            world of electronics
          </li>
        </ul>
      </div>
      <div className="flex gap-[1em]">
        <span>Show less</span>
        <MdOutlineKeyboardArrowUp />
      </div>
    </div>
  );
};

export default Description;
