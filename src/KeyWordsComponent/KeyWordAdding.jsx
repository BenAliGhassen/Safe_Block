/* eslint-disable no-undef */
import React from 'react';
import { useState, useEffect } from "react";


const KeyWordAdding = () => {
   const [keyword, setKeyword] = useState("");
  const [keywords, setKeywords] = useState([
    // Default list (your original list) — editable by user
    "porn", "xxx", "sex", "erotic", "adult", "hardcore", "fetish", "bdsm",
    "MILF", "gangbang", "shemale", "strapon", "blowjob", "handjob",
    "creampie", "cumshot", "bukkake", "anal", "orgy", "pussy", "tits",
    "dick", "cock", "asshole", "nude", "naked", "pornhub", "xvideos",
    "xhamster", "redtube", "tube8", "youporn", "amateur", "JAV",
    "porno", "pornographie", "sexe", "erotique", "adulte", "fetiche",
    "orgie", "film porno", "video porno", "baiser", "bite", "queue",
    "cul", "couille", "bander", "branler", "sucer", "lecher", "minou",
    "minette", "pute", "putain", "salope", "bordel", "اباحي", "اباحية",
    "افلام اباحية", "الجنس", "جنس", "ممارسة الجنس", "سكس", "عري",
    "عاري", "صورة عارية", "نيك", "طيز", "كس", "شرموطة", "عاهرة",
    "ثدي", "مزمار", "مثلي", "شيميل", "ميلف", "هنتاي", "كريم باي", "بوكاكيه"
  ]);

  
  useEffect(() => {
    chrome.storage.sync.get(["keywords"], (result) => {
      if (result.keywords) setKeywords(result.keywords);
    });
  }, []);

  
  useEffect(() => {
    chrome.storage.sync.set({ keywords });
  }, [keywords]);

  const addKeyword = () => {
    const trimmed = keyword.trim().toLowerCase();
    if (trimmed && !keywords.includes(trimmed)) {
      setKeywords([...keywords, trimmed]);
      setKeyword("");
    }
  };



  return (
    <div>
      <h3>Manage Keywords</h3>
      <input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addKeyword()}
      />
      <button onClick={addKeyword}>Add</button>
    </div>
  );
};

export default KeyWordAdding;
