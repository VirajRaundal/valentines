import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ValentineQuestion = () => {
    const navigate = useNavigate();
    const [noCount, setNoCount] = useState(0);
    const [yesSize, setYesSize] = useState(1);
    const [noPosition, setNoPosition] = useState({ top: 'auto', left: 'auto', position: 'relative' });
    const [isHappy, setIsHappy] = useState(false);

    const handleNoClick = () => {
        setNoCount(noCount + 1);
        setYesSize(yesSize * 1.15);

        // Move "NO" button randomly
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 50);

        setNoPosition({
            position: 'absolute',
            top: `${randomY}px`,
            left: `${randomX}px`,
        });
    };

    const handleYesClick = () => {
        setIsHappy(true);
        setTimeout(() => {
            navigate('/rich-gifts');
        }, 2000); // Wait 2s for happy animation
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Bebuuuuuuuu please?",
            "You sure?",
            "Ban na ga, please",
            "Shinde Bai ka asa kartay tumhi",
            "Sochlo phirse",
            "Boldo na Yes",
            "Yes ka button kahi aur hai usse dabao",
            "Yes dabaoge toh ek jaadu dikhaunga",
            "Aise na dil todo hamara :(",
            "Arrey!",
            "Don't be so cold!",
            "I would never do this to you btw, just saying",
            "Pakka?",
            "Dil todoge mera?",
            "You're breaking my heart ;(",
        ];
        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    return (
        <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', overflow: 'hidden' }}>
            <h1>{isHappy ? "YAY!!! I Knew It! 🥰" : "Will you be my Valentine, Shinde Bai? 🌷🥰͙֒"}</h1>

            {!isHappy && (
                <div className="buttons-container" style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '20px' }}>
                    <button
                        onClick={handleYesClick}
                        style={{
                            fontSize: `${yesSize}rem`,
                            padding: `${0.8 * yesSize}rem ${1.6 * yesSize}rem`,
                            backgroundColor: '#ff4d6d', /* Primary pink */
                            zIndex: 10
                        }}
                    >
                        YES
                    </button>

                    {noCount < 10 && (
                        <button
                            onClick={handleNoClick}
                            style={{
                                ...noPosition,
                                backgroundColor: '#ccc',
                                color: '#333'
                            }}
                        >
                            {getNoButtonText()}
                        </button>
                    )}
                </div>
            )}

            <div className="tulips-container" style={{ marginTop: '50px', fontSize: isHappy ? '6rem' : '4rem', transition: 'all 0.5s ease' }}>
                <span className={isHappy ? "bounce" : "floating"}>{isHappy ? "💐" : "🌷"}</span>
                <span className={isHappy ? "bounce" : "floating"} style={{ animationDelay: '0.2s' }}>{isHappy ? "💖" : "🌷"}</span>
                <span className={isHappy ? "bounce" : "floating"} style={{ animationDelay: '0.4s' }}>{isHappy ? "💐" : "🌷"}</span>

                {isHappy && (
                    <style>{`
                .bounce {
                    display: inline-block;
                    animation: bounce 0.5s infinite alternate;
                }
                @keyframes bounce {
                    from { transform: translateY(0); }
                    to { transform: translateY(-20px); }
                }
            `}</style>
                )}
            </div>
        </div>
    );
};

export default ValentineQuestion;
