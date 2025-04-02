export default function ScoreBoard({currentScore, highScore}) {

    return (
        <div className="scoreBoard">
            <h3>Score: {currentScore}</h3>
            <h3>High Score: {highScore}</h3>
        </div>
    );
}