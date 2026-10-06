import { useState } from "react";
import "./App.css";

function App() {

    const [text, setText] = useState("");
    const [summary, setSummary] = useState("");

    const handleSummarize = async () => {

        const response = await fetch(
            "http://localhost:5000/summarize",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    text: text
                })
            }
        );

        const data = await response.json();

        setSummary(data.summary);
    };

    return (
        <div>

            <h1>AI Text Summarizer</h1>

            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text..."
            />

            <br />

            <button onClick={handleSummarize}>
                Summarize
            </button>

            <h2>Summary</h2>

            <p>{summary}</p>

        </div>
    );
}

export default App;