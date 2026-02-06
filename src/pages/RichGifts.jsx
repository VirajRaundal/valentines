import { useNavigate } from 'react-router-dom';
import hermesImg from '../assets/hermes.webp';

const RichGifts = () => {
    const navigate = useNavigate();

    const gifts = [
        { title: "Hermes", image: hermesImg, isImage: true, desc: "God knows why you love it so much but if you do, I do too :)" },
        { title: "Cafe in Italy", image: "🍝", desc: "So that you can lose all our money" },
        { title: "Tulips everyday", image: "🌷", desc: "why tf are they so expensive" },
        { title: "A house on the beach?", image: "🏖️", desc: "So that the loml can get some Vit D" },
    ];

    return (
        <div className="page-container" style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>When I am Rich... 💸</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>I will get you these hehe</p>

            <div className="grid-container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
            }}>
                {gifts.map((gift, index) => (
                    <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {gift.isImage ? (
                            <img src={gift.image} alt={gift.title} style={{ width: '150px', height: '150px', objectFit: 'contain', marginBottom: '1rem' }} />
                        ) : (
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{gift.image}</div>
                        )}
                        <h3>{gift.title}</h3>
                        <p>{gift.desc}</p>
                    </div>
                ))}
            </div>

            <button onClick={() => navigate('/real-gifts')}>
                But what can I actually get you? 👉
            </button>
        </div>
    );
};

export default RichGifts;
