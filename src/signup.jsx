// Signup.tsx

import { useState } from "react";
import "./style.css";

const strengthLabels = ["weak", "medium", "strong"];

export const Signup = () => {
    const [strength, setStrength] = useState("");

    const getStrength = (password: string) => {
        let strengthIndicator: number = -1,
            upper = false,
            lower = false,
            number = false;
        for (
            let index = 0; index < password.length; index++
        ) {
            const char = passord.charCodeAt(index);
            if (!upper && char >= 65 && char <= 90) {
                upper = true; strengthIndicator++;
            }
            if (!number && char >= 48 && char <= 57) {
                number = true; strengthIndicator++;
            }
            if (!lower && char >= 97 && char <= 122) {
                lower = true; strengthIndicator++;
            }
        }
        setStrength(strengthLabels[strengthIndicator]);
    }
};