import React from 'react';

function App() {
  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", color: "white", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      
      <h1>TradeLogic Dashboard</h1>
      <p>Status: FREE (12 days history)</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ background: "#020617", padding: "20px", borderRadius: "8px", minWidth: 120 }}>
          <h3>P/L</h3>
          <p>+1,250 €</p>
        </div>

        <div style={{ background: "#020617", padding: "20px", borderRadius: "8px", minWidth: 120 }}>
          <h3>Winrate</h3>
          <p>58%</p>
        </div>

        <div style={{ background: "#020617", padding: "20px", borderRadius: "8px", minWidth: 120 }}>
          <h3>Trades</h3>
          <p>42</p>
        </div>
      </div>

      <h2 style={{ marginTop: "40px" }}>Recent Trades</h2>

      <ul>
        <li>EURUSD | +120 €</li>
        <li>GBPUSD | -50 €</li>
        <li style={{ opacity: 0.4 }}>🔒 USDJPY | Locked</li>
      </ul>

      <button style={{ marginTop: "20px", padding: "10px 20px", borderRadius: 6, border: "none", cursor: "pointer" }}>
        Upgrade to PRO
      </button>

    </div>
  );
}

export default App; Add src/App.js (initial dashboard)
