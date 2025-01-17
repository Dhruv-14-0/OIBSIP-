import { useEffect, useState } from "react";
import './tribute.css'

function TributePage() {
  const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
          if(localStorage.getItem('id') != ""){
            setIsLoading(false)
          }
    },[])
  
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <div class="container">
            <header class="header">
              <h1>Tribute to J. Robert Oppenheimer</h1>
              <p>The Father of the Atomic Age</p>
            </header>
            <main class="main-content">
              <div class="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Y88L2A8vtDxyS4UOLaUHah-vQ8Ji0j2j_w&s" />
              </div>
              <div class="text-container">
                <p>
                  J. Robert Oppenheimer, a theoretical physicist whose work
                  forever changed the course of history, stands as a monumental
                  figure in the scientific community and beyond. Born on April
                  22, 1904, in New York City, Oppenheimer’s brilliance was
                  evident from a young age. His academic journey led him to
                  Harvard University, where he graduated summa cum laude in just
                  three years. This was merely the beginning of a storied career
                  that would see him delve into quantum mechanics, nuclear
                  physics, and, ultimately, the development of the atomic bomb.
                </p>
                <p>
                  As the scientific director of the Manhattan Project during
                  World War II, Oppenheimer's leadership was crucial in the
                  creation of the first nuclear weapons. Working at the Los
                  Alamos Laboratory in New Mexico, he coordinated a team of the
                  brightest minds of the era. Their combined efforts culminated
                  in the successful test of the atomic bomb on July 16, 1945, an
                  event that Oppenheimer famously reflected on with a quote from
                  the Bhagavad Gita: "Now I am become Death, the destroyer of
                  worlds." This moment marked a profound shift in global
                  military power and heralded the atomic age.
                </p>
                <p>
                  Oppenheimer's legacy, however, is not solely defined by the
                  bomb. After the war, he became a staunch advocate for the
                  regulation of nuclear weapons and international control over
                  atomic energy. His tenure as chairman of the General Advisory
                  Committee to the Atomic Energy Commission saw him oppose the
                  development of the hydrogen bomb, advocating instead for
                  peaceful uses of atomic energy. This stance, amid the Cold War
                  tensions, led to his controversial security hearing in 1954,
                  where he was stripped of his security clearance amidst
                  accusations of communist sympathies and associations.
                </p>
                <p>
                  Despite the political and personal turmoil he faced,
                  Oppenheimer's contributions to science and his complex moral
                  reflections on his work continue to resonate. His post-war
                  years were spent in academic and advisory roles, notably as
                  the director of the Institute for Advanced Study in Princeton.
                  Oppenheimer passed away on February 18, 1967, but his legacy
                  endures in the fields of physics, in the ethical debates
                  surrounding scientific discovery, and in the annals of history
                  as a figure who grappled deeply with the consequences of his
                  monumental achievements.
                </p>
              </div>
            </main>
          </div>
          <footer class="footer">
            <p>
              In memory of J. Robert Oppenheimer - In a conflict between the
              heart and the brain, follow your heart.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}
export default TributePage