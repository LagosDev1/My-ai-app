export const arrayItems = [
    {
        name: "Q&A",
        id: "q&a",
        description: "Answer questions based on existing knowledge.",
        option: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"]
        }
    },

    {
        name: "Grammer Correction",
        id: "grammerCorrection",
        description: "Correct your sentences to correct English.",
    },
    {
        name: "Summarize for a 2nd grader",
        id: "summary",
        description: "Translates difficult text into simpler concepts.",
    },
    {
        name: "English to other languages",
        id: "translate",
        description: "Translates English text into French, Spanish, Greece, etc.",
    },
    {
        name: "Explain code",
        id: "explainCode",
        description: "Explains a complete piece of code.",
    },
    {
        name: "JavaScript to Python",
        id: "jstopy",
        description: "Helps to convert simple javascript expression to python code.",
    },


];
   
