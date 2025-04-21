import React, { useState } from "react";
import { useDispatch } from "react-redux";



export function KeywordsInput() {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const handleSearch = () => {
        const keywords = inputValue
            .split(",")
            .map((word) => word.trim())
            .filter((word) => word !== "");

/*        dispatch(setKeywords(keywords));*/
        setInputValue("");
    };

    return (
        <div style={{ display: "flex", gap: "8px" }}>
            <input
                type="text"
                placeholder="InnovTech, autonomus driving, AutoPilot 5000"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSearch} style={{ padding: "8px 16px" }}>
                Искать новости
            </button>
        </div>
    );
}