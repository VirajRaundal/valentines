import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RealGifts = () => {
    const navigate = useNavigate();
    const [selectedGift, setSelectedGift] = useState(null);
    const [confirmed, setConfirmed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [pendingGift, setPendingGift] = useState(null);

    const realGifts = [
        { id: 1, title: "My kisses?", emoji: "💋" },
        { id: 2, title: "A bouquet of Lilies?", emoji: "💐" },
        { id: 3, title: "A portable heating pad for your periods?", emoji: "♨️" },
        { id: 4, title: "Just roaming around?", emoji: "🫣" },
        { id: 5, title: "All of the above!", emoji: "🥰" },
    ];

    const handleGiftClick = (gift) => {
        if (!confirmed) {
            setPendingGift(gift);
            setShowModal(true);
        }
    };

    const confirmGift = () => {
        setSelectedGift(pendingGift);
        setConfirmed(true);
        setShowModal(false);
    };

    return (
        <div className="page-container" style={{ padding: '2rem', textAlign: 'center', position: 'relative' }}>
            <h1>What gift do you want now? 🎁</h1>

            {!confirmed ? (
                <>
                    <p>Since I'm not Richie Rich yet, pick one of these!</p>
                    <div className="grid-container" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        marginTop: '2rem',
                        marginBottom: '3rem'
                    }}>
                        {realGifts.filter(g => g.id !== 5).map((gift) => (
                            <div
                                key={gift.id}
                                className="card"
                                onClick={() => handleGiftClick(gift)}
                                style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <div style={{ fontSize: '4rem' }}>{gift.emoji}</div>
                                <h3>{gift.title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Special Option */}
                    {realGifts.filter(g => g.id === 5).map((gift) => (
                        <div
                            key={gift.id}
                            className="card"
                            onClick={() => handleGiftClick(gift)}
                            style={{
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                                maxWidth: '300px',
                                margin: '0 auto',
                                transform: 'scale(1.1)',
                                border: '2px solid #ff4d6d'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        >
                            <div style={{ fontSize: '5rem' }}>{gift.emoji}</div>
                            <h3 style={{ fontSize: '1.5rem' }}>{gift.title}</h3>
                        </div>
                    ))}
                    <div style={{ marginBottom: '3rem' }}></div>
                </>
            ) : (
                <div style={{ margin: '3rem 0', animation: 'fadeIn 1s' }}>
                    <h2>Okay bebu. Getting you {selectedGift.title} for Valentine's :)</h2>
                    <div style={{ fontSize: '6rem', margin: '2rem' }}>{selectedGift.emoji}</div>
                    <button onClick={() => navigate('/plans')} style={{ marginTop: '2rem' }}>
                        👉
                    </button>
                </div>
            )}

            {/* Custom Modal */}
            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <div className="card" style={{
                        backgroundColor: '#fff0f3',
                        padding: '2rem',
                        borderRadius: '20px',
                        maxWidth: '400px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                        animation: 'popIn 0.3s ease-out'
                    }}>
                        <h2 style={{ color: '#ff4d6d', marginBottom: '1rem' }}>Wait a sec! 💖</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                            Are you sure you want <strong>{pendingGift?.title}</strong>?
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <button
                                onClick={confirmGift}
                                style={{ backgroundColor: '#ff4d6d', color: 'white' }}
                            >
                                Yes!
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                style={{ backgroundColor: '#ffccd5', color: '#590d22' }}
                            >
                                Let me think again
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <style>{`
                @keyframes popIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </div >
    );
};

export default RealGifts;
