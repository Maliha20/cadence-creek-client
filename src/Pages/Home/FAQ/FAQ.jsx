import React from "react";
import { Fade } from "react-awesome-reveal";
import "./FAQ.css";
const FAQ = () => {
  return (
    <div>
      <Fade>
      <h2 className="my-12 text-center font-bold text-4xl text-blue-950 ">
        Frequently Asked Questions
      </h2>
      <div className="bg-img p-12 rounded-md shadow-xl shadow-blue-500/50 container space-y-2 my-12 mx-auto">
        <div className="text-center collapse collapse-plus bg-sky-800/80">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-3xl text-white font-medium">
            About Us
          </div>
          <div className="collapse-content">
            <p className="text-xl font-semibold text-white">
              Cadence Creek Music School offers a wide range of music education
              and training programs for individuals of all ages and skill
              levels. With a team of highly qualified instructors and a passion
              for music, Cadence Creek Music School is dedicated to nurturing
              talent, fostering creativity, and providing a supportive learning
              environment. Here are some of the key offerings available at the
              school
            </p>
          </div>
        </div>
        <div className="text-center collapse collapse-plus bg-sky-800/80">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-3xl text-white font-medium">
            What do we offer?
          </div>
          <div className="collapse-content">
            <ul className="text-xl font-semibold text-white">
              <li>
                <span className="font-bold text-blue-100">
                  Instrumental Lessons:{" "}
                </span>{" "}
                Cadence Creek Music School provides comprehensive instrumental
                instruction for various instruments such as piano, guitar,
                violin, drums, flute etc.
              </li>
              <li>
                <span className="font-bold text-blue-100">
                  Vocal Training:{" "}
                </span>
                The school offers vocal training and singing lessons for
                aspiring singers. Students can develop their vocal techniques,
                improve their range, work on breath control, and explore various
                musical styles under the guidance of experienced vocal
                instructors.
              </li>
              <li>
                <span className="font-bold text-blue-100">
                  Music Theory and Ear Training:
                </span>
                Cadence Creek Music School emphasizes the importance of music
                theory and ear training in developing well-rounded musicians.
                Students can take dedicated classes to strengthen their
                understanding of musical concepts, including notation, scales,
                chords, harmony, rhythm, and sight-reading.
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center collapse collapse-plus bg-sky-800/80">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-3xl text-white font-medium">
            Why should you choose us?
          </div>
          <div className="collapse-content">
            <p className="text-xl font-semibold text-white">
              At Cadence Creek Music School, we take pride in our unique
              specialties and believe there are several compelling reasons why
              you should choose us for your music education: Expert and
              Passionate Instructors: Our team consists of highly qualified
              instructors who are not only skilled musicians but also passionate
              about teaching. They are dedicated to nurturing each student's
              talent, providing personalized guidance, and creating a positive
              and inspiring learning environment. Tailored Learning Experience:
              We understand that every student is unique, with different goals,
              interests, and learning styles. That's why we offer personalized
              lessons and programs that are tailored to individual needs,
              ensuring that each student receives the attention and support
              necessary to thrive. Comprehensive Curriculum: Our curriculum is
              designed to provide a well-rounded music education. We offer a
              wide range of courses, including instrumental lessons, vocal
              training, music theory, performance opportunities, music
              production, and more. This comprehensive approach enables students
              to develop their skills holistically and explore different facets
              of music.
            </p>
          </div>
        </div>
      </div>
    </Fade>
      
    </div>
  );
};

export default FAQ;
