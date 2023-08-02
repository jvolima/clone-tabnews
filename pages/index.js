import party from "party-js";
import { useState } from "react";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  function handlePlay(e) {
    if (!isPlaying) {
      document.getElementById("music").play();
      setIsPlaying(true);
    }

    party.confetti(e.target);
  }

  function handleFinish() {
    document.getElementById("music").pause();
    setIsFinished(true);
  }

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "100vw",
        width: "100%",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ color: "#121214", fontSize: "3rem" }}>Clique no botão</h1>

      <audio src="./music.mp3" id="music" />

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <button
          onClick={handlePlay}
          style={{
            padding: "1rem 2rem",
            border: "0",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: "#FF00FF",
          }}
        >
          <strong style={{ color: "#FFFFFF", fontSize: "1.25rem" }}>
            {isPlaying ? "Mais confetes?" : "Clique aqui"}
          </strong>
        </button>
      </div>

      {isPlaying && (
        <div>
          {isFinished ? (
            <h1 style={{ color: "#FF0000", fontSize: "2.5rem" }}>Te amo!</h1>
          ) : (
            <button
              onClick={handleFinish}
              style={{
                margin: "4rem",
                padding: "1rem 2rem",
                border: "0",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: "#0000FF",
              }}
            >
              <strong style={{ color: "#FFFFFF", fontSize: "1.25rem" }}>
                Chega de música?
              </strong>
            </button>
          )}
        </div>
      )}
    </main>
  );
}

export default Home;
